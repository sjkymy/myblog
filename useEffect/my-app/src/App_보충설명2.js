import { useState, useEffect } from 'react'

export default function App() {
  const [결혼여부, set결혼여부] = useState('미혼')
  const [잔고, set잔고] = useState(1000000)
  const [결혼대상, set결혼대상] = useState('대상없음')

  const handle소개팅 = (e) => {
    set결혼여부('소개팅 중')
    set잔고(500000)
    set결혼대상('미정')
  }
  // 퀴즈 1
  // 요구사항: 소개팅 버튼을 눌렀을 때
  // 결혼여부: 소개팅 중
  // 잔고: 500,000
  // 결혼대상: 미정

  useEffect(() => {
    if (잔고 <= 500000 && 결혼대상 === '미정') {
      const 최종잔고 = 잔고 += 2000000
      set잔고(최종잔고)
      alert(잔고)
    }
  }, [잔고, 결혼대상])

  // 퀴즈 2
  // 잔고가 500000원 이하이고, 결혼대상이 미정이면 부모님이 용동 200만원을 주신다. 최종 잔고를 alert로 띄우자.

  return (
    <div>
      <button onClick={handle소개팅}>소개팅 GO</button>
      <p>{결혼여부}</p>
      <p>{잔고}</p>
      <p>{결혼대상}</p>
    </div>
  )
}
