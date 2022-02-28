import DeliveryPersonnelModel, {
  DeliveryPersonnelInput,
} from "../models/deliveryPersonnel.model";
import { FilterQuery, QueryOptions, UpdateQuery } from "mongoose";
import { DeliveryPersonnelDocument } from "../models/deliveryPersonnel.model";

export async function createDeliveryPersonnel(
  personnelInput: DeliveryPersonnelInput
) {
  return await DeliveryPersonnelModel.create(personnelInput);
}

export async function getDeliveryPersonnel(
  query: FilterQuery<DeliveryPersonnelDocument>,
  options: QueryOptions = { lean: true }
) {
  return await DeliveryPersonnelModel.findOne(query, {}, options);
}

export async function getAndUpdateDeliveryPersonnel(
  query: FilterQuery<DeliveryPersonnelDocument>,
  update: UpdateQuery<DeliveryPersonnelDocument>,
  options: QueryOptions
) {
  return await DeliveryPersonnelModel.findOneAndUpdate(query, update, options);
}

export async function deleteDeliveryPersonnel(
  query: FilterQuery<DeliveryPersonnelDocument>
) {
  return await DeliveryPersonnelModel.deleteOne(query);
}

export async function getAllDeliveryPersonnels() {
  return await DeliveryPersonnelModel.find();
}
