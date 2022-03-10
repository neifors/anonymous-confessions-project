
let confessionContainer = document.querySelector("#postedRow");
confessionContainer.classList.add('row');
let AllCats = document.querySelectorAll('h5');
let Alltitles = document.querySelectorAll('h3');
let selectCategory = document.querySelector('#searchCategory');
let button = document.querySelector('#searchConfession');
let searchTerm = document.querySelector('#searchBar');
let category = document.querySelector('h5')
let Col = document.querySelector('COL-6');
let allID = document.querySelectorAll('h6');
let allCommentBoxes = document.querySelectorAll('#addComment');























function searchByCategoryOrTitle() {
  if (selectCategory.value === 'Category' && searchTerm.value === '') {
    alert('No search input or category found')
  } else {
    if (selectCategory.value !== 'Category' && searchTerm.value === '') {
      removeAll();
      fetchCon('/category/' + selectCategory.value);
    }
    else if (selectCategory.value === 'Category' && searchTerm.value !== '') {
      removeAll();
      fetchCon('/search/' + searchTerm.value);

    }




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
        let giftoAdd = document.createElement('img');
        giftoAdd.src = json[item].gif;
        let confessId = document.createElement('h6');
        let newConfession = document.createElement('div');
        let ConfessionPost = document.createElement('div');
        let title = document.createElement('h3');
        let category = document.createElement('h5');
        let mainContent = document.createElement('p');
        let comment = document.createElement('input');
        let happyIcon = document.createElement('i');
        let shockIcon = document.createElement('i');
        let angryIcon = document.createElement('i');
        let closeButton = document.createElement('i');
        closeButton.id = 'closeButton';
        happyIcon.id = 'happyIcon';
        shockIcon.id = 'shockIcon';
        angryIcon.id = 'hateIcon';
        closeButton.classList.add('fa-solid');
        closeButton.classList.add('fa-xmark');
        happyIcon.classList.add('fa-regular');
        happyIcon.classList.add('fa-face-grin-beam');
        shockIcon.classList.add('fa-regular');
        shockIcon.classList.add('fa-face-surprise');
        angryIcon.classList.add('fa-regular');
        angryIcon.classList.add('fa-face-tired');
        comment.id = 'addComment';
        comment.classList.add('classComment');
        confessId.id = 'idOfConfession';
        newConfession.classList.add('col-6');
        newConfession.classList.add('col-xs-12');
        newConfession.id = 'COL-6';
        ConfessionPost.id = 'confessionPost';
        let happy = document.createTextNode(json[item].reactions.love);
        let shock = document.createTextNode(json[item].reactions.like);
        let angry = document.createTextNode(json[item].reactions.hate);
        happyIcon.appendChild(happy);
        shockIcon.appendChild(shock);
        angryIcon.appendChild(angry);


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
        ConfessionPost.appendChild(closeButton);
        ConfessionPost.appendChild(happyIcon);
        ConfessionPost.appendChild(shockIcon);
        ConfessionPost.appendChild(angryIcon);






        ConfessionPost.appendChild(category);
        ConfessionPost.appendChild(mainContent);
        ConfessionPost.append(giftoAdd);
        ConfessionPost.appendChild(comment);
        newConfession.append(ConfessionPost);
        confessionContainer.append(newConfession);
        AllCats = document.querySelectorAll('h5');
        Alltitles = document.querySelectorAll('h3');
        allID = document.querySelectorAll('h6');
        for (comment of json[item].comments) {


          let happyIconComment = document.createElement('i');
          let shockIconComment = document.createElement('i');
          let angryIconComment = document.createElement('i');
          happyIconComment.id = 'happycommentIcon';
          shockIconComment.id = 'shockcommentIcon';
          angryIconComment.id = 'hatecommentIcon';
          happyIconComment.classList.add('fa-regular');
          happyIconComment.classList.add('fa-face-grin-beam');
          shockIconComment.classList.add('fa-regular');
          shockIconComment.classList.add('fa-face-surprise');
          angryIconComment.classList.add('fa-regular');
          angryIconComment.classList.add('fa-face-tired');
          let happyCom = document.createTextNode(comment.reactions.love);
          let shockCom = document.createTextNode(comment.reactions.like);
          let angryCom = document.createTextNode(comment.reactions.hate);
          happyIconComment.appendChild(happyCom);
          shockIconComment.appendChild(shockCom);
          angryIconComment.appendChild(angryCom);


          let commentPost = document.createElement('section');
          let textComment = document.createTextNode(comment.message);
          let commentId = document.createElement('h6');
          let thecommentId = document.createTextNode(comment.id);
          commentId.style.display = 'none';
          commentPost.id = 'commentContainer'
          commentId.append(thecommentId)
          commentPost.append(commentId);
          commentPost.append(textComment);
          commentPost.append(happyIconComment);
          commentPost.append(shockIconComment);
          commentPost.append(angryIconComment);
          ConfessionPost.appendChild(commentPost);



        }


      }
    }).then(() => button.disabled = false).then(() => {
      allHappyReactonconfess = document.querySelectorAll('#happyIcon').forEach(happyReaction => {
        happyReaction.addEventListener('click', addALike);
        function addALike() {
          let confessioniD = happyReaction.parentElement.firstElementChild.textContent
          happyReaction.style.backgroundColor = 'rgb(16, 87, 16)';
          fetch("http://localhost:3000/confessions/reaction", {
            method: 'POST',
            body: JSON.stringify({
              idConfession: confessioniD, // id of the confession where we want to add the reaction || id of confession containing the comment we want to add the raction
              idComment: 0, // if we want to add a reaction to a confession (not to a comment) send this with value 0
              reaction: "love" // name of reaction
            }),
            headers: {
              "Content-Type": "application/json; charset=UTF-8"
            }
          })
        }
      })
    }).then(() => {
      allshockReactonconfess = document.querySelectorAll('#shockIcon').forEach(shockReaction => {
        shockReaction.addEventListener('click', addAShock);
        function addAShock() {
          let confessioniD = shockReaction.parentElement.firstElementChild.textContent
          shockReaction.style.backgroundColor = 'yellow';
          fetch("http://localhost:3000/confessions/reaction", {
            method: 'POST',
            body: JSON.stringify({
              idConfession: confessioniD, // id of the confession where we want to add the reaction || id of confession containing the comment we want to add the raction
              idComment: 0, // if we want to add a reaction to a confession (not to a comment) send this with value 0
              reaction: "like" // name of reaction
            }),
            headers: {
              "Content-Type": "application/json; charset=UTF-8"
            }
          })
        }
      })
    }).then(() => {
      allhateReactonconfess = document.querySelectorAll('#hateIcon').forEach(hateReaction => {
        hateReaction.addEventListener('click', addAHate);
        function addAHate() {
          let confessioniD = hateReaction.parentElement.firstElementChild.textContent;
          hateReaction.style.backgroundColor = 'red';
          fetch("http://localhost:3000/confessions/reaction", {
            method: 'POST',
            body: JSON.stringify({
              idConfession: confessioniD, // id of the confession where we want to add the reaction || id of confession containing the comment we want to add the raction
              idComment: 0, // if we want to add a reaction to a confession (not to a comment) send this with value 0
              reaction: "hate" // name of reaction
            }),
            headers: {
              "Content-Type": "application/json; charset=UTF-8"
            }
          })


        }


      })
      

    }).then(() => {
      closebuttons = document.querySelectorAll('#closeButton').forEach(closeButtons => {
        closeButtons .addEventListener('click', closeconfess);
        function closeconfess() {
          let confessioniD = closeButtons.parentElement.firstElementChild.textContent;
  
  
          closeButtons.style.fontColor  = 'white';
  
  
            
            fetch("http://localhost:3000/confessions/delete", {
              method : 'DELETE',
              body: JSON.stringify({
                 id : confessioniD, 
              }),
              headers : {
                 "Content-Type": "application/json; charset=UTF-8"
              }
           }) 
         }
  
  
  
        
  
  
      })
      
  
    }).then(() => {
      allCommentBoxes = document.querySelectorAll('.classComment').forEach(commentBox => {
        commentBox.addEventListener('keypress', commentPost);
        function commentPost(event) {
          if (event.key === 'Enter') {
            let commentToAdd = commentBox.value
            alert(commentToAdd);
            let targetId = commentBox.parentElement.firstElementChild.textContent;
            fetch("http://localhost:3000/confessions/postComment", {
              method: 'POST',
              body: JSON.stringify({
                id: targetId, // id of the confession where we want to add the comment
                comment: "the value is not being put into json", // comment text
                gif: document.getElementById("addGif").value === undefined ? "" : document.getElementById("addGif").value // if has not gif, send an empty string
              }),
              headers: {
                "Content-Type": "application/json; charset=UTF-8"
              }
            })



          }

        }
      })


    })
    
    
    
    
    
    

  })
}



// document.getElementById("submitConfession").addEventListener("click", event => {
//   event.preventDefault()
//   fetch("http://localhost:3000/confessions/post", {
//      method : 'POST',
//      body: JSON.stringify({
//         title : document.getElementById("title").value,
//         message : document.getElementById("confession").value,
//         category : document.getElementById("category").value,
//         comments : [], // default value. As new confession still has no comments
//         reactions : { "like":  0, "love": 0, "hate": 0}, // default value. As new confession still has no reactions
//         gif : document.getElementById("addGif").value === undefined ? "" : document.getElementById("addGif").value
//      }),
//      headers : {
//         "Content-Type": "application/json; charset=UTF-8"
//      }
//   })



// })

document.getElementById("submitConfession").addEventListener("click", event => {
  event.preventDefault()


  fetch("http://localhost:3000/confessions/post", {
    method: 'POST',
    body: JSON.stringify({
      title: document.getElementById("title").value,
      message: document.getElementById("confession").value,
      category: document.getElementById("category").value,
      comments: [], // default value. As new confession still has no comments
      reactions: { "like": 0, "love": 0, "hate": 0 }, // default value. As new confession still has no reactions
      gif: document.getElementById("addGif").value === undefined ? "" : document.getElementById("addGif").value
    }),
    headers: {
      "Content-Type": "application/json; charset=UTF-8"
    }

  })
  removeAll();
  fetchCon();
})












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















