
let confessionContainer = document.querySelector(".row");
let selectCategory = document.querySelector('#searchCategory');
let button = document.querySelector('#searchConfession');
let searchTerm = document.querySelector('#searchBar');
let category = document.querySelector('h5');
let AllCats = document.querySelectorAll('h5');
let Col = document.querySelector('COL-6');




function searchByCategoryOrTitle(){
  if (selectCategory.value === 'Category' && searchTerm.value === ''){
    alert('No search input or category found')
  } else {
    if(searchTerm.value === '' && selectCategory.value !== 'Category'){
      for(let i = 0; i < AllCats.length; i++){
        alert(AllCats[i].textContent)
        // if(AllCats[i].textContent !== selectCategory.value) {
        //   AllCats[i].parentElement.parentElement.remove()
        // }
      }

     
     }
    }
  }
   
search.addEventListener('submit', searchByCategoryOrTitle);

  

function fetchCon (){
  button.disabled = true;
fetch('http://localhost:3000/confessions').then(function(response) {
 response.json().then(function(json){
    for(item in json){
        let newConfession = document.createElement('div');
        let ConfessionPost = document.createElement('div');
        let title = document.createElement('h3');
        let category = document.createElement('h5');
        let mainContent = document.createElement('p');
        let comment = document.createElement('input');
        comment.id = 'addComment'
        newConfession.classList.add('col-6');
        newConfession.id = 'COL-6';
        ConfessionPost.id = 'confessionPost';
        let text = document.createTextNode(json[item].title);
        let textCategory = document.createTextNode(json[item].category);
        let textMessage = document.createTextNode(json[item].message);
        mainContent.append(textMessage);
        category.append(textCategory);
        title.append(text);
        ConfessionPost.append(title);
        ConfessionPost.appendChild(category);
        ConfessionPost.appendChild(mainContent);
        ConfessionPost.appendChild(comment);
        newConfession.append(ConfessionPost);
        confessionContainer.append(newConfession);
          for(comment of json[item].comments){
            let commentPost = document.createElement('p');
            let textComment = document.createTextNode(comment.message);
            commentPost.id = 'commentContainer'
                commentPost.append(textComment);
                 ConfessionPost.appendChild(commentPost);
          

          }

    }
  }).then(() => button.disabled = false)

  })
}


fetchCon();






// async function fetchConfessions(){
//   const response = await
//   fetch('http://localhost:3000/confessions');
  
//   const json = await response.json()
//   for(item in json){
//     let newConfession = document.createElement('div');
//     let ConfessionPost = document.createElement('div');
//     let title = document.createElement('h3');
//     let category = document.createElement('h5');
//     let mainContent = document.createElement('p');
//     let comment = document.createElement('input');
//     comment.id = 'addComment'
//     newConfession.classList.add('col-6');
//     newConfession.id = 'COL-6';
//     ConfessionPost.id = 'confessionPost';
//     let text = document.createTextNode(json[item].title);
//     let textCategory = document.createTextNode(json[item].category);
//     let textMessage = document.createTextNode(json[item].message);
//     mainContent.append(textMessage);
//     category.append(textCategory);
//     title.append(text);
//     ConfessionPost.append(title);
//     ConfessionPost.appendChild(category);
//     ConfessionPost.appendChild(mainContent);
//     ConfessionPost.appendChild(comment);
//     newConfession.append(ConfessionPost);
//     confessionContainer.append(newConfession);
//       for(comment of json[item].comments){
//         let commentPost = document.createElement('p');
//         let textComment = document.createTextNode(comment.message);
//         commentPost.id = 'commentContainer'
//             commentPost.append(textComment);
//              ConfessionPost.appendChild(commentPost);
      

//       }

// }
  
// }

// fetchConfessions();




// for(let i = 0; i < AllCats.length; i++){
//   alert(AllCats[i].textContent)
//   // if(AllCats[i].textContent === 'guilt'){
//   //   AllCats[i].parentElement.parentElement.remove();
//   }




 









// const form = document.getElementById('form');
// const category = document.getElementById('category');
// const confession = document.getElementsByClassName('col-6');
// const title = document.getElementById('title');let userData//User Submitting Confession
// form.addEventListener('submit', logData);function logData (event){
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
//     .catch(error => console.log('ERROR'))    const formData = new FormData(this);    fetch('https://localhost/3000/Confessions', {
//         method: 'POST',
//         body: formData
//     }).then(function(response){
//         return response.text();
//     }).then(function (text){
//         console.log(text);
//     }).catch(function(error){
//         console.error(error);
//     })    newConfession.classlist.add('col-6')
//     let newConfession = document.createElement('div');
//     document.col-6.appendChild(newConfession)}fetch('https://localhost/3000/Confessions').then(function(response){
//     response.json().then(function(json){
//         for (item in json){
//             alert(json[item].title)
//         }
//     })
// })
