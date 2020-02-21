import { Op } from "sequelize";
import DeliveryProblem from "../models/DeliveryProblem";
import Delivery from "../models/Delivery";
import DeliveryMan from "../models/DeliveryMan";
import Recipient from "../models/Recipient";

import CanceledDeliveryMail from "../jobs/CanceledDeliveryMail";
import Queue from "../../lib/Queue";

class DeliveryProblemController {
  async index(req, res) {
    const { deliveryId } = req.params;

    const filterOptions = {
      where: {
        delivery_id: deliveryId || { [Op.ne]: null },
      },
    };

    const deliveries = await DeliveryProblem.findAll(filterOptions);

    return res.json(deliveries);
  }

  async store(req, res) {
    const { deliveryId } = req.params;

    const delivery = await Delivery.findByPk(deliveryId);

    if (!delivery) {
      return res.status(400).json({ error: "Delivery not found." });
    }

    const { description } = req.body;
    const deliveryProblem = await DeliveryProblem.create({
      delivery_id: deliveryId,
      description,
    });

    return res.json(deliveryProblem);
  }

  async delete(req, res) {
    const { problemId } = req.params;

    try {
      const problem = await DeliveryProblem.findByPk(problemId);

      if (!problem) {
        return res.status(400).json({ error: "Problem not found" });
      }

      const delivery = await Delivery.findByPk(problem.delivery_id, {
        include: [
          {
            model: DeliveryMan,
            as: "deliveryman",
            attributes: ["id", "name", "email"],
          },
          {
            model: Recipient,
            as: "recipient",
            attributes: [
              "id",
              "street",
              "number",
              "complement",
              "city",
              "state",
              "cep",
            ],
          },
        ],
      });

      if (!delivery) {
        return res.status(400).json({ error: "Delivery not found." });
      }

      await delivery.update({
        canceled_at: new Date(),
      });

      await Queue.add(CanceledDeliveryMail.key, {
        delivery,
        problem,
      });

      return res.json({ success: "Delivery was canceled." });
    } catch (err) {
      return res.status(500).json({ error: "Delivery could not be canceled." });
    }
  }
}

export default new DeliveryProblemController();
