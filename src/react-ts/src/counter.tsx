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

  const ref = useRef<HTMLInputElement>(null!)
  const focusInput = () => {
    // const current = ref.current;
    // if (current != null) current.focus()

    // ref.current?.focus() // optional chaging nullじゃない時に呼び出す

    ref.current.focus() // nonnull assertion operatorを使うとnullじゃなくなる // const ref = useRef<HTMLInputElement>(null!)

  }

  return (
    <div>
      <p>value: {count}</p>
      <button onClick={increament}>+1</button>
      <button onClick={decreament}>-1</button>
      <div>
        this component was re-rendered {renderTimes.current} times
      </div>
      <input type="text" ref={ref} />
      <button onClick={focusInput} >click me</button>
    </div>
  )
}

export default Counter