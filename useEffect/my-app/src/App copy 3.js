import {useState, useEffect} from 'react'

function Counter (){
  const [count, setCount] = useState(0)
  let test = 0

  const handleCountUp = (e) => {
    setCount(count + 1)
  }

  const handleTestCountUp = (e) => {
    test += 1
  }

  // count가 변했을 때 동작할 행동을 useEffect를 이용해 구현.
  // state값이 없다면 최소 1번만 실행된다.
  // 랜더링되는 모든 것을 감시할 수 있다. 감시하는 대상이 일반 변수라면 기능하지 않는다. useState처럼 랜더링 시키는 것들만 감시한다.

  useEffect(() => {
    if (count % 2) {
      alert('홀수')
    } else {
      alert('짝수')
    }
  })  // 콤마 옆 대괄호 안에 감시할 대상을 입력한다.
  
  return (
    <>
      <div>{count}</div>
      <button onClick={handleCountUp}>Up!</button>
      <div>{test}</div>
      <button onClick={handleTestCountUp}>Up!</button>
    </>
  )
}

function App() {
  return (
    <div className="App">
      <Counter/>
    </div>
  );
}

export default App;