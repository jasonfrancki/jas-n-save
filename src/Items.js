import { Snackbar, SnackbarContent, Button, IconButton } from '@mui/material'
import './Items.css'

const Items = ({
  results,
  urlFor,
  addToCart,
  handleSnackClose,
  snackOpen,
  cartMessage,
}) => {
  const action = (
    <>
      <IconButton
        size='small'
        aria-label='close'
        color='inherit'
        onClick={handleSnackClose}
      >
        X
      </IconButton>
    </>
  )

  return (
    <div className='items'>
      {results.length < 1 ? (
        <>
          <div>'Loading'</div>
        </>
      ) : (
        results
          .sort((a, b) => {
            if (a.name.toLowerCase() < b.name.toLowerCase()) return -1
            if (a.name.toLowerCase() > b.name.toLowerCase()) return 1
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
                <button className='add-button' onClick={() => addToCart(_id)}>
                  Add to cart
                </button>
              </div>
            )
          })
      )}
      <Snackbar
        style={{ color: 'red' }}
        open={snackOpen}
        autoHideDuration={1500}
        onClose={handleSnackClose}
        action={action}
        anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
      >
        <SnackbarContent
          style={{
            backgroundColor: 'teal',
          }}
          message={<span id='client-snackbar'>{cartMessage}</span>}
        ></SnackbarContent>
      </Snackbar>
    </div>
  )
}
export default Items
