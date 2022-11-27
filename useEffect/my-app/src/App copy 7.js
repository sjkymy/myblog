import React, { useState, useEffect } from 'react';

function Counter() {
  const [count, setCount] = useState(0)
  const countUp = () => {
    setCount(count+1)
  }

  // // 처음에만 실행 (이거 이해 못함)
  useEffect(()=>{
    console.log('hello world');
  }, [])

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