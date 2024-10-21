import { createRoot } from 'react-dom/client' // Import createRoot
import { App } from './App'
import { BrowserRouter } from 'react-router-dom'

const container = document.getElementById('root') // Get the root element
const root = createRoot(container) // Create the root

root.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
)
