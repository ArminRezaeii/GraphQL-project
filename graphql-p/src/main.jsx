import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { ApolloClient, ApolloProvider, InMemoryCache } from "@apollo/client"
import { createBrowserRouter, Route, RouterProvider, Routes } from 'react-router-dom'
import Character, { loader as loadercharacter } from './assets/pages/Character.jsx'
const router = createBrowserRouter([
  {
    path: "/",
    element: <App />
  },
  {
    path: "/character/:id",
    element: <Character />,
    loader: loadercharacter
  }
])
const client = new ApolloClient({
  uri: "https://rickandmortyapi.com/graphql",
  cache: new InMemoryCache()
})
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ApolloProvider client={client}>
      <RouterProvider router={router}>
        <Routes>
          <Route path="/" element={<App />} />
        </Routes>
      </RouterProvider>
    </ApolloProvider>

  </React.StrictMode>
)
