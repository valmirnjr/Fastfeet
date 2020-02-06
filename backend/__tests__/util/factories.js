import faker from "faker";
import { factory } from "factory-girl";

import User from "../../src/app/models/User";
import Recipient from "../../src/app/models/Recipient";
import DeliveryMan from "../../src/app/models/DeliveryMan";
import Delivery from "../../src/app/models/Delivery";

factory.define("User", User, {
  name: faker.name.findName(),
  email: faker.internet.email(),
  password: faker.internet.password(),
});

factory.define("Recipient", Recipient, {
  name: faker.name.findName(),
  street: faker.address.streetName(),
  number: faker.random.number({ min: 1, max: 1000 }),
  complement: faker.address.secondaryAddress(),
  state: faker.address.state(),
  city: faker.address.city(),
  cep: faker.address.zipCode(),
});

factory.define("DeliveryMan", DeliveryMan, {
  name: faker.name.findName(),
  email: faker.internet.email(),
});

const today = new Date();
const todayDate = `${today.getFullYear()}-${today.getMonth() +
  1}-${today.getDate()}`;
const withdrawalStart = `${todayDate} 08:00:00`;
const withdrawalEnd = `${todayDate} 18:00:00`;

factory.define("Delivery", Delivery, {
  recipient_id: faker.random.number({ min: 1 }),
  deliveryman_id: faker.random.number({ min: 1 }),
  signature_id: faker.random.number({ min: 1 }),
  product: faker.commerce.product(),
  // Números negativos podem ser utilizados em .recent() enquanto o método soon() não é implementado
  canceled_at: faker.date.recent(-5),
  start_date: faker.date.between(withdrawalStart, withdrawalEnd),
  end_date: faker.date.recent(-10),
});

export default factory;
