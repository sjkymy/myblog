import {useState, useEffect} from 'react'

function Counter (){
  const [count, setCount] = useState(0)

  const handleCountUp = (e) => {
    setCount(count + 1)
  }

  // count가 변했을 때 동작할 행동을 useEffect를 이용해 구현.
  // state값이 없다면 최소 1번만 실행된다.

// // 컴포넌트가 업데이트 될 때마다 매번 실행
// useEffect(()=>{
// 	console.log('hello world');
// })

// // 처음에만 실행
// useEffect(()=>{
// 	console.log('hello world');
// }, [])

// // 변수들의 변화가 일어날 때마다 실행
// useEffect(()=>{
// 	console.log('hello world');
// }, [변수1, 변수2...])
  
  useEffect(() => {
    if (count % 2) {
      alert('홀수')
    } else {
      alert('짝수')
    }
  }, [count])  // 콤마 옆 대괄호 안에 감시할 대상을 입력한다.
  
  return (
    <>
      <div>{count}</div>
      <button onClick={handleCountUp}>Up!</button>
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