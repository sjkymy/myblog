import React, { useState, useEffect } from 'react';

function Counter() {
  const [count, setCount] = useState(0)
  const countUp = () => {
    setCount(count+1)
  }

  // 이전 파일에서 만들었던 checkRender를 지우고 다음과 같이 만들 수 있다.

  useEffect(() => {
    if (count !== 0) {
      if (count % 2){
        alert("홀수입니다")
      } else{
        alert("짝수입니다")
      }
    }
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