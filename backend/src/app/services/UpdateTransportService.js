import Delivery from "../models/Delivery";
import DeliveryMan from "../models/DeliveryMan";

class CreateDeliveryService {
  async run({
    deliveryman_id,
    delivery_id,
    signature_id,
    start_date,
    end_date,
  }) {
    const deliveryman = await DeliveryMan.findByPk(deliveryman_id);

    if (!deliveryman) {
      throw new Error("Deliveryman not found");
    }

    const delivery = await Delivery.findByPk(delivery_id);

    if (!delivery) {
      throw new Error("Delivery not found");
    }

    await delivery.update({
      signature_id,
      start_date,
      end_date,
    });

    return {
      delivery_id,
      deliveryman_id,
      recipient_id: delivery.recipient_id,
      signature_id,
      product: delivery.product,
      canceled_at: delivery.canceled_at,
      start_date,
      end_date,
    };
  }
}

export default new CreateDeliveryService();
