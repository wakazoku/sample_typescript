import React, { useState } from "react"

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

  return (
    <div>
      <p>value: {count}</p>
      <button onClick={increament}>+1</button>
      <button onClick={decreament}>-1</button>
    </div>
  )
}

export default Counter