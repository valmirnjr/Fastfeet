import request from "supertest";
import app from "../../../src/app";

import truncate from "../../util/truncate";

import factory from "../../util/factories";

import User from "../../../src/app/models/User";

describe("Recipient", () => {
  beforeEach(async () => {
    await truncate();
  });

  it("should be able to be registered by admin users", async () => {
    const recipient = await factory.attrs("Recipient");

    const response = await request(app)
      .post("/recipients")
      .set("Authorization", `Bearer ${User.generateToken()}`)
      .send(recipient);

    expect(response.body).toHaveProperty("id");
  });

  it("should be able to be updated by admin users", async () => {
    const recipient = await factory.create("Recipient");

    const updatedRecipient = await factory.attrs("Recipient");

    const response = await request(app)
      .put(`/recipients/${recipient.id}`)
      .set("Authorization", `Bearer ${User.generateToken()}`)
      .send(updatedRecipient);

    expect(response.status).toBe(200);
  });

  it("should not be registered by unauthorized users", async () => {
    const response = await request(app)
      .post("/recipients")
      .send({});

    expect(response.status).toBe(401);
  });

  it("should not be updated by unauthorized users", async () => {
    const recipient = await factory.create("Recipient");

    const response = await request(app)
      .put(`/recipients/${recipient.id}`)
      .send({});

    expect(response.status).toBe(401);
  });

  it("should not be updated when its id is not found", async () => {
    const response = await request(app)
      .put("/recipients/1")
      .set("Authorization", `Bearer ${User.generateToken()}`)
      .send({});

    expect(response.status).toBe(400);
  });
});
