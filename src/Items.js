import * as React from 'react'
import CssBaseline from '@mui/material/CssBaseline'
import GlobalStyles from '@mui/material/GlobalStyles'
import {
  Box,
  Button,
  Card,
  CardContent,
  CardHeader,
  Grid,
  Container,
  Snackbar,
  SnackbarContent,
  IconButton,
  Typography,
  Alert,
} from '@mui/material'
import './Items.css'
import Item from './Item'

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
    <React.Fragment>
      <GlobalStyles
        styles={{ ul: { margin: 0, padding: 0, listStyle: 'none' } }}
      />
      <CssBaseline />
      <Typography sx={{ mb: 5 }} variant='h1' align='center'>
        Items
      </Typography>
      <Container maxWidth='md' component='main'>
        <Grid container spacing={5} alignItems='flex-end'>
          {results
            .sort((a, b) => {
              if (a.name.toLowerCase() < b.name.toLowerCase()) return -1
              if (a.name.toLowerCase() > b.name.toLowerCase()) return 1
            })
            .map((item) => (
              <Item urlFor={urlFor} item={item} addToCart={addToCart} />
            ))}
        </Grid>
      </Container>
      <Snackbar
        open={snackOpen}
        autoHideDuration={1500}
        onClose={handleSnackClose}
        action={action}
        anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
      >
        <Alert
          variant='filled'
          sx={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            width: '100%',
            fontSize: '1rem',
            textAlign: 'center',
          }}
          severity={
            cartMessage.toLowerCase() === 'added to cart' ? 'success' : 'error'
          }
        >
          <h3 className='cart-message' id='client-snackbar'>
            {cartMessage}
          </h3>
        </Alert>
      </Snackbar>
    </React.Fragment>
    // <div className='items'>
    //   {results.length < 1 ? (
    //     <>
    //       <div>'Loading'</div>
    //     </>
    //   ) : (
    //     results
    // .sort((a, b) => {
    //   if (a.name.toLowerCase() < b.name.toLowerCase()) return -1
    //   if (a.name.toLowerCase() > b.name.toLowerCase()) return 1
    // })
    //       .map((item) => {
    //         const { _id, image, name, location, price } = item
    //         return (
    //           <div className='item' key={_id}>
    //             <div className='img-container'>
    // <img src={urlFor(image.asset._ref).width(300).url()} />
    //             </div>
    //             <h3>{name}</h3>
    //             <h5>{location}</h5>
    //             <h6>{price}</h6>
    //             <button className='add-button' onClick={() => addToCart(_id)}>
    //               Add to cart
    //             </button>
    //           </div>
    //         )
    //       })
    //   )}
    // <Snackbar
    //   style={{ color: 'red' }}
    //   open={snackOpen}
    //   autoHideDuration={1500}
    //   onClose={handleSnackClose}
    //   action={action}
    //   anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
    // >
    //   <SnackbarContent
    //     style={{
    //       backgroundColor: 'teal',
    //     }}
    //     message={<span id='client-snackbar'>{cartMessage}</span>}
    //   ></SnackbarContent>
    // </Snackbar>
    // </div>
  )
}
export default Items
