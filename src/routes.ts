import { Express, Request, Response } from "express";
import {
  createUserSessionHandler,
  deleteSessionHandler,
  getUserSessionsHandler,
} from "./controllers/session.controller";
import { createUserHandler } from "./controllers/user.controller";
import validateResource from "./middlewares/validateResource";
import { createUserSchema } from "./schemas/user.schema";
import { createSessionSchema } from "./schemas/session.schema";
import requireUser from "./middlewares/requireUser";
import {
  updateDeliveryPersonnelSchema,
  deleteDeliveryPersonnelSchema,
} from "./schemas/deliveryPersonnel.schema";
import {
  createDeliveryPersonnelSchema,
  getDeliveryPersonnelSchema,
} from "./schemas/deliveryPersonnel.schema";
import {
  createDeliveryPersonnelHandler,
  deleteDeliveryPersonnelHandler,
  getAllDeliveryPersonnelsHandler,
  getDeliveryPersonnelHandler,
  updateDeliveryPersonnelHandler,
} from "./controllers/deliveryPersonnel.controller";

function routes(app: Express) {
  app.get("/healthcheck", (req: Request, res: Response) => res.sendStatus(200));

  app.post("/api/users", validateResource(createUserSchema), createUserHandler);

  app.post(
    "/api/sessions",
    validateResource(createSessionSchema),
    createUserSessionHandler
  );

  app.get("/api/sessions", requireUser, getUserSessionsHandler);

  app.delete("/api/sessions", requireUser, deleteSessionHandler);

  app.post(
    "/api/delivery-personnel",
    [requireUser, validateResource(createDeliveryPersonnelSchema)],
    createDeliveryPersonnelHandler
  );

  app.get(
    "/api/delivery-personnel/:deliveryPersonnelId",
    validateResource(getDeliveryPersonnelSchema),
    getDeliveryPersonnelHandler
  );

  app.get("/api/delivery-personnel", getAllDeliveryPersonnelsHandler);

  app.put(
    "/api/delivery-personnel/:deliveryPersonnelId",
    [requireUser, validateResource(updateDeliveryPersonnelSchema)],
    updateDeliveryPersonnelHandler
  );

  app.delete(
    "/api/delivery-personnel/:deliveryPersonnelId",
    validateResource(deleteDeliveryPersonnelSchema),
    deleteDeliveryPersonnelHandler
  );
}

export default routes;
