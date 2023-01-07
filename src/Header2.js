import LightModeIcon from '@mui/icons-material/LightMode'
import DarkModeIcon from '@mui/icons-material/DarkMode'
import { Link } from 'react-router-dom'
import './Header.css'

const Header = ({ query, setQuery, dark, setDark }) => {
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
        <button
          className={dark ? 'dark header-button' : 'light header-button'}
          onClick={() => setDark(!dark)}
        >
          {dark ? <LightModeIcon /> : <DarkModeIcon />}
        </button>
        <Link to='cart'>
          <button className='cart-button header-button'>Cart</button>
        </Link>
      </div>
    </header>
  )
}
export default Header
