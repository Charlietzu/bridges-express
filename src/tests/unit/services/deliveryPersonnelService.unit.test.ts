import * as DeliveryPersonnelService from "../../../services/deliveryPersonnel.service";
import * as DeliveryPersonnelMocks from "../../mocks/deliveryPersonnel.mocks";

describe("[Unit]", () => {
  describe("[Delivery Personnel]", () => {
    describe("[Get Delivery Personnel By Id]", () => {
      const getDeliveryPersonnelServiceMock = jest
        .spyOn(DeliveryPersonnelService, "getDeliveryPersonnel")
        .mockResolvedValueOnce(DeliveryPersonnelMocks.deliveryPersonnelMock);
      describe("[Given the delivery personnel does exist]", () => {
        it("Should return a 200 status and the delivery personnel", async () => {
          const personnelId = DeliveryPersonnelMocks.deliveryPersonnelId;
          const deliveryPersonnel =
            await DeliveryPersonnelService.getDeliveryPersonnel({
              personnelId,
            });

          expect(deliveryPersonnel).toEqual(
            DeliveryPersonnelMocks.deliveryPersonnelMock
          );

          expect(getDeliveryPersonnelServiceMock).toHaveBeenCalledWith({
            personnelId,
          });
        });
      });
    });
  });
});
