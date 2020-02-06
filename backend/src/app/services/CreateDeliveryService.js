import Recipient from "../models/Recipient";
import Delivery from "../models/Delivery";
import DeliveryMan from "../models/DeliveryMan";

class CreateDeliveryService {
  async run({ recipient_id, deliveryman_id, product }) {
    const recipient = await Recipient.findByPk(recipient_id);

    if (!recipient) {
      throw new Error("Recipient not found");
    }

    const deliveryman = DeliveryMan.findByPk(deliveryman_id);

    if (!deliveryman) {
      throw new Error("Deliveryman not found");
    }

    const delivery = await Delivery.create({
      recipient_id,
      deliveryman_id,
      product,
    });

    return delivery;
  }
}

export default new CreateDeliveryService();
