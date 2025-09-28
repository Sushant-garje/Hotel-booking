import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { ClerkProvider } from '@clerk/clerk-react'
import {BrowserRouter} from "react-router-dom"
import Footer from './components/Footer.jsx'
import { AppProvider } from './context/Appcontext.jsx'

// Import your Publishable Key
const PUBLISHABLE_KEY = import.meta.env.VITE_CLERK_PUBLISHABLE_KEY

if (!PUBLISHABLE_KEY) {
  throw new Error('Missing Publishable Key')

}

  
    // console.log(PUBLISHABLE_KEY);

createRoot(document.getElementById('root')).render(
  

    <ClerkProvider publishableKey={PUBLISHABLE_KEY} afterSignOutUrl="/">
      <BrowserRouter>
        <AppProvider>
          <App />
          <Footer/>
        </AppProvider>
      </BrowserRouter>
    </ClerkProvider>

)
