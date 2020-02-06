import {
  isAfter,
  isBefore,
  setHours,
  setMinutes,
  setSeconds,
  setMilliseconds,
  parseISO,
} from "date-fns";

import Delivery from "../models/Delivery";
import Recipient from "../models/Recipient";
import DeliveryMan from "../models/DeliveryMan";

class DeliveryController {
  async store(req, res) {
    const { recipient_id, deliveryman_id, start_date } = req.body;

    const recipient = await Recipient.findByPk(recipient_id);

    if (!recipient) {
      return res.status(400).json({ error: "Recipient not found" });
    }

    const deliveryman = DeliveryMan.findByPk(deliveryman_id);

    if (!deliveryman) {
      return res.status(400).json({ error: "Deliveryman not found" });
    }

    /**
     * Check if start_date is between 08:00h and 18:00h
     */
    if (start_date) {
      const withdrawalStart = setHours(
        setMinutes(setSeconds(setMilliseconds(parseISO(start_date), 0), 0), 0),
        8
      );

      const isAfter8 = isAfter(parseISO(start_date), withdrawalStart);

      const withdrawalEnd = setHours(
        setMinutes(setSeconds(setMilliseconds(parseISO(start_date), 0), 0), 0),
        18
      );

      const isBefore18 = isBefore(parseISO(start_date), withdrawalEnd);

      if (!(isAfter8 && isBefore18)) {
        return res.status(400).json({
          error: "Withdrawals can only happen between 08:00h and 18:00h",
        });
      }
    }

    const delivery = await Delivery.create(req.body);
    return res.json(delivery);
  }

  async update(req, res) {
    const { id: delivery_id } = req.params;

    const { recipient_id, deliveryman_id, start_date } = req.body;

    const delivery = await Delivery.findByPk(delivery_id);

    if (!delivery) {
      return res.status(400).json({ error: "Delivery not found" });
    }

    const recipient = await Recipient.findByPk(recipient_id);

    if (!recipient) {
      return res.status(400).json({ error: "Recipient not found" });
    }

    const deliveryman = await DeliveryMan.findByPk(deliveryman_id);

    if (!deliveryman) {
      return res.status(400).json({ error: "Deliveryman not found" });
    }

    /**
     * Check if start_date is between 08:00h and 18:00h
     */
    if (start_date) {
      const withdrawalStart = setHours(
        setMinutes(setSeconds(setMilliseconds(parseISO(start_date), 0), 0), 0),
        8
      );

      const isAfter8 = isAfter(parseISO(start_date), withdrawalStart);

      const withdrawalEnd = setHours(
        setMinutes(setSeconds(setMilliseconds(parseISO(start_date), 0), 0), 0),
        18
      );

      const isBefore18 = isBefore(parseISO(start_date), withdrawalEnd);

      if (!(isAfter8 && isBefore18)) {
        return res.status(400).json({
          error: "Withdrawals can only happen between 08:00h and 18:00h",
        });
      }
    }

    await delivery.update(req.body);

    const { signature_id, product, canceled_at, end_date } = req.body;
    return res.json({
      delivery_id,
      recipient_id,
      deliveryman_id,
      signature_id,
      product,
      canceled_at,
      start_date,
      end_date,
    });
  }
}

export default new DeliveryController();
