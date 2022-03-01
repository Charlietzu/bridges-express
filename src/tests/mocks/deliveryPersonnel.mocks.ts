import { DeliveryPersonnelInput } from "../../models/deliveryPersonnel.model";

export const deliveryPersonnelId1: string = "DP-123";
export const deliveryPersonnelId2: string = "DP-456";

export const deliveryPersonnelInput1: DeliveryPersonnelInput = {
  name: "Sam Porter",
  email: "sam@bridges.com",
  bridgeLinkRank: 10,
  active: true,
};

export const deliveryPersonnelMock1 = {
  ...deliveryPersonnelInput1,
  createdAt: "2022-02-25T18:24:59.527Z",
  updatedAt: "2022-02-25T18:24:59.527Z",
  __v: 0,
  deliveryPersonnelId: deliveryPersonnelId1,
};

export const deliveryPersonnelInput2: DeliveryPersonnelInput = {
  name: "Caio César",
  email: "caio@bridges.com",
  bridgeLinkRank: 7,
  active: true,
};

export const deliveryPersonnelMock2 = {
  ...deliveryPersonnelInput2,
  createdAt: "2022-02-25T18:24:59.527Z",
  updatedAt: "2022-02-25T18:24:59.527Z",
  __v: 0,
  deliveryPersonnelId: deliveryPersonnelId2,
};

export const deliveryPersonnelGroup = [
  deliveryPersonnelMock1,
  deliveryPersonnelMock2,
];
