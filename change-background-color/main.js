const button = document.querySelector("button");
const body = document.querySelector("body");
const colorArr = [ 'red' , 'yellow' , 'orange', 'black' ];
const bgColorArr = [];

function removeOverlapColor( curVal ) {
  // 중복되는 색을 뺀 새로운 배열
  const filteredColorArr = colorArr.filter((element) => element !== curVal);
  let filteredColorIndex = parseInt(Math.random()*(filteredColorArr.length)) - 1;
  // Math.random()이 0이 나와 filteredColorIndex가 -1이 된 경우를 대비
  (filteredColorIndex === -1 )&&(filteredColorIndex = 0);
  return filteredColorArr[filteredColorIndex];
}

function changeBgColor () {
  const colorIndex = parseInt(Math.random()*(colorArr.length));
  bgColorArr.push(colorArr[colorIndex]);
  const preVal = bgColorArr[bgColorArr.length-2];
  const curVal = bgColorArr[bgColorArr.length-1];
  console.log(preVal,curVal);
  
  // 배경색이 동일한 경우
  if(bgColorArr.length > 1 && preVal===curVal) {
    console.log( `배열 - ${bgColorArr}, 배열 길이 - ${bgColorArr.length}, 이전 값 - ${preVal}, 현재 값 ${curVal} , 이전 현재  값 비교 ${preVal===curVal}` );
    //중복되지 않는 값.
    const noOverlapColor = removeOverlapColor(curVal)
    bgColorArr.push(noOverlapColor);
    body.style.backgroundColor = noOverlapColor;
    return
  };
  body.style.backgroundColor = colorArr[colorIndex];
}

button.addEventListener('click', changeBgColor );
