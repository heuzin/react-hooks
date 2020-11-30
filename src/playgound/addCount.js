// import React, { useState } from 'react';
// import ReactDOM from 'react-dom';

// function App(props) {
//   const [count, setCount] = useState(props.count)
//   const [text, setText] = useState('')

//   const increment = () => {
//     setCount(count + 1)
//   }

//   const decrement = () => {
//     setCount(count -1)
//   }

//   const reset = () => {
//     setCount(props.count)
//   }

//   return (  
//     <div>
//       <p>The current {text || 'count'} is {count}</p>
//       <button onClick={increment}>+1</button>
//       <button onClick={reset}>Reset</button>
//       <button onClick={decrement}>-1</button>
//       <input value={text} onChange={(e) => setText(e.target.value)}/>
//     </div>
//   )
// }

// App.defaultProps = {
//   count: 0
// }

// ReactDOM.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>,
//   document.getElementById('root')
// );