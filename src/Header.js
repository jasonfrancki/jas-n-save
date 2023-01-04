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
        <button className='cart-button'>Cart</button>
      </div>
    </header>
  )
}
export default Header
