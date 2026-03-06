import request from "supertest";
import app from "../api/server";

const MOCK_200_OK_REQUEST = {
    "origin": {
        "postalCode": "10001",
        "countryCode": "US"
    },
    "destination": {
        "postalCode": "90001",
        "countryCode": "US"
    },
    "packages": [
        {
            "weight": 5
        }
    ]
}

describe("Rates API", () => {
  it("should return shipping rates", async () => {
    const response = await request(app)
      .post("/api/rates")
      .send(MOCK_200_OK_REQUEST)
      .expect(200);

    expect(response.body).toBeDefined();
  });

  it("should fail when weight is missing", async () => {
    const invalidPayload = {
      origin: {
        postalCode: "10001",
        countryCode: "US"
      },
      destination: {
        postalCode: "30301",
        countryCode: "US"
      }
    };

    const res = await request(app)
      .post("/api/rates")
      .send(invalidPayload);

    expect(res.status).toBeGreaterThanOrEqual(400);
  });



  it("should return validation error when packages is missing", async () => {
    const res = await request(app)
      .post("/api/rates")
      .send({
        origin: { postalCode: "10001", countryCode: "US" },
        destination: { postalCode: "30301", countryCode: "US" }
      });

    expect(res.status).toBe(400);

    expect(res.body).toEqual(
      expect.objectContaining({
        error: "Invalid request payload",
        details: expect.objectContaining({
          fieldErrors: expect.objectContaining({
            packages: expect.any(String)
          })
        })
      })
    );
  });
});