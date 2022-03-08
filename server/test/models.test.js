// import data
const confessionsData = require("../data/data.json")

// import model 
const Confession = require('../model/models')

describe("Confession model", () => {
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

   it('should return all confessions', () => {
      const confessions = Confession.all;
      expect(confessions).toEqual(confessionsData)
   })

   it('should return a confession from a given id', () => {
      const confession = Confession.getConfessionById(1);
      expect(confession).toEqual(confessionsData[0])
   })

   it('should return confessions by category', () => {
      const confessions = Confession.findByCategory('lies')
      expect(confessions.length).toBe(3)
      expect(confessions[0].category).toBe('lies')
      expect(confessions[1].category).toBe('lies')
      expect(confessions[2].category).toBe('lies')

   })

   it('should return confessions containing a keyword into the title', () => {
      const confessions =  Confession.findConfession('bad')
      expect(confessions.length).toBe(1)
      expect(confessions[0].category).toBe("thoughs")
   })
})
