const button = document.querySelector("button");
const body = document.querySelector("body");
//const color = [ 'red' , 'yellow' , 'orange', 'black' ];
const color = [ 'red' , 'yellow'];
// body.style.backgroundColor = 'violet'
const bgColor = body.style.backgroundColor;
const bgColorArr = [];

button.addEventListener('click', changeBG )
function changeBG () {
  const colorIndex = parseInt(Math.random()*(color.length));
  console.log('조건문',new Date().getMilliseconds());
  
  bgColorArr.push(color[colorIndex]);
  let preVal = bgColorArr[bgColorArr.length-2];
  let curVal = bgColorArr[bgColorArr.length-1];
  console.log(preVal,curVal);

  if(bgColorArr.length > 1) {
    console.log( `배열 - ${bgColorArr}, 배열 길이 - ${bgColorArr.length}, 이전 값 - ${preVal}, 현재 값 ${curVal} , 이전 현재  값 비교 ${preVal===curVal}` );
    (preVal===curVal)&&(changeBG());
    // body.style.backgroundColor = curVal;
    // return
  } 
  console.log('현',curVal,'배열',color[colorIndex]);
  body.style.backgroundColor = color[colorIndex];
  console.log('종료');
}

// changeBg는 값을 받아서 

// index가 0인 경우 / 아닌 경우 

// 값을 넣은 배열에서 i-1, i 비교


