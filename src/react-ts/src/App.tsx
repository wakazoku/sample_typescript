import React from 'react';
import Counter from "./counter"


interface AppProps {
  message?: string
}

const App: React.FunctionComponent<AppProps> = ({ message }) => {
  return (
    <div>
      <Counter />
    </div>
  )
};

App.defaultProps = {
  message: "Hello defaultProps!!"
}

export default App;