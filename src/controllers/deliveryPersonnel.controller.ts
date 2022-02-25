import {
  CreateDeliveryPersonnelInput,
  UpdateDeliveryPersonnelInput,
} from "../schemas/deliveryPersonnel.schema";
import { Request, Response } from "express";
import {
  GetDeliveryPersonnelInput,
  DeleteDeliveryPersonnelInput,
} from "../schemas/deliveryPersonnel.schema";
import {
  createDeliveryPersonnel,
  deleteDeliveryPersonnel,
  getAndUpdateDeliveryPersonnel,
  getDeliveryPersonnel,
} from "../services/deliveryPersonnel.service";

export async function createDeliveryPersonnelHandler(
  req: Request<{}, {}, CreateDeliveryPersonnelInput["body"]>,
  res: Response
) {
  const userId = res.locals.user._id;
  const body = req.body;
  const deliveryPersonnel = await createDeliveryPersonnel({
    ...body,
    user: userId,
  });

  return res.send(deliveryPersonnel);
}

export async function updateDeliveryPersonnelHandler(
  req: Request<UpdateDeliveryPersonnelInput["params"]>,
  res: Response
) {
  const userId = res.locals.user._id;

  const deliveryPersonnelId = req.params.deliveryPersonnelId;
  const updateBody = req.body;

  const deliveryPersonnel = await getDeliveryPersonnel({
    deliveryPersonnelId,
  });

  if (!deliveryPersonnel) {
    return res.sendStatus(404);
  }

  if (String(deliveryPersonnel.user) !== userId) {
    return res.sendStatus(403);
  }

  const updatedDeliveryPersonnel = await getAndUpdateDeliveryPersonnel(
    { deliveryPersonnelId },
    updateBody,
    {
      new: true,
    }
  );

  return res.send(updatedDeliveryPersonnel);
}

export async function getDeliveryPersonnelHandler(
  req: Request<GetDeliveryPersonnelInput["params"]>,
  res: Response
) {
  const deliveryPersonnelId = req.params.deliveryPersonnelId;
  const deliveryPersonnel = await getDeliveryPersonnel({
    deliveryPersonnelId,
  });

  if (!deliveryPersonnel) return res.sendStatus(404);

  return res.send(deliveryPersonnel);
}

export async function deleteDeliveryPersonnelHandler(
  req: Request<DeleteDeliveryPersonnelInput["params"]>,
  res: Response
) {
  const userId = res.locals.user._id;
  const deliveryPersonnelId = req.params.deliveryPersonnelId;

  const deliveryPersonnel = await getDeliveryPersonnel({
    deliveryPersonnelId,
  });

  if (!deliveryPersonnel) return res.sendStatus(404);

  if (String(deliveryPersonnel.user) !== userId) return res.sendStatus(403);

  await deleteDeliveryPersonnel({ deliveryPersonnelId });

  return res.sendStatus(200);
}
