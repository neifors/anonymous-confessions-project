// let confessionContainer = document.querySelector(".row")
// fetch('http://localhost:3000/confessions').then(function(response) {
//   response.json().then(function(json){
//     for(item in json){
//         let newConfession = document.createElement('div');
//         let ConfessionPost = document.createElement('div');
//         newConfession.classList.add('.col-6');
//         newConfession.id = 'COL-6';
//         ConfessionPost.id = 'confessionPost';
//         let text = document.createTextNode(json[item].title);
//         ConfessionPost.append(text);
//         newConfession.append(ConfessionPost);
//         confessionContainer.append(newConfession);
//     }
//   })
// })

// const form = document.getElementById('form');
// const category = document.getElementById('category');
// const confession = document.getElementsByClassName('col-6');
// const title = document.getElementById('title');


// let userData

// //User Submitting Confession
// form.addEventListener('submit', logData);

// function logData (event){
//     e.preventDefault();
//     checkInputs();
//     fetch('https://localhost/3000/Confession-Entry', {
//         method: 'POST',
//         headers: {
//           'Content-Type' : 'application/json'
//       },
//       body: JSON.stringify({
//         title: 'Embarassing Moment',
//         confession: 'One time I ....'
//     })
//     }).then(res => {
//     return res.json()
//     })
//     .then(data => console.log(data))
//     .catch(error => console.log('ERROR'))


    
    
//     const formData = new FormData(this);
   
//     fetch('https://localhost/3000/Confessions', {
//         method: 'POST',
//         body: formData
//     }).then(function(response){
//         return response.text();
//     }).then(function (text){
//         console.log(text);
//     }).catch(function(error){
//         console.error(error);
//     })



//     newConfession.classlist.add('col-6')
//     let newConfession = document.createElement('div');
//     document.col-6.appendChild(newConfession)

// }

// fetch('https://localhost/3000/Confessions').then(function(response){
//     response.json().then(function(json){
//         for (item in json){
//             alert(json[item].title)
//         }
//     })
// })
        







// function checkInputs(){
//     const categoryValue = category.value.trim();
//     const confessionValue = confession.value.trim();
//     const titleValue = title.value.trim();

//     if(categoryValue === ''){
//         // error
//         setErrorFor(category, 'Please select a valid class');
//     } else {
//         // sucess
//         setSuccessFor(category);
//     }

//     if(title.length < 3){
//         setErrorFor(confession, 'Title must be at least 3 characters long');
//     }

//     if(confessionValue === ''){
//         // error
//            setErrorFor(confession, 'Confession cannot be blank');
//     } else if (WordCount < 2){
//         setErrorFor(confession, 'Confession must be at least 3 words');
//     } else {
//         // sucess
//         setSuccessFor(confession);
//     }

//     function WordCount(confession) { 
//         return str.split(" ").length;
//       }
//     }
      
      



// function setErrorFor(input, message) {
//     // Adding error class to the parent of the input
//     const formControl = input.parentElement;
//     const small = formControl.querySelector('small');

//     //error message inside small
//     small.innerText = message;

//     //error class
//     formControl.className = 'form-control error';
// }

// function setSuccessFor(input){
//     const formControl = input.parentElement; 
//     formControl.className = 'form-control success';
// }