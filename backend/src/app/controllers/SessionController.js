import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import User from "../models/User";

import authConfig from "../../config/auth";

class SessionController {
  async store(req, res) {
    const { email, password } = req.body;

    const user = await User.findOne({
      where: {
        email,
      },
    });

    if (!user) {
      return res.status(400).json({ error: "User not found" });
    }

    const { id, name, password_hash } = user;

    if (!(await bcrypt.compare(password, password_hash))) {
      return res.status(400).json({ error: "Incorrect password" });
    }

    return res.json({
      user: {
        name,
        email,
      },
      token: jwt.sign({ id }, authConfig.secret, {
        expiresIn: authConfig.expiresIn,
      }),
    });
  }
}

export default new SessionController();
