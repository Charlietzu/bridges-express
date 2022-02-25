import UserModel, { UserDocument, UserInput } from "../models/user.model";
import { omit } from "lodash";
import { FilterQuery } from "mongoose";

export async function createUser(inputUser: UserInput) {
  try {
    const user = await UserModel.create(inputUser);

    return omit(user.toJSON(), "password");
  } catch (err: any) {
    throw new Error(err);
  }
}

export async function validatePassword({
  email,
  password,
}: {
  email: string;
  password: string;
}) {
  const user = await UserModel.findOne({ email });

  if (!user) return false;

  const isValid: boolean = await user.comparePassword(password);

  if (!isValid) return false;

  return omit(user.toJSON(), "password");
}

export async function getUser(query: FilterQuery<UserDocument>) {
  return UserModel.findOne(query).lean();
}
