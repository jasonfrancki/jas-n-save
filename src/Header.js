import LightModeIcon from '@mui/icons-material/LightMode'
import DarkModeIcon from '@mui/icons-material/DarkMode'
import MenuIcon from '@mui/icons-material/Menu'
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart'
import { Link } from 'react-router-dom'
import './Header.css'
import { useLocation } from 'react-router-dom'

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
        <button onClick={() => setQuery('')} className='header-button'>
          X
        </button>
        <button
          className={dark ? 'dark header-button' : 'light header-button'}
          onClick={() => setDark(!dark)}
        >
          {dark ? <LightModeIcon /> : <DarkModeIcon />}
        </button>

        {useLocation().pathname === '/' ? (
          <Link to='cart'>
            <button className='header-button'>
              <ShoppingCartIcon />
            </button>
          </Link>
        ) : (
          <Link to='/'>
            <button className='header-button'>
              <MenuIcon />
            </button>
          </Link>
        )}
      </div>
    </header>
  )
}
export default Header
