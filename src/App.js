import { useState, useEffect } from 'react'
import imageUrlBuilder from '@sanity/image-url'
import Items from './Items'
import './App.css'
import Header from './Header'

const builder = imageUrlBuilder({
  projectId: 'zni84f99',
  dataset: 'production',
  apiVersion: '2021-06-07',
  // apiVersion: '2021-03-25',
})

function urlFor(source) {
  return builder.image(source)
}

function App() {
  const [items, setItems] = useState([])
  const [query, setQuery] = useState('')
  const [results, setResults] = useState([])
  const [cart, setCart] = useState([])

  const addToCart = (id) => {
    const newCartItem = results.filter((item) => item._id === id)
    const cartCheck = cart.some((cartItem) => cartItem._id === id)
    console.log(cartCheck)

    if (cartCheck) {
      alert('already in cart')
    } else {
      setCart([...cart, ...newCartItem])
      alert('added to cart')
    }
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

  return (
    <div className='App'>
      <Header query={query} setQuery={setQuery} />
      {!items ? (
        'Loading'
      ) : (
        <Items results={results} urlFor={urlFor} addToCart={addToCart} />
      )}
    </div>
  )
}

export default App
