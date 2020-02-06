import request from "supertest";
import app from "../../../src/app";

import truncate from "../../util/truncate";

import factory from "../../util/factories";

import User from "../../../src/app/models/User";

describe("Delivery", () => {
  beforeEach(async () => {
    await truncate();
  });

  it("should be registered by admin when name and people ids are set", async () => {
    const recipient = await factory.create("Recipient");
    const deliveryman = await factory.create("DeliveryMan");

    const delivery = await factory.attrs("Delivery", {
      recipient_id: recipient.id,
      deliveryman_id: deliveryman.id,
      signature_id: null,
      canceled_at: null,
      end_date: null,
    });

    const response = await request(app)
      .post("/deliveries")
      .set("Authorization", `Bearer ${User.generateToken()}`)
      .send(delivery);

    expect(response.body).toHaveProperty("id");
  });

  it("should NOT be registered if start_date is NOT between 8:00h and 18:00h", async () => {});
});
