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

    describe("[Create Delivery Personnel]", () => {
      describe("[Given that the payload is correct", () => {
        it("Should return the created delivery personnel", async () => {
          // Arrange
          const createMock = jest
            .spyOn(DeliveryPersonnelModel, "create")
            .mockResolvedValue(
              DeliveryPersonnelMocks.deliveryPersonnelMock1 as never
            );
          const personnelInput = DeliveryPersonnelMocks.deliveryPersonnelInput1;

          // Act
          const ret = await DeliveryPersonnelService.createDeliveryPersonnel(
            personnelInput
          );

          // Assert
          expect(createMock).toHaveBeenCalledTimes(1);
          expect(ret).toEqual(DeliveryPersonnelMocks.deliveryPersonnelMock1);
        });
      });

      describe("[Given that the payload is NOT correct", () => {
        it("Should return null", async () => {
          // Arrange
          const createMock = jest
            .spyOn(DeliveryPersonnelModel, "create")
            .mockResolvedValue(null as never);
          const personnelInput = DeliveryPersonnelMocks.deliveryPersonnelInput1;
          personnelInput.email = "";

          // Act
          const ret = await DeliveryPersonnelService.createDeliveryPersonnel(
            personnelInput
          );

          // Assert
          expect(createMock).toHaveBeenCalledTimes(1);
          expect(ret).toBeNull();
        });
      });
    });

    describe("[Update Delivery Personnel]", () => {
      describe("[Given that the delivery personnel exists AND the payload is correct]", () => {
        it("Should return the created object", async () => {
          // Arrange
          const findOneAndUpdateMock = jest
            .spyOn(DeliveryPersonnelModel, "findOneAndUpdate")
            .mockResolvedValue(
              DeliveryPersonnelMocks.deliveryPersonnelMock1 as never
            );
          const personnelId = DeliveryPersonnelMocks.deliveryPersonnelId1;
          const personnelInput = DeliveryPersonnelMocks.deliveryPersonnelInput1;

          // Act
          const ret =
            await DeliveryPersonnelService.getAndUpdateDeliveryPersonnel(
              { personnelId },
              personnelInput,
              { new: true }
            );

          // Assert
          expect(findOneAndUpdateMock).toHaveBeenCalledTimes(1);
          expect(ret).toEqual(DeliveryPersonnelMocks.deliveryPersonnelMock1);
        });
      });

      describe("[Given that the delivery personnel exists BUT the payload is NOT correct]", () => {
        it("Should return null", async () => {
          // Arrange
          const findOneAndUpdateMock = jest
            .spyOn(DeliveryPersonnelModel, "findOneAndUpdate")
            .mockResolvedValue(null as never);
          const personnelId = DeliveryPersonnelMocks.deliveryPersonnelId1;
          const personnelInput = DeliveryPersonnelMocks.deliveryPersonnelInput1;
          personnelInput.email = "";

          // Act
          const ret =
            await DeliveryPersonnelService.getAndUpdateDeliveryPersonnel(
              { personnelId },
              personnelInput,
              { new: true }
            );

          // Assert
          expect(findOneAndUpdateMock).toHaveBeenCalledTimes(1);
          expect(ret).toBeNull();
        });
      });

      describe("[Given that the payload is correct BUT the delivery personnel does NOT exists]", () => {
        it("Should return null", async () => {
          // Arrange
          const findOneAndUpdateMock = jest
            .spyOn(DeliveryPersonnelModel, "findOneAndUpdate")
            .mockResolvedValue(null as never);
          const personnelId = DeliveryPersonnelMocks.deliveryPersonnelId1;
          const personnelInput = DeliveryPersonnelMocks.deliveryPersonnelInput1;

          // Act
          const ret =
            await DeliveryPersonnelService.getAndUpdateDeliveryPersonnel(
              { personnelId },
              personnelInput,
              { new: true }
            );

          // Assert
          expect(findOneAndUpdateMock).toHaveBeenCalledTimes(1);
          expect(ret).toBeNull();
        });
      });
    });

    describe("[Delete Delivery Personnel]", () => {
      describe("[Given that the delivery personnel exists]", () => {
        it("Should return an object with the deleted row count", async () => {
          // Arrange
          const deleteOneMock = jest
            .spyOn(DeliveryPersonnelModel, "deleteOne")
            .mockResolvedValue({ deletedCount: 1 } as never);
          const personnelId = DeliveryPersonnelMocks.deliveryPersonnelId1;

          // Act
          const ret = await DeliveryPersonnelService.deleteDeliveryPersonnel({
            personnelId,
          });

          // Assert
          expect(deleteOneMock).toHaveBeenCalledTimes(1);
          expect(ret).toEqual({ deletedCount: 1 });
        });
      });

      describe("[Given that the delivery personnel does NOT exists]", () => {
        it("Should return an object with zero deleted rows count", async () => {
          // Arrange
          const deleteOneMock = jest
            .spyOn(DeliveryPersonnelModel, "deleteOne")
            .mockResolvedValue({ deletedCount: 0 } as never);
          const personnelId = DeliveryPersonnelMocks.deliveryPersonnelId1;

          // Act
          const ret = await DeliveryPersonnelService.deleteDeliveryPersonnel({
            personnelId,
          });

          // Assert
          expect(deleteOneMock).toHaveBeenCalledTimes(1);
          expect(ret).toEqual({ deletedCount: 0 });
        });
      });
    });
  });
});
