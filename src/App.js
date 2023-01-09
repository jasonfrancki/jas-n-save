import { ThemeProvider, createTheme } from '@mui/material/styles'
import GlobalStyles from '@mui/material/GlobalStyles'
import CssBaseline from '@mui/material/CssBaseline'
import { useState, useEffect } from 'react'
import imageUrlBuilder from '@sanity/image-url'
import Items from './Items'
import './App.css'
import Header from './Header'

import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Cart from './Cart'

const builder = imageUrlBuilder({
  projectId: 'zni84f99',
  dataset: 'production',
  apiVersion: '2021-06-07',
  // apiVersion: '2021-03-25',
})

function urlFor(source) {
  return builder.image(source)
}

const cartFromLocalStorage = JSON.parse(localStorage.getItem('cart') || '[]')

function App() {
  const [items, setItems] = useState([])
  const [query, setQuery] = useState('')
  const [results, setResults] = useState([])
  const [cart, setCart] = useState(cartFromLocalStorage)
  const [snackOpen, setSnackOpen] = useState(false)
  const [cartMessage, setCartMessage] = useState('')

  // Get and Save cart state to local storage

  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(cart))
  }, [cart])

  const addToCart = (id) => {
    const newCartItem = results.filter((item) => item._id === id)
    const cartCheck = cart.some((cartItem) => cartItem._id === id)
    setSnackOpen(true)
    if (cartCheck) {
      setCartMessage('already in cart')
    } else {
      setCart([...cart, ...newCartItem])
      setCartMessage('added to cart')
    }
  }

  const handleSnackClose = (event, reason) => {
    if (reason === 'clickaway') {
      return
    }
    setSnackOpen(false)
  }

  useEffect(() => {
    getItems()
  }, [])

  useEffect(
    () => {
      const searchResults = items.filter((item) =>
        item.name.toLowerCase().includes(query.toLowerCase())
      )
      setResults(searchResults)
    },
    // }
    [query]
  )

  const url =
    'https://zni84f99.api.sanity.io/v2021-06-07/data/query/production?query=*[_type%20==%20%22item%22]'

  const getItems = async () => {
    const response = await fetch(url)
    const data = await response.json()
    setItems(data.result)
    setResults(data.result)
  }

  let darkCheck = window.matchMedia('(prefers-color-scheme: dark)').matches
  const [dark, setDark] = useState(darkCheck)

  const darkTheme = createTheme({
    palette: {
      // mode: 'dark'
      mode: dark ? 'dark' : 'light',
    },
  })

  return (
    <ThemeProvider theme={darkTheme}>
      <GlobalStyles />
      <CssBaseline />
      <BrowserRouter>
        <div className='App'>
          <Header
            query={query}
            setQuery={setQuery}
            dark={dark}
            setDark={setDark}
            items={items}
            cart={cart}
          />

          <Routes>
            <Route
              path='/'
              element={
                <Items
                  results={results}
                  urlFor={urlFor}
                  addToCart={addToCart}
                  handleSnackClose={handleSnackClose}
                  snackOpen={snackOpen}
                  cartMessage={cartMessage}
                  item={items}
                />
              }
            />
            <Route
              path='cart'
              element={
                <Cart results={cart} setCart={setCart} urlFor={urlFor} />
              }
            />
          </Routes>
        </div>
      </BrowserRouter>
    </ThemeProvider>
  )
}

export default App
