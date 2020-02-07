import Mail from "../../lib/Mail";

class NewDeliveryMail {
  get key() {
    return "NewDeliveryMail";
  }

  async handle({ data }) {
    const { delivery } = data;

    await Mail.sendMail({
      to: `${delivery.deliveryman.name} <${delivery.deliveryman.email}>`,
      subject: "Nova entrega",
      template: "newDelivery",
      context: {
        deliveryman: delivery.deliveryman.name,
        delivery_id: delivery.id,
        street: delivery.recipient.street,
        number: delivery.recipient.number,
        complement: delivery.recipient.complement,
        city: delivery.recipient.city,
        state: delivery.recipient.state,
        cep: delivery.recipient.cep,
      },
    });
  }
}

export default new NewDeliveryMail();
