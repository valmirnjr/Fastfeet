import request from "supertest";
import app from "../../../src/app";

import truncate from "../../util/truncate";

describe("Recipient", () => {
  beforeEach(async () => {
    await truncate();
  });

  it("should be able to be registered by admin users", async () => {
    const response = await request(app)
      .post("/recipients")
      .send({
        name: "Diego Fernandes",
        street: "Rua João Figueiredo",
        number: 19,
        complement: "2° andar",
        state: "AM",
        city: "São Paulo",
        cep: "58000-117",
      });

    expect(response.body).toHaveProperty("id");
  });

  it("should be able to be updated by admin users", async () => {
    const recipient = await request(app)
      .post("/recipients")
      .send({
        name: "Diego Fernandes",
        street: "Rua João Figueiredo",
        number: 19,
        complement: "2° andar",
        state: "AM",
        city: "São Paulo",
        cep: "58000-117",
      });

    const response = await request(app)
      .put(`/recipients/${recipient.id}`)
      .send({
        name: "Diego Fernandes",
        street: "Rua João Figueiredo",
        number: 19,
        complement: "2° andar",
        state: "AM",
        city: "São Paulo",
        cep: "58000-117",
      });

    expect(response.status).toBe(200);
  });
});
