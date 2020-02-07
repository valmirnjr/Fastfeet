import Delivery from "../models/Delivery";

import CreateDeliveryService from "../services/CreateDeliveryService";
import UpdateDeliveryService from "../services/UpdateDeliveryService";

import Mail from "../../lib/Mail";

class DeliveryController {
  async index(req, res) {
    const deliveries = await Delivery.findAll();

    return res.json(deliveries);
  }

  async store(req, res) {
    const { recipient_id, deliveryman_id, product } = req.body;

    const delivery = await CreateDeliveryService.run({
      recipient_id,
      deliveryman_id,
      product,
    });

    await Mail.sendMail({
      to: `${delivery.deliveryman.name} <${delivery.deliveryman.email}>`,
      subject: "Nova entrega",
      text: "Você tem uma nova entrega",
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
