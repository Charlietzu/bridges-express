import mongoose from "mongoose";
import { UserDocument } from "./user.model";
import { customAlphabet } from "nanoid";

const nanoId = customAlphabet("0123456789abcdefghijklmnopqrstuvwxyz", 10);

export interface DeliveryPersonnelInput {
  user: UserDocument["_id"];
  bridgeLinkRank: number;
  active: boolean;
}

export interface DeliveryPersonnelDocument
  extends DeliveryPersonnelInput,
    mongoose.Document {
  createdAt: Date;
  updatedAt: Date;
}

const deliveryPersonnelSchema = new mongoose.Schema(
  {
    deliveryPersonnelId: {
      type: String,
      required: true,
      unique: true,
      default: () => `DP-${nanoId()}`,
    },
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    },
    bridgeLinkRank: { type: Number, required: true },
    active: { type: Boolean, default: true },
  },
  {
    timestamps: true,
  }
);

const DeliveryPersonnelModel = mongoose.model<DeliveryPersonnelDocument>(
  "DeliveryPersonnel",
  deliveryPersonnelSchema
);

export default DeliveryPersonnelModel;
