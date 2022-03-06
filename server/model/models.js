const { createPromptModule } = require("inquirer");
const confessionsData = require("../data/data.json")

class Comment {
   constructor(data) {
      this.id = data.id;
      this.message = data.message;
      this.reactions = {
         like : 0,
         love : 0,
         dislike : 0,
      };
      this.gif = "";
   }
}

class Confession extends Comment{
   constructor(data){
      super(id);
      this.title = data.title;
      super(message);
      this.category = data.category;
      this.comments = [];
      super(reactions);
      super(gif);
   }

   static get all() {
      // returns all the posts saved into ./data/data.json
      return confessionsData;
   }

   static getConfessionById(id) {
      // returns the post which matched the id
      const confessions = Confession.all;
      const result = confessions.find(confession => confession["id"] === id);
      return result;
   }

   static getCommentById(confession, id) {
      // returns the comment with the given id inside the given confession
      const comment = confession["comments"].find(comment => comment["id"] === id);
      return comment;
   }

   static addConfession(data) {
      // save a new post into our data.json 
      const id = confessionsData.length + 1;
      const newConfession = new Confession({id : id, ...data});
      confessionsData.push(newConfession);
   }

   static findConfession(keyword) {
      // find confessions that contains the keyword into title
      const confessions = Confession.all;
      for (confession of confessions) {
         confession["title"]
         confession["message"]
      };
   }

   static findByCategory(category) {
      // find all confessions of a given category
      const confessions = Confession.all;
      categoryConfessions = confessions.filter( confession => confession["category"] === category);
      return categoryConfesions;
   }

   static createComment(id,data) {
      // create a comment into a confession with the received id
      const confession = Confession.getById(id);
      const commentId = confession.length + 1;
      confession["comments"].push(new Comment({id : commentId, ...data}));
   }

   static addReaction(reaction, confessionId, commmentId=null) {
      // increment the reaction counter of a confession
      // if receiving the id of a confession but also an id of a comment,
      // increment the reaction of that comment.
      const confession = Confession.getById(confessionId);
      if (commmentId === null) {
         confession["reactions"][reaction] ++;
      } else {
         const comment = Confession.getCommentById(confession, commmentId)
         comment[reaction] ++
      }
   }
}



module.exports = Confession;
