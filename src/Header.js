import { Link } from 'react-router-dom'
import './Header.css'

const Header = ({ query, setQuery }) => {
  return (
    <header className='header'>
      <div className='header-container'>
        <input
          placeholder='Search'
          type='text'
          value={query}
          onChange={(e) => {
            setQuery(e.target.value)
          }}
        />
        <Link to='cart'>
          <button className='cart-button'>Cart</button>
        </Link>
      </div>
    </header>
  )
}
export default Header
