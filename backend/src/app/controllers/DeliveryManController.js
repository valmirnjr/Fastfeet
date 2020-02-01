import DeliveryMan from "../models/DeliveryMan";

class DeliveryManController {
  async index(req, res) {
    const deliverymen = await DeliveryMan.findAll();

    return res.json(deliverymen);
  }

  async store(req, res) {
    const deliveryman = await DeliveryMan.create(req.body);

    return res.json(deliveryman);
  }
}

export default new DeliveryManController();
