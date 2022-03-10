// const confessionsData = require("../data/data.json")
const fs = require('fs')


class Confession{
   constructor(data){
      this.id = data.id
      this.title = data.title
      this.message = data.message
      this.category = data.category
      this.comments = data. comments
      this.gif = data.gif
      this.reactions = data.reactions
   }

   static get all() {
      // returns all the posts saved into ./data/data.json
      const confessionsData = require("../data/data.json")
      const confessions = confessionsData.map(confession => new Confession(confession));
      return confessions;
   }

   static getConfessionById(id) {
      // returns the post which matched the id
      const confessions = Confession.all;
      const result = confessions.find(confession => confession["id"] == id);
      return result;
   }

   static getCommentById(confession, id) {
      // returns the comment with the given id inside the given confession
      const comment = confession["comments"].find(comment => comment["id"] == id);
      return comment;
   }

   static addConfession(data) {
      // save a new post into our data.json 
      const confessions = Confession.all;
      const id = confessions.length;
      const newConfession = new Confession({id : id, ...data});
      confessions.unshift(newConfession);
      Confession.saveData(confessions)
      return confessions
   }

   static findConfession(keyword) {
      // find confessions that contains the keyword into title
      const confessions = Confession.all;
      return confessions.filter( confession => {
         for (let word of confession["title"].split(" ")) {
            if (word === keyword) {
               return confession
            }
         }
      })
   }

   static findByCategory(category) {
      // find all confessions of a given category
      const confessions = Confession.all;
      return confessions.filter( confession => confession["category"] === category);
   }

   static createComment(data) {
      // create a comment into a confession with the received id
      const confessions = Confession.all
      const modified = confessions.map( confession => {
         if (confession['id'] == data.id) {
            const commentId = confession["comments"].length + 1;
            confession["comments"].unshift({
               "id" : commentId, 
               "message": data.comment, 
               "gif": data.gif, 
               "reactions" : { "like":  0, "love": 0, "hate": 0} 
            });
         }
         return confession
      })
      Confession.saveData(modified)
      return modified
   }

   static addReaction(data) {
      // increment the reaction counter of a confession
      // if receiving the id of a confession but also an id of a comment,
      // increment the reaction of that comment.
      const confessions = Confession.all
      const modified = confessions.map( confession => {
         if (confession['id'] == data.idConfession) {

            if (data.idComment == 0) {
               confession["reactions"][data.reaction] ++;
               console.log(data.reaction+" +1 for comment with id: "+data.idConfession)
            } else {
               const comment = Confession.getCommentById(confession, data.idComment)
               comment["reactions"][data.reaction] ++
            }

         }
         return confession
      })
      Confession.saveData(modified)
      return modified
   }

   static removeConfession(id) {
      const confessions = Confession.all
      const modified = confessions.filter( confession => {
         if (confession['id'] != id) {
            return confession
         }
      })
      Confession.saveData(modified)
   }

   static saveData(data) {
      // saving our data into data.json
      fs.writeFile("./data/data.json", JSON.stringify(data), function(err) {
         if(err) {
            return console.log(err);
         }
         console.log("The file was saved!");
      });
   }
}



module.exports = Confession;
