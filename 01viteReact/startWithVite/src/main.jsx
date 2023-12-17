import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'

function reactEle() {
  return (

    <div>
      <h1>Custom App | Chai</h1>
    </div>

  )
}

const anotherElement = (
  <a href="https://youtube.com" target='_blank'> Visit YT</a>
)
const anotherUser = "chai aur react"

const reactElement = React.createElement(
  'a',
  { href: 'https://google.com', target: '_blank' },
  'Click me to visit google',
  anotherUser
)


ReactDOM.createRoot(document.getElementById('root')).render(
  // <App />
  // reactEle();
  reactElement

)
