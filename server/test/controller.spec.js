const request = require("supertest")
const server = require("../server")
const allData = require("../data/data")
const { all } = require("../server")


describe("API server", () => {

   const testPostConfession = {
      "title" : "test title",
      "message" : "test message",
      "category" : "helper",
      "comments" : [], 
      "reactions" : { "like":  0, "love": 0, "hate": 0},
      "gif" : ""
   }

   const testPostComment = {
      "id" : 1, 
      "comment" : "This is a test comment",
      "gif" : ""
   }

   const testCommentReaction = {
      "idConfession" : 1, 
      "idComment" : 1, 
      "reaction" : "like" 
   }


   beforeAll(() => {
      api = server.listen(3000, () => {
         console.log("Running test server")
      })
   })

   afterAll( done => {
      console.log("Stopping test server")
      api.close(done)
   })

   it('response with status 200 when trying to get /', done => {
      request(api).get("/").expect(200, done)
   })

   it('get /confessions with status 200', async () => {
      const data = (await request(api).get('/confessions')).body;

      expect(data.length).toEqual(allData.length);
      expect(data).toEqual(allData);
   })

   it('get /confessions/:id with status 200', done => {
      request(api)
         .get('/confessions/0')
         .expect(
            {
               "id": 0,
               "title": "This is a test",
               "message": "Testing message",
               "category": "test",
               "comments": [
                  {
                     "id": 2,
                     "message": "this is another test",
                     "gif": "",
                     "reactions": {
                        "like": 0,
                        "love": 0,
                        "hate": 0
                     }
                  },
                  {
                     "id": 1,
                     "message": "This is a test comment",
                     "gif": "",
                     "reactions": {
                        "like": 0,
                        "love": 0,
                        "hate": 0
                     }
                  }
               ],
               "gif": "",
               "reactions": {
                  "like": 0,
                  "love": 0,
                  "hate": 0
               }
            })
         .expect(200, done);
   })

   it('post to /confessions/post getting status 201', done => {
      request(api)
         .post('/confessions/post')
         .send(testPostConfession)
         .set('Accept', 'application/json')
         .expect(201, done);
   })

   it('post to /confessions/postComment getting status 201', done => {
      request(api)
          .post('/confessions/postComment')
          .send(testPostComment)
          .set('Accept', 'application/json')
          .expect(201, done);
   })

  
   it('post to /confessions/reaction getting status 201', done => {
      request(api)
         .post('/confessions/reaction')
         .send(testCommentReaction)
         .set('Accept', 'application/json')
         .expect(201, done);
   })

   it("post to /confessions/delete getting status 204", done => {
      request(api)
         .post('/confessions/delete')
         .send("5")
         .set('Accept', 'application/json')
         .expect(204, done)
   })
})
