import {useState, useEffect} from 'react'

function Counter (){
  const [one, setOne] = useState(0)
  const [two, setTwo] = useState(0)
  const [three, setThree] = useState(0)

  const handleOneUp = (e) => {
    setOne(one + 1)
  }
  const handleTwoUp = (e) => {
    setTwo(two + 1)
  }
  const handleThreeUp = (e) => {
    setThree(three + 1)
  }

  useEffect(() => {
    if (one % 2) {
      alert('홀수')
    } else {
      alert('짝수')
    }
  }, [one, two])  // 콤마 옆 대괄호 안에 감시할 대상을 입력한다.
  
// 여기서 문제점은 페이지가 랜더링 될 때 초기화면부터 alert가 표시된다는 것이다.
// 이를 해결하기 위해 다음 파일을 보자

  return (
    <>
      <div>{one}</div>
      <button onClick={handleOneUp}>Up!</button>
      <div>{two}</div>
      <button onClick={handleTwoUp}>Up!</button>
      <div>{three}</div>
      <button onClick={handleThreeUp}>Up!</button>
      
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