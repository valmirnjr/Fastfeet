import request from "supertest";
import app from "../../../src/app";

import truncate from "../../util/truncate";

import factory from "../../util/factories";

describe("DeliveryMan", () => {
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

  it("should list all deliverymen", async () => {
    const response = await request(app)
      .get("/deliverymen")
      .set("Authorization", `Bearer ${req.token}`);

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
      .set("Authorization", `Bearer ${req.token}`)
      .send(deliveryman);

    expect(response.body).toHaveProperty("id");
  });

  it("should not allow registering with a duplicated email", async () => {
    const deliveryman = await factory.attrs("DeliveryMan");

    await request(app)
      .post("/deliverymen")
      .set("Authorization", `Bearer ${req.token}`)
      .send(deliveryman);

    const response = await request(app)
      .post("/deliverymen")
      .set("Authorization", `Bearer ${req.token}`)
      .send(deliveryman);

    expect(response.body).toHaveProperty("error", "Email already in use");
  });

  it("should be able to be updated by admin users", async () => {
    const deliveryman = await factory.create("DeliveryMan");

    const updatedDeliveryman = await factory.attrs("DeliveryMan");

    const response = await request(app)
      .put(`/deliverymen/${deliveryman.id}`)
      .set("Authorization", `Bearer ${req.token}`)
      .send(updatedDeliveryman);

    expect(response.status).toBe(200);
  });

  it("should delete a deliveryman by admin users", async () => {
    const deliveryman = await factory.create("DeliveryMan");

    const response = await request(app)
      .delete(`/deliverymen/${deliveryman.id}`)
      .set("Authorization", `Bearer ${req.token}`);

    expect(response.status).toBe(200);
  });
});
