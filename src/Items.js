import './Items.css'

const Items = ({ items, urlFor }) => {
  return (
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
              <div className='img-container'>
                <img src={urlFor(image.asset._ref).width(300).url()} />
              </div>
              <h3>{name}</h3>
              <h5>{location}</h5>
              <h6>{price}</h6>
            </div>
          )
        })}
    </div>
  )
}
export default Items
