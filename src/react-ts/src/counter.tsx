import React, { useEffect, useState, useRef } from "react"

const Counter: React.FC<{}> = () => {
  const initialValue: any = 0
  const [count, setCount] = useState<number>(initialValue)

  const increament = () => {
    // setCount(count + 1)
    setCount(prevstate => prevstate + 1)
  }

  const decreament = () => {
    // setCount(count - 1)
    setCount(prevstate => prevstate - 1)
  }

  const renderTimes = useRef<number>(0)

  useEffect(() => {
    renderTimes.current = renderTimes.current + 1
  })

  return (
    <div>
      <p>value: {count}</p>
      <button onClick={increament}>+1</button>
      <button onClick={decreament}>-1</button>
      <div>
        this component was re-rendered {renderTimes.current} times
      </div>
    </div>
  )
}

export default Counter