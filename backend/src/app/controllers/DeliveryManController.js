import DeliveryMan from "../models/DeliveryMan";

class DeliveryManController {
  async index(req, res) {
    const deliverymen = await DeliveryMan.findAll();

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
}

export default new DeliveryManController();
