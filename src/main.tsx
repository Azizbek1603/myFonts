import ReactDOM from 'react-dom/client'
import './index.scss'
import { BrowserRouter } from 'react-router-dom'
import { Suspense, lazy } from 'react'
const App = lazy(() => import("./App"))

ReactDOM.createRoot(document.getElementById('root')!).render(
  <BrowserRouter>
    <Suspense fallback = { <div>Loading...</div> }>
        <App />  
    </Suspense>
  </BrowserRouter>
)
