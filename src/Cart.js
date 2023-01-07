import { Link } from 'react-router-dom'
import './Cart.css'

const Cart = ({ results, urlFor, setCart }) => {
  return (
    <div className='cart'>
      <h1>Cart</h1>
      <button onClick={() => setCart([])}>Empty</button>
      {/*  */}
      {/*  */}
      {/*  */}
      <div className='items cart-items'>
        {results.length < 1 ? (
          <>
            <div>Cart is empty</div>
          </>
        ) : (
          results
            .sort((a, b) => {
              if (a.location.toLowerCase() < b.location.toLowerCase()) return -1
              if (a.location.toLowerCase() > b.location.toLowerCase()) return 1
            })
            .map((item) => {
              const { _id, image, name, location, price } = item
              return (
                <div className='item' key={_id}>
                  <div className='img-container'>
                    <img src={urlFor(image.asset._ref).width(300).url()} />
                  </div>
                  <h3>{name}</h3>
                  <h5>{location}</h5>
                  <h6>{price}</h6>
                </div>
              )
            })
        )}
      </div>
      {/*  */}
      {/*  */}
      {/*  */}
      <Link className='home-link' to='/'>
        Home
      </Link>
    </div>
  )
}
export default Cart
