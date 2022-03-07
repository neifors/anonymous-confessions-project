const data = [
   {
      id : 1,
      title : "Cheating",
      message : "I didn't study and I had to copy 😥",
      category : "guilt",
      comments : [
         {
            id : 1,
            message : "Don't feel bad and try to study next time",
            reactions : {
               like : 1, love: 3, hate : 0
            },
            gif : "https://media4.giphy.com/media/SsPId51oIjgCNe34EE/giphy.gif?cid=ecf05e47b30db6a58fad2a8a6c247077b075dc72f5975619&rid=giphy.gif&ct=g"
         },
         {
            id : 2,
            message : "I did that hundred times 😎",
            reactions : {
               like : 2, love: 25, hate : 7
            },
            gif : "https://media3.giphy.com/media/R6gvnAxj2ISzJdbA63/giphy.gif?cid=ecf05e4725ab2efbecf0481d868f1059e5bf2dcfc804a0c2&rid=giphy.gif&ct=g" 
         }      
      ],
      reactions : {
         like : 32, love : 0, hate : 0
      },
      gif : ""
   },
   {
      id : 2,
      title : "I lied",
      message : "I lied 3 times this week and now I'm ashamed to tell the truth",
      category : "lies",
      comments : [],
      reactions : {
         like : 4, love : 0, hate : 2
      },
      gif : ""
   },
   {
      id : 3,
      title : "A dream",
      message : "I had an indiscreet dream with my friend's girlfriend, should I tell him?",
      category : "dreams",
      comments : [
         {
            id : 1,
            message : "Nooooooo! Don't even think about it!",
            reactions : {
               like : 7, love: 23, hate : 18
            },
            gif : ""
         },
         {
            id : 2,
            message : "🤣🤣🤣",
            reactions : {
               like : 21, love: 43, hate : 0
            },
            gif : "https://media4.giphy.com/media/69vaVA7p2i94y5Fqo1/giphy.gif?cid=ecf05e47bgexzqbtv8848c9aww7u00gjie800cf3aucvualz&rid=giphy.gif&ct=g" 
         },
         {
            id : 3,
            message : "",
            reactions : {
               like : 29, love: 36, hate : 0
            },
            gif : "https://media2.giphy.com/media/f8hu8eVJkPDlJVMnds/giphy.gif?cid=ecf05e47e572e4zph3uymjzhnxkitwetp9rzuxofpzx9uouu&rid=giphy.gif&ct=g" 
         }      
      ],
      reactions : {
         like : 57, love : 36, hate : 0
      },
      gif : "https://media0.giphy.com/media/xT5LMSu0jZt535Lxu0/giphy.gif?cid=ecf05e473of54kvdxabpvphh0wlanld2puo9ogv3qsgzala4&rid=giphy.gif&ct=g"
   }
]

module.exports = data