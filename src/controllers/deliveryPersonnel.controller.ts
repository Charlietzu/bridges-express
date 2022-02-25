import {
  CreateDeliveryPersonnelInput,
  UpdateDeliveryPersonnelInput,
} from "../schemas/deliveryPersonnel.schema";
import { Request, Response } from "express";
import {
  GetDeliveryPersonnelInput,
  DeleteDeliveryPersonnelInput,
} from "../schemas/deliveryPersonnel.schema";

export async function createDeliveryPersonnelHandler(
  req: Request<{}, {}, CreateDeliveryPersonnelInput["body"]>,
  res: Response
) {}

export async function updateDeliveryPersonnelHandler(
  req: Request<UpdateDeliveryPersonnelInput["params"]>,
  res: Response
) {}

export async function getDeliveryPersonnelHandler(
  req: Request<GetDeliveryPersonnelInput["params"]>,
  res: Response
) {}

export async function deleteDeliveryPersonnelHandler(
  req: Request<DeleteDeliveryPersonnelInput["params"]>,
  res: Response
) {}
