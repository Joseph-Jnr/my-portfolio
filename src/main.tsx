import React from 'react'
import ReactDOM from 'react-dom/client'
import '@/assets/css/index.css'
import { router } from './routes'
import { RouterProvider } from 'react-router-dom'
import { MantineProvider } from '@mantine/core'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <MantineProvider withGlobalStyles withNormalizeCSS>
      <RouterProvider router={router} />
    </MantineProvider>
  </React.StrictMode>
)
