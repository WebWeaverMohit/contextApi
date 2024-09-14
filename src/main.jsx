import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import Datacontext from './context/Datacontext.jsx'
import PostContext from './context/Postcontext.jsx'

createRoot(document.getElementById('root')).render(
  <Datacontext>
    <PostContext>
      <App />
    </PostContext>
  </Datacontext>

)
