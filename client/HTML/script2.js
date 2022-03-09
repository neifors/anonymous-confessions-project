let confessionContainer = document.querySelector(".row");
let AllCats = document.querySelectorAll('h5');
let AllTitles = document.querySelectorAll('h3');
let selectCategory = document.querySelector('#searchCategory');
let button = document.querySelector('#searchConfession');
let searchTerm = document.querySelector('#searchBar');
let category = document.querySelector('h5')
let Col = document.querySelector('COL-6');



function searchByCategoryOrTitle(){
  if (selectCategory.value === 'Category' && searchTerm.value === ''){
    alert('No search input or category found')
  } else {
      for(let i = 0; i < AllCats.length; i++){  
        if(AllCats[i].textContent !== selectCategory.value) {
           AllCats[i].parentElement.parentElement.remove()
           
        }
      } if (selectCategory.value === 'all'){
          fetchCon();
      } else if (searchTerm !== ''){
          for (let i = 0; i < AllTitles.length; i++){
              if(AllTitles[i].textContent !== searchTerm.value) {
                AllTitles[i].parentElement.parentElement.remove()
              }
          }

    }  


  }

fetchCon(); 
button.addEventListener('click', searchByCategoryOrTitle);

  

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
                 AllCats = document.querySelectorAll('h5');
                 AllTitles = document.querySelectorAll('h3');
          

          }

    }
  }).then(() => button.disabled = false )

  })
}}
