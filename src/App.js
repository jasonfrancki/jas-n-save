import { useState, useEffect } from 'react'
import imageUrlBuilder from '@sanity/image-url'
import './App.css'

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
      {!items ? (
        'Loading'
      ) : (
        <div className='items'>
          {items
            .sort((a, b) => {
              if (a.location.toLowerCase() < b.location.toLowerCase()) return -1
              if (a.location.toLowerCase() > b.location.toLowerCase()) return 1
            })
            .map((item) => {
              const { _id, image, name, location, price } = item
              return (
                <div className='item' key={_id}>
                  <img src={urlFor(image.asset._ref).width(300).url()} />
                  <h3>{name}</h3>
                  <h5>{location}</h5>
                  <h6>{price}</h6>
                </div>
              )
            })}
        </div>
      )}
    </div>
  )
}

export default App
