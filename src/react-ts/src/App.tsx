import React from 'react';
// import Counter from "./counter"
import CounterWithReducer from "./counterWithReducer.tsx"


interface AppProps {
  message?: string
}

const App: React.FunctionComponent<AppProps> = ({ message }) => {
  return (
    <div>
      {/* <Counter /> */}
      <CounterWithReducer />
    </div>
  )
};

App.defaultProps = {
  message: "Hello defaultProps!!"
}

export default App;
