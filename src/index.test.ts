import { describe, expect, afterAll, it } from "@jest/globals";
import { agent } from "supertest";
import { server } from "./index";

describe("Server", () => {
  const request = agent(server);
  afterAll((done) => {
    server.close(done);
  });

  it("should get all Products", async () => {
    const response = await request.get("/products");
    expect(response.status).toEqual(200);
    expect(response.body).toEqual([]);
  });
});
