import request from "supertest";
import app from "../../../src/app";

import truncate from "../../util/truncate";

import factory from "../../util/factories";

import User from "../../../src/app/models/User";

describe("DeliveryMan", () => {
  beforeEach(async () => {
    await truncate();
  });

  it("should list all deliverymen", async () => {
    const response = await request(app)
      .get("/deliverymen")
      .set("Authorization", `Bearer ${User.generateToken()}`);

    expect(response.status).toBe(200);
  });

  it("should return unauthorized when token is not provided", async () => {
    const response = await request(app).get("/deliverymen");

    expect(response.status).toBe(401);
  });

  it("should be able to register deliveryman", async () => {
    const deliveryman = await factory.attrs("DeliveryMan");

    const response = await request(app)
      .post("/deliverymen")
      .set("Authorization", `Bearer ${User.generateToken()}`)
      .send(deliveryman);

    expect(response.body).toHaveProperty("id");
  });

  it("should not allow registering with a duplicated email", async () => {
    const deliveryman = await factory.attrs("DeliveryMan");

    await request(app)
      .post("/deliverymen")
      .set("Authorization", `Bearer ${User.generateToken()}`)
      .send(deliveryman);

    const response = await request(app)
      .post("/deliverymen")
      .set("Authorization", `Bearer ${User.generateToken()}`)
      .send(deliveryman);

    expect(response.body).toHaveProperty("error", "Email already in use");
  });

  it("should be able to be updated by admin users", async () => {
    const deliveryman = await factory.create("DeliveryMan");

    const updatedDeliveryman = await factory.attrs("DeliveryMan");

    const response = await request(app)
      .put(`/deliverymen/${deliveryman.id}`)
      .set("Authorization", `Bearer ${User.generateToken()}`)
      .send(updatedDeliveryman);

    expect(response.status).toBe(200);
  });

  it("should delete a deliveryman", async () => {
    const deliveryman = await factory.create("DeliveryMan");

    const response = await request(app)
      .delete(`/deliverymen/${deliveryman.id}`)
      .set("Authorization", `Bearer ${User.generateToken()}`);

    expect(response.status).toBe(200);
  });

  it("should not be deleted when id is not found", async () => {
    const response = await request(app)
      .delete("/deliverymen/1")
      .set("Authorization", `Bearer ${User.generateToken()}`);

    expect(response.status).toBe(400);
  });
});
