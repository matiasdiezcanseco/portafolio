import App from './App'
import React from 'react'
import ReactDOM from 'react-dom'
import { RecoilRoot } from 'recoil'
import './main.scss'

ReactDOM.render(
  <React.StrictMode>
    <RecoilRoot>
      <App />
    </RecoilRoot>
  </React.StrictMode>,
  document.getElementById('root')
)
