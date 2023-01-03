import { useState, useEffect } from 'react'
import './App.css'

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
          {items.map((item) => (
            <h3>{item.name}</h3>
          ))}
        </div>
      )}
    </div>
  )
}

export default App
