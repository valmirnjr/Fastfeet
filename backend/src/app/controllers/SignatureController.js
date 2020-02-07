import File from "../models/File";

import UpdateTransportService from "../services/UpdateTransportService";

class SignatureController {
  async store(req, res) {
    const { originalname: name, filename: path } = req.file;

    const {
      deliverymanId: deliveryman_id,
      deliveryId: delivery_id,
    } = req.params;

    const file = await File.create({
      name,
      path,
    });

    const delivery = await UpdateTransportService.run({
      deliveryman_id,
      delivery_id,
      signature_id: file.id,
      end_date: new Date(),
    });

    return res.json(delivery);
  }
}

export default new SignatureController();
