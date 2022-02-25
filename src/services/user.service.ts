import { DocumentDefinition } from "mongoose";
import UserModel, { UserDocument } from "../models/user.model";
import { omit } from "lodash";

export async function createUser(
  inputUser: DocumentDefinition<
    Omit<UserDocument, "createdAt" | "updatedAt" | "comparePassword">
  >
) {
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
