import mongoose from "mongoose";

const WithdrawalSchema = new mongoose.Schema(
  {
    deliveryman_id: {
      type: Number,
      required: true,
    },
  },
  { timestamps: true }
);

export default mongoose.model("Withdrawal", WithdrawalSchema);
