let confessionContainer = document.querySelector(".row");
let AllCats = document.querySelectorAll('h5');
let Alltitles = document.querySelectorAll('h3');
let selectCategory = document.querySelector('#searchCategory');
let button = document.querySelector('#searchConfession');
let searchTerm = document.querySelector('#searchBar');
let category = document.querySelector('h5')
let Col = document.querySelector('COL-6');
let leftTitleBox = document.getElementById('title');
let leftConfession = document.getElementById('confession');
let leftAddGif = document.getElementById('addGif');
let leftCategory = document.getElementById('category');
let LeftButton = document.getElementById('submitConfession');
let addComment = document.querySelectorAll('#addComment')
let idofConfession = document.querySelectorAll('#ifofConfession');
addEventListener('keypress', postComment)

// function postComment (event){
//   for (i = 0 ; i < idofConfession.length; i++){
//   if(ConfessionPost.addComment.event.key === 'Enter'){}
//     // let formId = event.target.parentElement.id
//     // let post = document.querySelectorAll( '#' + formId).children;
//     alert(idofConfession[i])
//   }
// }



document.getElementById("submitConfession").addEventListener("click", event => {
  event.preventDefault();

  fetch("http://localhost:3000/confessions/post", {
     method : 'POST',
     body: JSON.stringify({
        title : document.getElementById("title").value,
        message : document.getElementById("confession").value,
        category : document.getElementById("category").value,
        comments : [], // default value. As new confession still has no comments
        reactions : { "like":  0, "love": 0, "hate": 0}, // default value. As new confession still has no reactions
        gif : document.getElementById("addGif").value === undefined ? "" : document.getElementById("addGif").value
     }),
     headers : {
        "Content-Type": "application/json; charset=UTF-8"
     }
  })  
  }
)







function submitConfessionPost (event){
  event.preventDefault()
  if (leftCategory.value === 'Category' && title.value !== '' || leftCategory.value !== 'Category' && title.value === '' || leftCategory.value === 'Category' && title.value === ''){
    alert('No input')
  } else {
    fetch('http://localhost:3000/confessions/post', {
    
      method :'POST',
      body: JSON.stringify({
        title: leftTitleBox.value,
        message: leftConfession.value,
        category: leftCategory.value,
        comments: [],
        reactions: {'like': 0, 'love': 0, 'hate' :0},
        gif:leftAddGif.value === undefined ? "" :leftAddGif.value
      }),
      headers: {
        'Content-Type': 'application/json; charset=UTF-8'
      }
    }).then(function (response) {
    response.json().then(function (json) {
      for (item in json) {
        alert(json[item].title);
      }
    })
  })
}}
  



function searchByCategoryOrTitle() {
  if (selectCategory.value === 'Category' && searchTerm.value === '') {
    alert('No search input or category found')
  } else {
    if(selectCategory.value !== 'Category' && searchTerm.value === ''){
      removeAll();
      fetchCon('/category/' + selectCategory.value);
    }
    else if(selectCategory.value === 'Category' && searchTerm.value !== ''){
      removeAll();
      fetchCon('/search/' + searchTerm.value);

    }


    // if (searchTerm.value !== '' && selectCategory.value === 'Category') {
    //   removeAll();
    //   fetchCon('/category/' + selectCategory.value);


    // }



  }
}


fetchCon();

button.addEventListener('click', searchByCategoryOrTitle);

function removeAll() {
  for (let i = 0; i < AllCats.length; i++) {
    AllCats[i].parentElement.parentElement.remove();

  }

}


function fetchCon(string = "") {
  button.disabled = true;
  fetch('http://localhost:3000/confessions' + string).then(function (response) {
    response.json().then(function (json) {
      for (item in json) {
        let confessId = document.createElement('h6');
        let newConfession = document.createElement('div');
        let ConfessionPost = document.createElement('div');
        let title = document.createElement('h3');
        let category = document.createElement('h5');
        let mainContent = document.createElement('p');
        let comment = document.createElement('input');
        comment.id = 'addComment'
        confessId.id = 'idofConfession'
        newConfession.classList.add('col-6');
        newConfession.id = 'COL-6';
        ConfessionPost.id = 'confessionPost';
        let idCon = document.createTextNode(json[item].id);
        let text = document.createTextNode(json[item].title);
        let textCategory = document.createTextNode(json[item].category);
        let textMessage = document.createTextNode(json[item].message);
        confessId.append(idCon);
        mainContent.append(textMessage);
        category.append(textCategory);
        title.append(text);
        ConfessionPost.append(confessId);
        ConfessionPost.append(title);
        ConfessionPost.appendChild(category);
        ConfessionPost.appendChild(mainContent);
        ConfessionPost.appendChild(comment);
        newConfession.append(ConfessionPost);
        confessionContainer.append(newConfession);
        AllCats = document.querySelectorAll('h5');
        Alltitles = document.querySelectorAll('h3');
        for (comment of json[item].comments) {
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





// for (let j = 0; j < Alltitles.length; j++) {
//   if (Alltitles[j].textContent !== searchTerm.value) {
//     Alltitles[j].parentElement.parentElement.remove()

//   }
// }















