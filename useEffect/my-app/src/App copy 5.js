import React, { useState, useEffect } from 'react';

function Counter() {
  const [count, setCount] = useState(0)
  const [checkRender, setCheckRender] = useState(false);
  const countUp = () => {
    setCount(count+1)
  }
  //checkRender useStae를 하나 더 만든다.
  //checkRender를 처음부터 false로 시작한다.

  //checkRender가 false여서 if문은 false로 실행되고, true로 변경된다.
  // 그 다음부터 홀수, 짝수 alert가 나온다.
  // 또 다른 방법은 다음 파일에서 보자.
  useEffect(() => {
    if (checkRender) {
      if(count % 2){
        alert("홀수입니다")
      }else{
        alert("짝수입니다")
      }
    } else setCheckRender(true);
  }, [count])
  
  return(
    <>
    <div>{count}</div>
    <button onClick={countUp}>up!</button>
    </>
  )
}
function App() {
  return (
    <div>
      <Counter/>
    </div>
  );
}

export default App;