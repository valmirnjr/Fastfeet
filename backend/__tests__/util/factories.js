import faker from "faker";
import { factory } from "factory-girl";

import User from "../../src/app/models/User";
import Recipient from "../../src/app/models/Recipient";
import FactoryMan from "../../src/app/models/FactoryMan";

factory.define("User", User, {
  id: faker.random.number({
    min: 1,
  }),
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

factory.define("FactoryMan", FactoryMan, {
  name: faker.name.findName(),
  email: faker.internet.email(),
});

export default factory;
