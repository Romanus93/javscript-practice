const button = document.querySelector("button");
const body = document.querySelector("body");
const color = [ 'red' , 'yellow' , 'orange', 'black' ];
// body.style.backgroundColor = 'violet'
const bgColor = body.style.backgroundColor;
const bgColorArr = [];

button.addEventListener('click', changeBG )
function changeBG () {
  const colorIndex = parseInt(Math.random()*(color.length));
  console.log(bgColorArr.length);
  console.log('조건문',new Date().getMilliseconds());
  
  bgColorArr.push(color[colorIndex]);

  if(bgColorArr.length > 1) {
    console.log('길이',bgColorArr.length);
    let preVal = bgColorArr[bgColorArr.length-2];
    let curVal = bgColorArr[bgColorArr.length-1];
    console.log('배열',bgColorArr,'배열길이'+ bgColorArr.length);
    console.log('이전 값',preVal,bgColorArr[bgColorArr.length-2],'현재 값',curVal,bgColorArr[bgColorArr.length-1]);
    console.log('이전 현재 비교',curVal==preVal);
    body.style.backgroundColor = curVal;
    return
  } 
  body.style.backgroundColor = color[colorIndex];
  console.log('종료');
}

// changeBg는 값을 받아서 

// index가 0인 경우 / 아닌 경우 

// 값을 넣은 배열에서 i-1, i 비교


