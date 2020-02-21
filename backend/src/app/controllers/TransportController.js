import { Op } from "sequelize";

import Delivery from "../models/Delivery";
import DeliveryMan from "../models/DeliveryMan";
import File from "../models/File";

import TransportService from "../services/TransportService";

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

  async store(req, res) {
    const {
      deliverymanId: deliveryman_id,
      deliveryId: delivery_id,
    } = req.params;

    try {
      const delivery = await TransportService.run({
        deliveryman_id,
        delivery_id,
        start_date: new Date(),
      });

      return res.json(delivery);
    } catch (err) {
      return res.status(400).json(err.message);
    }
  }

  async update(req, res) {
    const {
      deliverymanId: deliveryman_id,
      deliveryId: delivery_id,
    } = req.params;

    if (req.file) {
      const { originalname: name, filename: path } = req.file;

      const file = await File.create({ name, path });

      const delivery = await TransportService.run({
        deliveryman_id,
        delivery_id,
        signature_id: file.id,
        end_date: new Date(),
      });

      return res.json(delivery);
    }

    // If no file was sent, it means the deliveryman only wants to update de start_date
    const delivery = await TransportService.run({
      deliveryman_id,
      delivery_id,
      start_date: new Date(),
    });

    return res.json(delivery);
  }
}

export default new TransportController();
