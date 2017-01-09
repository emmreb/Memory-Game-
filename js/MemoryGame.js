/**
 * Created by itc_user1 on 12/29/2016.
 */

var MemoryGame = {}

MemoryGame.column = 3;
MemoryGame.row = 4;
MemoryGame.card1 = '';
MemoryGame.card2 = '';
MemoryGame.board = document.getElementById('board');
MemoryGame.num = 0;
MemoryGame.clicks= 0;

MemoryGame.start =function() {

//create board
    for (var i = 0; i < MemoryGame.row; i++) {
        var box = document.createElement('div');
        box.className = "b";
        MemoryGame.board.appendChild(box);
        for (var j = 0; j < MemoryGame.column; j++) {
            var box2 = document.createElement('div');
            box2.className = "a";
            box.appendChild(box2);
            box2.addEventListener('click', flip);
            box2.id=MemoryGame.num;
            MemoryGame.num++
        }
        document.body.appendChild(MemoryGame.board);
    }

   function flip(click) {
       var e = click.target;
       e.style.backgroundImage = "url(" + MemoryGame.selected[e.id] + ")";

       if (MemoryGame.clicks == 0) {
           MemoryGame.card1 = click.target;
           MemoryGame.clicks++;

       }
       else if (MemoryGame.clicks == 1) {
           MemoryGame.card2 = click.target;
           MemoryGame.clicks= 0
       }
       // not equal
       if (!((MemoryGame.card1).style.backgroundImage == (MemoryGame.card2).style.backgroundImage)) {
           if(MemoryGame.clicks == 0) {
               setTimeout(function () {
                   MemoryGame.card2.style.backgroundImage = "url('http://www.joomlaworks.net/images/demos/galleries/abstract/7.jpg')";
                   MemoryGame.card1.style.backgroundImage = "url('http://www.joomlaworks.net/images/demos/galleries/abstract/7.jpg')";
               }, 1000);
           }
       }
   }


MemoryGame.images = [];
    for (var x =1; x < 7; x ++) {
        MemoryGame.imageElem = document.createElement("img");
        MemoryGame.imageElem.src = "./images/" + x + ".jpg";
        MemoryGame.imageElem.className = "imagesClass";
        MemoryGame.images.push( "./images/" + x + ".jpg"); //images array is made up of image sources

    }

MemoryGame.selected = [];
for (var r = 0; r < 6; r++) {
    var randomInd = Math.floor((Math.random() * MemoryGame.images.length));
    var face = MemoryGame.images[randomInd];
    MemoryGame.selected.push(face);
    MemoryGame.selected.push(face);
    MemoryGame.images.splice(randomInd, 1);
}
    MemoryGame.selected.sort(function() {
        return 0.5 - Math.random();
    });
}
//new game button
var btn = document.createElement("BUTTON");
var t = document.createTextNode("NEW GAME");
btn.appendChild(t);
document.body.appendChild(btn);
btn.onclick=(now);

function now() {
    location.reload(true);

}
MemoryGame.start();


