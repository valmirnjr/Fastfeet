import request from "supertest";
import app from "../../../src/app";

import truncate from "../../util/truncate";

import factory from "../../util/factories";

describe("Recipient", () => {
  beforeEach(async () => {
    await truncate();
  });

  const req = {
    token: "",
  };
  beforeAll(async () => {
    const adminUser = await factory.create("User");

    const response = await request(app)
      .post("/users")
      .send({
        email: adminUser.email,
        password: adminUser.password,
      });

    req.token = response.body.token;
  });

  it("should be able to be registered by admin users", async () => {
    const recipient = await factory.attrs("Recipient");

    const response = await request(app)
      .post("/recipients")
      .set("Authorization", `Bearer ${req.token}`)
      .send(recipient);

    expect(response.body).toHaveProperty("id");
  });

  it("should be able to be updated by admin users", async () => {
    const recipient = await factory.create("Recipient");

    const updatedRecipient = await factory.attrs("Recipient");

    const response = await request(app)
      .put(`/recipients/${recipient.id}`)
      .set("Authorization", `Bearer ${req.token}`)
      .send(updatedRecipient);

    expect(response.status).toBe(200);
  });

  it("should not allow unauthorized user to create recipients", async () => {
    const response = await request(app)
      .post("/recipients")
      .send({});

    expect(response.status).toBe(401);
  });

  it("should not allow unauthorized user to update recipients", async () => {
    const response = await request(app)
      .put("/recipients")
      .send({});

    expect(response.status).toBe(401);
  });
});
