import DeliveryPersonnelModel from "../../../models/deliveryPersonnel.model";
import * as DeliveryPersonnelService from "../../../services/deliveryPersonnel.service";
import * as DeliveryPersonnelMocks from "../../mocks/deliveryPersonnel.mocks";

describe("[Unit]", () => {
  describe("[Delivery Personnel]", () => {
    describe("[Get Delivery Personnel By Id]", () => {
      describe("[Given the delivery personnel does exist]", () => {
        it("Should return a 200 status and the delivery personnel", async () => {
          // Arrange
          const findOneMock = jest
            .spyOn(DeliveryPersonnelModel, "findOne")
            .mockResolvedValue(DeliveryPersonnelMocks.deliveryPersonnelMock1);
          const personnelId = DeliveryPersonnelMocks.deliveryPersonnelId1;

          // Act
          const ret = await DeliveryPersonnelService.getDeliveryPersonnel({
            personnelId,
          });

          // Assert
          expect(findOneMock).toHaveBeenCalledTimes(1);
          expect(ret).toEqual(DeliveryPersonnelMocks.deliveryPersonnelMock1);
        });
      });
      describe("[Given the delivery personnel does NOT exist]", () => {
        it("Should return null", async () => {
          // Arrange
          const findOneMock = jest
            .spyOn(DeliveryPersonnelModel, "findOne")
            .mockResolvedValue(null);
          const personnelId = DeliveryPersonnelMocks.deliveryPersonnelId1;

          // Act
          const ret = await DeliveryPersonnelService.getDeliveryPersonnel({
            personnelId,
          });

          // Assert
          expect(findOneMock).toHaveBeenCalledTimes(1);
          expect(ret).toBeNull();
        });
      });
    });
    describe("[Get All Delivery Personnel]", () => {
      describe("[Given that there exists one or more delivery personnel]", () => {
        it("Should return all the delivery personnel", async () => {
          // Arrange
          const findMock = jest
            .spyOn(DeliveryPersonnelModel, "find")
            .mockResolvedValue(DeliveryPersonnelMocks.deliveryPersonnelGroup);

          // Act
          const ret = await DeliveryPersonnelService.getAllDeliveryPersonnel();

          // Assert
          expect(findMock).toHaveBeenCalledTimes(1);
          expect(ret).toEqual(DeliveryPersonnelMocks.deliveryPersonnelGroup);
        });
      });
      describe("[Given that there is NO delivery personnel]", () => {
        it("Should return an empty array", async () => {
          // Arrange
          const findMock = jest
            .spyOn(DeliveryPersonnelModel, "find")
            .mockResolvedValue([]);

          // Act
          const ret = await DeliveryPersonnelService.getAllDeliveryPersonnel();

          // Assert
          expect(findMock).toHaveBeenCalledTimes(1);
          expect(ret).toEqual([]);
        });
      });
    });
  });
});
