// import data
const confessionsData = require("../data/data.json")

// import model 
const Confession = require('../model/models')


describe("Confession model", () => {


   const testPostComment = {
      "id" : 0, 
      "comment" : "This is a test comment",
      "gif" : ""
   }

   const testPostConfession = {
      "title" : "test title",
      "message" : "test message",
      "category" : "helper",
      "comments" : [], 
      "reactions" : { "like":  0, "love": 0, "hate": 0},
      "gif" : ""
   }


   const testConfession = {
      id : 100,
      title : "I am a liar",
      message : "I can't stop telling lies to everyone",
      category : "lies",
      comments : [],
      gif : "",
      reactions : {"like" : 1, "love" : 0, "hate" : 2}
   };


   it("should make an instance of a confession", () => {
      const confession = new Confession({ ...testConfession });

      expect(confession.id).toBe(100);
      expect(confession.title).toBe("I am a liar");
      expect(confession.message).toBe("I can't stop telling lies to everyone");
      expect(confession.category).toBe("lies");
      expect(confession.comments).toStrictEqual([]);
      expect(confession.gif).toBe("");
      expect(confession.reactions).toStrictEqual({"like" : 1, "love" : 0, "hate" : 2})

   })
   
   
   it('should add a comment into confession with id 0', () => {
      const confessions = Confession.createComment(testPostComment)
      const confess = confessions.find( conf => conf["id"] === 0)
      expect(confess["comments"][confess["comments"].length-1]["message"]).toBe("This is a test comment")
   })


   it('should return all confessions', () => {
      const confessions = Confession.all;
      expect(confessions).toEqual(confessionsData)
   })


   it('should return a confession from a given id', () => {
      const confessions = Confession.all
      const confession = Confession.getConfessionById(0);
      expect(confession).toEqual(confessions[confessions.length -1])
   })

   it('should return confessions by category', () => {
      const confessions = Confession.findByCategory('test')
      expect(confessions.length).toBe(1)
      expect(confessions[0]["category"]).toBe('test')
      expect(confessions[0]["id"]).toEqual(0)
   })

   it('should add a new confession at the beginning of the data file', () => {

      const lengthConf = (Confession.all).length
      const confessions = Confession.addConfession(testPostConfession)
      expect(confessions[0]["title"]).toBe("test title")
      expect(confessions[0]["message"]).toBe("test message")
      expect(confessions.length - 1).toEqual(lengthConf)
   })

   it('should return confessions containing a keyword into the title', () => {
      const confessions =  Confession.findConfession('bad')
      expect(confessions.length).toBe(1)
      expect(confessions[0].category).toBe("thoughs")
   })


   it('should return a comment by a given id', () => {
      const confession = Confession.getConfessionById(3)
      const comment = Confession.getCommentById(confession, 2)
      expect(comment.gif).toBe("https://media4.giphy.com/media/69vaVA7p2i94y5Fqo1/giphy.gif?cid=ecf05e47bgexzqbtv8848c9aww7u00gjie800cf3aucvualz&rid=giphy.gif&ct=g")
      expect(comment["reactions"]["love"]).toBe(43)
   })


})


describe("Reactions", () => {

   const testConfessReaction = {
      "idConfession" : 0, 
      "idComment" : 0, 
      "reaction" : "hate" 
   }

   const testCommentReaction = {
      "idConfession" : 0, 
      "idComment" : 1, 
      "reaction" : "like" 
   }

       
   it("add reaction to a confession with id 0", () => {

      const conf = Confession.getConfessionById(0)
      const before = conf["reactions"]["hate"]
      const confessions = Confession.addReaction(testConfessReaction)
      const confess = confessions.find( conf => conf["id"] === 0)


      expect(confess["reactions"]["hate"]).toBe(before+1)
   })

   it("add reaction to a confession with id 0", () => {

      const conf = Confession.getConfessionById(0)
      const before = conf["comments"][conf["comments"].length-1]["reactions"]["like"]
      const confessions = Confession.addReaction(testCommentReaction)
      const confess = confessions.find( conf => conf["id"] === 0)


      expect(confess["comments"][confess["comments"].length-1]["reactions"]["like"]).toBe(before+1)
   })

})
