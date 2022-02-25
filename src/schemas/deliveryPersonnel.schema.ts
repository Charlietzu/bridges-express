import { object, number, string, TypeOf, boolean } from "zod";

const payload = {
  body: object({
    bridgeLinkRank: number({
      required_error: "bridgeLinkRank is required",
    }),
    active: boolean({
      required_error: "active is required",
    }),
  }),
};

const params = {
  params: object({
    deliveryPersonnelId: string({
      required_error: "deliveryPersonnelId is required",
    }),
  }),
};

export const createDeliveryPersonnelSchema = object({
  ...payload,
});

export const updateDeliveryPersonnelSchema = object({
  ...payload,
  ...params,
});

export const deleteDeliveryPersonnelSchema = object({
  ...params,
});

export const getDeliveryPersonnelSchema = object({
  ...params,
});

export type CreateDeliveryPersonnelInput = TypeOf<
  typeof createDeliveryPersonnelSchema
>;

export type UpdateDeliveryPersonnelInput = TypeOf<
  typeof updateDeliveryPersonnelSchema
>;

export type DeleteDeliveryPersonnelInput = TypeOf<
  typeof deleteDeliveryPersonnelSchema
>;

export type GetDeliveryPersonnelInput = TypeOf<
  typeof getDeliveryPersonnelSchema
>;
