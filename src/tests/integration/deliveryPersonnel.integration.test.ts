import supertest from "supertest";
import createServer from "../../utils/server";
import * as DeliveryPersonnelService from "../../services/deliveryPersonnel.service";
import * as DeliveryPersonnelMocks from "../mocks/deliveryPersonnel.mocks";
const app = createServer();

describe("[Integration]", () => {
  describe("[Delivery Personnel]", () => {
    describe("[Get Delivery Personnel By Id]", () => {
      describe("[Given the delivery personnel does exist]", () => {
        it("Should return a 200 status and the delivery personnel", async () => {
          const getDeliveryPersonnelServiceMock = jest
            .spyOn(DeliveryPersonnelService, "getDeliveryPersonnel")
            .mockResolvedValueOnce(
              DeliveryPersonnelMocks.deliveryPersonnelMock
            );
          const deliveryPersonnelId =
            DeliveryPersonnelMocks.deliveryPersonnelId;
          const { statusCode, body } = await supertest(app).get(
            `/api/delivery-personnels/${DeliveryPersonnelMocks.deliveryPersonnelId}`
          );

          expect(statusCode).toBe(200);
          expect(body).toEqual(DeliveryPersonnelMocks.deliveryPersonnelMock);
          expect(getDeliveryPersonnelServiceMock).toHaveBeenCalledWith({
            deliveryPersonnelId,
          });
          expect(getDeliveryPersonnelServiceMock).toHaveBeenCalledTimes(1);
        });
        it("Should return a 404 status", async () => {
          const getDeliveryPersonnelServiceMock = jest
            .spyOn(DeliveryPersonnelService, "getDeliveryPersonnel")
            .mockResolvedValueOnce(null);
          const deliveryPersonnelId =
            DeliveryPersonnelMocks.deliveryPersonnelId;
          const { statusCode, body } = await supertest(app).get(
            `/api/delivery-personnels/${DeliveryPersonnelMocks.deliveryPersonnelId}`
          );

          expect(statusCode).toBe(404);
          expect(body).toStrictEqual({});
          expect(getDeliveryPersonnelServiceMock).toHaveBeenCalledWith({
            deliveryPersonnelId,
          });
          expect(getDeliveryPersonnelServiceMock).toHaveBeenCalledTimes(1);
        });
      });
    });
  });
});
