import { Op } from "sequelize";

import DeliveryMan from "../models/DeliveryMan";

class DeliveryManController {
  async index(req, res) {
    const { name } = req.query;

    const filterOptions = {
      where: {
        name: name ? { [Op.iLike]: `%${name}%` } : { [Op.ne]: null },
      },
      attributes: ["id", "name", "email"],
    };

    const deliverymen = await DeliveryMan.findAll(filterOptions);

    return res.json(deliverymen);
  }

  async store(req, res) {
    const { email } = req.body;

    const deliverymanExists = await DeliveryMan.findOne({ where: { email } });

    if (deliverymanExists) {
      return res.status(400).json({ error: "Email already in use" });
    }
    const deliveryman = await DeliveryMan.create(req.body);

    return res.json(deliveryman);
  }

  async update(req, res) {
    const { id } = req.params;

    const deliveryman = await DeliveryMan.findByPk(id);

    if (!deliveryman) {
      return res.status(400).json({ error: "Deliveryman not found." });
    }

    const { name, email, avatar_id } = req.body;

    await deliveryman.update({ name, email, avatar_id });

    return res.json({ name, email, avatar_id });
  }

  async delete(req, res) {
    const { id } = req.params;

    try {
      const deliveryman = await DeliveryMan.findByPk(id);

      if (!deliveryman) {
        return res.status(400).json({ error: "Deliveryman not found" });
      }

      await deliveryman.destroy();

      return res.json({ success: "Deliveryman was deleted" });
    } catch (err) {
      return res
        .status(500)
        .json({ error: "Deliveryman could not be deleted" });
    }
  }
}

export default new DeliveryManController();
