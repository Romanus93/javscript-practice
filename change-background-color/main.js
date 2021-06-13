const button = document.querySelector("button");
const body = document.querySelector("body");
const color = [ 'red' , 'yello' , 'green' , 'orange' , 'pink' , 'violet' ];
body.style.backgroundColor = 'violet'

button.addEventListener('click', changeBG )
function changeBG () {
  const colorIndex = parseInt(Math.random()*(color.length));
  console.log(colorIndex);
  body.style.backgroundColor = color[colorIndex];
}