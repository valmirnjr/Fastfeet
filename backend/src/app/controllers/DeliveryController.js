import { Op } from "sequelize";

import Delivery from "../models/Delivery";

import CreateDeliveryService from "../services/CreateDeliveryService";
import UpdateDeliveryService from "../services/UpdateDeliveryService";

import NewDeliveryMail from "../jobs/NewDeliveryMail";
import Queue from "../../lib/Queue";

class DeliveryController {
  async index(req, res) {
    const { product } = req.query;

    const filterOptions = {
      where: {
        product: product ? { [Op.iLike]: `%${product}%` } : { [Op.ne]: null },
      },
    };

    const deliveries = await Delivery.findAll(filterOptions);

    return res.json(deliveries);
  }

  async store(req, res) {
    const { recipient_id, deliveryman_id, product } = req.body;

    const delivery = await CreateDeliveryService.run({
      recipient_id,
      deliveryman_id,
      product,
    });

    await Queue.add(NewDeliveryMail.key, {
      delivery,
    });

    return res.json(delivery);
  }

  async update(req, res) {
    const { id: delivery_id } = req.params;

    const { recipient_id, deliveryman_id, product } = req.body;

    const delivery = await UpdateDeliveryService.run({
      delivery_id,
      recipient_id,
      deliveryman_id,
      product,
    });

    return res.json(delivery);
  }

  async delete(req, res) {
    const { id: deliveryId } = req.params;

    try {
      const delivery = await Delivery.findByPk(deliveryId);

      if (!delivery) {
        return res.status(400).json({ error: "Delivery not found" });
      }

      await delivery.destroy();

      return res.json({ success: "Delivery was deleted" });
    } catch (err) {
      return res.status(500).json({ error: "Delivery could not be deleted" });
    }
  }
}

export default new DeliveryController();
