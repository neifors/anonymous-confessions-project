document.getElementById("form").addEventListener("submit", event => {
   event.preventDefault()


//const newUrl = "https://anonconfess.herokuapp.com/" 


   fetch("http://localhost:3000/confessions/post", {mode: no-cors}, {
      method : 'POST',
      body: JSON.stringify({
         title : document.getElementById("title").value,
         message : document.getElementById("message").value,
         category : document.getElementById("category").value,
         comments : [], // default value. As new confession still has no comments
         reactions : { "like":  0, "love": 0, "hate": 0}, // default value. As new confession still has no reactions
         gif : document.getElementById("gif").value === undefined ? "" : document.getElementById("gif").value
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
