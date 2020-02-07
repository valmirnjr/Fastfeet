import Recipient from "../models/Recipient";

class RecipientController {
  async index(req, res) {
    const recipients = await Recipient.findAll();

    return res.json(recipients);
  }

  async store(req, res) {
    const recipient = await Recipient.create(req.body);

    return res.json(recipient);
  }

  async update(req, res) {
    const { id } = req.params;

    const recipient = await Recipient.findByPk(id);

    if (!recipient) {
      return res.status(400).json({ error: "Recipient not found" });
    }

    const { name, street, number } = await Recipient.update(req.body, {
      where: { id },
    });

    return res.json({
      id,
      name,
      street,
      number,
    });
  }
}

export default new RecipientController();
