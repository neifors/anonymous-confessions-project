document.getElementById("like").addEventListener("click", e => {
   e.preventDefault()

   fetch("http://localhost:3000/confessions/reaction", {
      method : 'POST',
      body: JSON.stringify({
         idConfession : 5, // id of the confession where we want to add the reaction || id of confession containing the comment we want to add the raction
         idComment : 1, // if we want to add a reaction to a confession (not to a comment) send this with value 0
         reaction : "like" // name of reaction
      }),
      headers : {
         "Content-Type": "application/json; charset=UTF-8"
      }
   }) .then( response => {
      return response.json()
   }) .then( data => {
      console.log(data)
   })

})
document.getElementById("love").addEventListener("click", e => {
   e.preventDefault()

   fetch("http://localhost:3000/confessions/reaction", {
      method : 'POST',
      body: JSON.stringify({
         idConfession : 5, // id of the confession where we want to add the reaction || id of confession containing the comment we want to add the raction
         idComment : 1, // if we want to add a reaction to a confession (not to a comment) send this with value 0
         reaction : "love" // name of reaction
      }),
      headers : {
         "Content-Type": "application/json; charset=UTF-8"
      }
   }) .then( response => {
      return response.json()
   }) .then( data => {
      console.log(data)
   })

})

document.getElementById("hate").addEventListener("click", e => {
   e.preventDefault()

   fetch("http://localhost:3000/confessions/reaction", {
      method : 'POST',
      body: JSON.stringify({
         idConfession : 5, // id of the confession where we want to add the reaction || id of confession containing the comment we want to add the raction
         idComment : 1, // if we want to add a reaction to a confession (not to a comment) send this with value 0
         reaction : "hate" // name of reaction
      }),
      headers : {
         "Content-Type": "application/json; charset=UTF-8"
      }
   }) .then( response => {
      return response.json()
   }) .then( data => {
      console.log(data)
   })

})



document.getElementById('form').addEventListener('submit', e => {
      e.preventDefault()

      fetch("http://localhost:3000/confessions/postComment", {
         method : 'POST',
         body: JSON.stringify({
            id : 5, // id of the confession where we want to add the comment
            comment : document.getElementById("comment").value, // comment text
            gif : document.getElementById("gif").value === undefined ? "" : document.getElementById("gif").value // if has not gif, send an empty string
         }),
         headers : {
            "Content-Type": "application/json; charset=UTF-8"
         }
      }) .then( response => {
         return response.json()
      }) .then( data => {
         console.log(data)
      })
   

   })



 document.getElementById("delete").addEventListener("click", e => {
    e.preventDefault()
    
    fetch("http://localhost:3000/confessions/delete", {
      method : 'POST',
      body: JSON.stringify({
         id : 6, // id of the confession we want to delete
      }),
      headers : {
         "Content-Type": "application/json; charset=UTF-8"
      }
   }) .then( response => {
      return response.json()
   }) .then( data => {
      console.log(data)
   })
 })
