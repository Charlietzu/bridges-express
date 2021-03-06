import mongoose from "mongoose";

export interface DeliveryPersonnelInput {
  name: string;
  email: string;
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
    name: { type: String, required: true },
    email: { type: String, required: true },
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
