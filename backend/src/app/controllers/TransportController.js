import { Op } from "sequelize";

import Delivery from "../models/Delivery";
import DeliveryMan from "../models/DeliveryMan";

import UpdateTransportService from "../services/UpdateTransportService";

class TransportController {
  async index(req, res) {
    const { id: deliveryman_id } = req.params;

    // Query when the deliveryman wants to check his completed deliveries
    const completedFilter = req.query.completed;

    const deliveryman = await DeliveryMan.findByPk(deliveryman_id);

    if (!deliveryman) {
      return res.status(400).json({ error: "Deliveryman not found" });
    }

    const queryOptions = {
      deliveryman_id,
      canceled_at: null,
      end_date: completedFilter ? { [Op.ne]: null } : { [Op.eq]: null },
    };

    const deliveries = await Delivery.findAll({
      where: queryOptions,
      attributes: ["id", "recipient_id", "deliveryman_id", "start_date"],
    });

    return res.json(deliveries);
  }

  async update(req, res) {
    const {
      deliverymanId: deliveryman_id,
      deliveryId: delivery_id,
    } = req.params;

    const { signature_id, start_date, end_date } = req.body;

    try {
      const delivery = await UpdateTransportService.run({
        deliveryman_id,
        delivery_id,
        signature_id,
        start_date,
        end_date,
      });

      return res.json(delivery);
    } catch (err) {
      return res.status(400).json(err.message);
    }
  }
}

export default new TransportController();
