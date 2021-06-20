const button = document.querySelector("button");
const body = document.querySelector("body");
const colorArr = [ 'red' , 'yellow' , 'orange', 'black' ];
console.log(colorArr);
// body.style.backgroundColor = 'violet'
const bgColor = body.style.backgroundColor;
const bgColorArr = [];

function removeCurVal( curVal ) {
  //중복되었을 때
  console.log('중복중복중복중복')
  const clonedColorArr = colorArr;
  console.log(clonedColorArr);
  // 중복되는 색을 뺀 새로운 배열
  const filteredColor = clonedColorArr.filter((element) => element !== curVal);
  console.log(filteredColor);
  let reColorIndex = parseInt(Math.random()*(filteredColor.length)) - 1;
  // Math.random()이 0이 나와 reColorIndex가 -1이 된 경우를 대비
  (reColorIndex === -1 )&&(reColorIndex = 0);
  console.log('removeCurVal 종료')
  return filteredColor[reColorIndex];
}

function changeBG () {
  const colorIndex = parseInt(Math.random()*(colorArr.length));
  console.log('조건문',new Date().getMilliseconds());
  
  bgColorArr.push(colorArr[colorIndex]);
  const preVal = bgColorArr[bgColorArr.length-2];
  const curVal = bgColorArr[bgColorArr.length-1];
  console.log(preVal,curVal);
  
  if(bgColorArr.length > 1 && preVal===curVal) {
    console.log( `배열 - ${bgColorArr}, 배열 길이 - ${bgColorArr.length}, 이전 값 - ${preVal}, 현재 값 ${curVal} , 이전 현재  값 비교 ${preVal===curVal}` );
    // 중복되지 않는 값.
    const noOverlapColor = removeCurVal(curVal)
    bgColorArr.push(noOverlapColor);
    body.style.backgroundColor = noOverlapColor;
    console.log('bgColor 조건문 종료');
    return
  };
  console.log('현',curVal,'배열',colorArr[colorIndex]);
  body.style.backgroundColor = colorArr[colorIndex];
  console.log('전체 종료');
}

button.addEventListener('click', changeBG )

