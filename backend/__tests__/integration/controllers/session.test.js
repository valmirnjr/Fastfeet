import request from "supertest";

import app from "../../../src/app";

import truncate from "../../util/truncate";

import factory from "../../util/factories";
import User from "../../../src/app/models/User";

describe("User", () => {
  beforeEach(async () => {
    await truncate();
  });

  it("should be able to login", async () => {
    const user = await factory.attrs("User");

    await User.create(user);

    const response = await request(app)
      .post("/users")
      .send({
        email: user.email,
        password: user.password,
      });

    expect(response.body).toHaveProperty("token");
  });

  it("should not be able to login with wrong password", async () => {
    const user = await factory.attrs("User");

    await User.create(user);

    const response = await request(app)
      .post("/users")
      .send({
        email: user.email,
        password: "outraSenhaQualquer",
      });

    expect(response.status).toBe(400);
    expect(response.body).toHaveProperty("error", "Incorrect password");
  });

  it("should raise error when trying to login with inexistent email", async () => {
    const user = await factory.attrs("User");

    const response = await request(app)
      .post("/users")
      .send(user);

    expect(response.status).toBe(400);
    expect(response.body).toHaveProperty("error", "User not found");
  });
});
