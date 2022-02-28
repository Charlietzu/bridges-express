import * as DeliveryPersonnelService from "../../../services/deliveryPersonnel.service";
import * as DeliveryPersonnelMocks from "../../mocks/deliveryPersonnel.mocks";

describe("[Unit]", () => {
  describe("[Delivery Personnel]", () => {
    describe("[Get Delivery Personnel By Id]", () => {
      describe("[Given the delivery personnel does exist]", () => {
        it("Should return a 200 status and the delivery personnel", async () => {
          const getDeliveryPersonnelServiceMock = jest
            .spyOn(DeliveryPersonnelService, "getDeliveryPersonnel")
            .mockResolvedValue(DeliveryPersonnelMocks.deliveryPersonnelMock);
          const personnelId = DeliveryPersonnelMocks.deliveryPersonnelId;
          const deliveryPersonnel =
            await DeliveryPersonnelService.getDeliveryPersonnel({
              personnelId,
            });

          expect(getDeliveryPersonnelServiceMock).toHaveBeenCalledWith({
            personnelId,
          });
          expect(getDeliveryPersonnelServiceMock).toHaveBeenCalledTimes(1);
          expect(deliveryPersonnel).toEqual(
            DeliveryPersonnelMocks.deliveryPersonnelMock
          );
        });
      });
      describe("[Given the delivery personnel does NOT exist]", () => {
        it("Should return null", async () => {
          const getDeliveryPersonnelServiceMock = jest
            .spyOn(DeliveryPersonnelService, "getDeliveryPersonnel")
            .mockResolvedValue(null);
          const personnelId = DeliveryPersonnelMocks.deliveryPersonnelId;
          const personnel = await DeliveryPersonnelService.getDeliveryPersonnel(
            {
              personnelId,
            }
          );

          expect(getDeliveryPersonnelServiceMock).toHaveBeenCalledWith({
            personnelId,
          });
          expect(getDeliveryPersonnelServiceMock).toHaveBeenCalledTimes(1);
          expect(personnel).toBeNull();
        });
      });
    });
  });
});
