import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Homepage from './pages/Home'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
    <Homepage />
  </StrictMode>,
)
  //need to implment browser router to seperate pages 

  /*
https://stackoverflow.com/questions/68975417/how-to-route-users-to-separate-standalone-react-apps-using-expressjs
  */