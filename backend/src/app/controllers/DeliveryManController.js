import DeliveryMan from "../models/DeliveryMan";

class DeliveryManController {
  async index(req, res) {
    const deliverymen = await DeliveryMan.findAll();

    return res.json(deliverymen);
  }
}

export default new DeliveryManController();
