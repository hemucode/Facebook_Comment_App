//copyright by hemanta gayen
setInterval(bot,2000);
var commentbox,button,comment,text = ["woowww","really cool๐คฉ","perfect","โค๏ธโค๏ธ๐โค๏ธ๐คฉ๐๐๐","๐๐๐๐๐๐","๐ค๐งก๐๐งก๐๐งก๐๐๐๐โค๏ธ"];
function bot(){
comment = text[Math.floor(Math.random()*text.length)];
commentbox = document.querySelector("#composerInput");
button = document.querySelector("._54k8._52jg._56bs._21th._56bu");
 if(commentbox){commentbox.innerText=comment;button.click();console.log(comment);}
}