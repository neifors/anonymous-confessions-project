document.getElementById("form").addEventListener("submit", event => {
   event.preventDefault()

   let title = document.getElementById("title").value
   let message = document.getElementById("message").value
   let category = document.getElementById("category").value
   let gif = document.getElementById("gif").value

   fetch("http://localhost:3000/confessions/post", {
      method : 'POST',
      body: JSON.stringify({
         title : title,
         message : message,
         category : category,
         comments : [],
         reactions : { "like":  0, "love": 0, "hate": 0},
         gif : gif
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
