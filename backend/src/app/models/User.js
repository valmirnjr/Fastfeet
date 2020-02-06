import Sequelize, { Model } from "sequelize";
import jwt from "jsonwebtoken";
import bcrypt from "bcryptjs";

import authConfig from "../../config/auth";

class User extends Model {
  static init(sequelize) {
    super.init(
      {
        name: Sequelize.STRING,
        email: Sequelize.STRING,
        password: Sequelize.VIRTUAL,
        password_hash: Sequelize.STRING,
      },
      {
        sequelize,
      }
    );

    this.addHook("beforeSave", async user => {
      if (user.password) {
        user.password_hash = await bcrypt.hash(user.password, 8);
      }
    });

    return this;
  }

  static generateToken() {
    return jwt.sign({}, authConfig.secret, {
      expiresIn: authConfig.expiresIn,
    });
  }
}

export default User;
