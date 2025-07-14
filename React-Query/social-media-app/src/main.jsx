import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App'
import './index.css'
import { BrowserRouter } from 'react-router-dom'
import {QueryClient, QueryClientProvider} from '@tanstack/react-query'

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 10000, // till what time not refectch data
      cacheTime: 300000 // what time to store that cache
      // after that it gets automaticcally delted the cache
    }
  }
});
// there is a staleTime and if you set the stale time for 2 minutes
// so you are guaranteed to not get another network request for two minutes after the first successful one.


// cacheTime is soemthing totally different.
// it basically describes how long data should be kept in the cache
// before it can be garbage collected.

// the cachetime is relavant for unused queries
// because active queries can per dinition not be garbage collected

// stale time: how much time you want to make another request
// cache time: how long the next request goes it should fetch directly from the catch
createRoot(document.getElementById('root')).render(
  
  <StrictMode>
    <QueryClientProvider client={queryClient}>

       <BrowserRouter>
     <App />
    </BrowserRouter>

    </QueryClientProvider>
   
   
  </StrictMode>,
)
