const request = require("supertest")
const index = require("../index")
const router = require("../controller/controller")
const app = require("../server")

describe("API server", () => {
   beforeAll(() => {
      testServer = index.listen(3000, () => {
         console.log("Running test server")
      })
   })

   afterAll( done => {
      console.log("Stopping test server")
      testServer.close(done)
   })

   test("Bare domain GET responds 200", done => {
      request(app).get("/").expect(200,done)
   })
})
