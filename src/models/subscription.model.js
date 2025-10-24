import mongoose, { Schema } from "mongoose";

const subscriptionSchma = new Schema(
  {
    subscriber: {
      type: Schema.Types.ObjectId, //one who is subscription
      ref: "Users",
    },
    channel: {
      type: Schema.Types.ObjectId, //one to whom "subscriber" iss subscribing
      ref: "Users",
    },
  },
  { timestamps: true }
);

const Subscription = mongoose.model("Subscription", subscriptionSchma);
