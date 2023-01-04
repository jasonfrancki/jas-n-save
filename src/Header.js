import './Header.css'

const Header = () => {
  return (
    <header className='header'>
      <div className='header-container'>
        <input placeholder='Search' type='text' />
        <button className='cart-button'>Cart</button>
      </div>
    </header>
  )
}
export default Header
