import Recipient from "../models/Recipient";
import Delivery from "../models/Delivery";
import DeliveryMan from "../models/DeliveryMan";

class CreateDeliveryService {
  async run({ delivery_id, recipient_id, deliveryman_id, product }) {
    const delivery = await Delivery.findByPk(delivery_id);

    if (!delivery) {
      throw new Error("Delivery not found");
    }

    const recipient = await Recipient.findByPk(recipient_id);

    if (!recipient) {
      throw new Error("Recipient not found");
    }

    const deliveryman = await DeliveryMan.findByPk(deliveryman_id);

    if (!deliveryman) {
      throw new Error("Deliveryman not found");
    }

    await delivery.update({
      recipient_id,
      deliveryman_id,
      product,
    });

    return {
      delivery_id,
      recipient_id,
      deliveryman_id,
      product,
    };
  }
}

export default new CreateDeliveryService();
