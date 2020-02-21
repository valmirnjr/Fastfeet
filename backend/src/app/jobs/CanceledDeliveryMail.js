import Mail from "../../lib/Mail";

class NewDeliveryMail {
  get key() {
    return "CanceledDeliveryMail";
  }

  async handle({ data }) {
    const { delivery, problem } = data;

    await Mail.sendMail({
      to: `${delivery.deliveryman.name} <${delivery.deliveryman.email}>`,
      subject: "Entrega cancelada",
      template: "canceledDelivery",
      context: {
        deliveryman: delivery.deliveryman.name,
        delivery_id: delivery.id,
        street: delivery.recipient.street,
        number: delivery.recipient.number,
        complement: delivery.recipient.complement,
        city: delivery.recipient.city,
        state: delivery.recipient.state,
        cep: delivery.recipient.cep,
        problem: problem.description,
      },
    });
  }
}

export default new NewDeliveryMail();
