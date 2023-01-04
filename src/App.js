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

  useEffect(() => {
    getItems()
  }, [])

  const url =
    'https://zni84f99.api.sanity.io/v2021-06-07/data/query/production?query=*[_type%20==%20%22item%22]'

  const getItems = async () => {
    const response = await fetch(url)
    const data = await response.json()
    setItems(data.result)
  }

  return (
    <div className='App'>
      <Header />
      {!items ? 'Loading' : <Items items={items} urlFor={urlFor} />}
    </div>
  )
}

export default App
