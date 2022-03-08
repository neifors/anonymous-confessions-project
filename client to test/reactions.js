document.getElementById("like").addEventListener("click", e => {
   e.preventDefault()

   fetch("http://localhost:3000/confessions/reaction", {
      method : 'POST',
      body: JSON.stringify({
         idConfession : 2,
         idComment : 0,
         reaction : "like"
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
         idConfession : 2,
         idComment : 0,
         reaction : "love"
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
         idConfession : 2,
         idComment : 0,
         reaction : "hate"
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

      fetch("http://localhost:3000/confessions/postcomment", {
         method : 'POST',
         body: JSON.stringify({
            id : 2,
            comment : document.getElementById("comment").value,
            gif : ""
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



 