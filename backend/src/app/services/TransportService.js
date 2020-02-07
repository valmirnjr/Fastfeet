import { startOfToday } from "date-fns";

import Delivery from "../models/Delivery";
import DeliveryMan from "../models/DeliveryMan";
import Withdrawal from "../schemas/Withdrawal";

class TransportService {
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

    if (delivery.deliveryman_id !== Number(deliveryman_id)) {
      throw new Error("You can't update this delivery");
    }

    if (signature_id === null) {
      const withdrawals = await Withdrawal.find({
        deliveryman_id,
        createdAt: {
          $gte: startOfToday(),
        },
      });

      if (withdrawals.length >= 5) {
        throw new Error("You have reached your daily withdrawals max");
      }

      await Withdrawal.create({
        deliveryman_id,
      });
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
      start_date: start_date || delivery.start_date,
      end_date,
    };
  }
}

export default new TransportService();
