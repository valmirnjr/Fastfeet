import request from "supertest";
import app from "../../../src/app";

import truncate from "../../util/truncate";

import factory from "../../util/factories";

describe("Recipient", () => {
  beforeEach(async () => {
    await truncate();
  });

  it("should be able to be registered by admin users", async () => {
    const recipient = await factory.attrs("Recipient");

    const response = await request(app)
      .post("/recipients")
      .send(recipient);

    expect(response.body).toHaveProperty("id");
  });

  it("should be able to be updated by admin users", async () => {
    const recipient = await factory.create("Recipient");

    const updatedRecipient = await factory.attrs("Recipient");

    const response = await request(app)
      .put(`/recipients/${recipient.id}`)
      .send(updatedRecipient);

    expect(response.status).toBe(200);
  });

  it("should not allow a user to update to an existing email", async () => {});
});
