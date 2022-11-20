function Resume({이름, 취미, 자기소개}){
  let like = 0

  function clickLike(){
    like += 1
    console.log(like)
  }

  return (
    <section>
      <h2>{이름}</h2>
      <p>{취미}</p>
      <p>{자기소개}</p>
      {/*여기는 왜 증가하지 않는가
      변수가 변경되어도 랜더링이 다시 일어나지 않기 때문이다.*/}
      <button onClick={clickLike}>{like}</button>
    </section>
  )
}

function App() {
  return (
    <main>
      <Resume 
        이름="kim" 
        취미="코딩" 
        자기소개="안녕하세요. kim입니다."
      />
    </main>
  );
}

export default App;