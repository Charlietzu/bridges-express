import supertest from "supertest";
import createServer from "../../utils/server";
import * as DeliveryPersonnelService from "../../services/deliveryPersonnel.service";
import * as DeliveryPersonnelMocks from "../mocks/deliveryPersonnel.mocks";
const app = createServer();

describe("[Integration]", () => {
  describe("[Delivery Personnel]", () => {
    describe("[Get Delivery Personnel By Id]", () => {
      beforeEach(() => {
        const getDeliveryPersonnelServiceMock = jest
          .spyOn(DeliveryPersonnelService, "getDeliveryPersonnel")
          .mockResolvedValueOnce(DeliveryPersonnelMocks.deliveryPersonnelMock);
      });
      describe("[Given the delivery personnel does exist]", () => {
        it("Should return a 200 status and the delivery personnel", async () => {
          const { statusCode, body } = await supertest(app).get(
            `/api/delivery-personnels/${DeliveryPersonnelMocks.deliveryPersonnelId}`
          );

          expect(statusCode).toBe(200);
          expect(body).toEqual(DeliveryPersonnelMocks.deliveryPersonnelMock);
        });
      });
    });
  });
});
