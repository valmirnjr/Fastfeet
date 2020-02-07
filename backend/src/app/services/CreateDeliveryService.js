import Recipient from "../models/Recipient";
import Delivery from "../models/Delivery";
import DeliveryMan from "../models/DeliveryMan";

class CreateDeliveryService {
  async run({ recipient_id, deliveryman_id, product }) {
    const recipient = await Recipient.findByPk(recipient_id);

    if (!recipient) {
      throw new Error("Recipient not found");
    }

    const deliveryman = await DeliveryMan.findByPk(deliveryman_id);

    if (!deliveryman) {
      throw new Error("Deliveryman not found");
    }

    const delivery = await Delivery.create({
      recipient_id,
      deliveryman_id,
      product,
    });

    return {
      id: delivery.id,
      deliveryman_id,
      recipient_id,
      product: delivery.product,

      deliveryman: {
        id: deliveryman.id,
        name: deliveryman.name,
        email: deliveryman.email,
      },
    };
  }
}

export default new CreateDeliveryService();
