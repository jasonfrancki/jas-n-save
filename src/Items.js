import * as React from 'react'
import CssBaseline from '@mui/material/CssBaseline'
import GlobalStyles from '@mui/material/GlobalStyles'
import {
  Box,
  Card,
  CardContent,
  CardHeader,
  Grid,
  Container,
  Snackbar,
  SnackbarContent,
  Button,
  IconButton,
  Typography,
  Alert,
} from '@mui/material'
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
    <React.Fragment>
      <GlobalStyles
        styles={{ ul: { margin: 0, padding: 0, listStyle: 'none' } }}
      />
      <CssBaseline />
      <Container maxWidth='md' component='main'>
        <Grid container spacing={5} alignItems='flex-end'>
          {results
            .sort((a, b) => {
              if (a.name.toLowerCase() < b.name.toLowerCase()) return -1
              if (a.name.toLowerCase() > b.name.toLowerCase()) return 1
            })
            .map((item) => (
              <Grid item key={item._id} xs={12} sm={6} md={4}>
                <Card>
                  <CardHeader
                    title={item.name}
                    titleTypographyProps={{ align: 'center' }}
                    sx={{
                      backgroundColor: (theme) =>
                        theme.palette.mode === 'light'
                          ? theme.palette.grey[200]
                          : theme.palette.grey[700],
                    }}
                  />
                  <CardContent>
                    <Box
                      sx={{
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'baseline',
                      }}
                    >
                      <ul>
                        <Typography
                          component='li'
                          // variant='item-image'
                          align='center'
                        >
                          <img
                            className='item-image'
                            src={urlFor(item.image.asset._ref).width(300).url()}
                          />
                        </Typography>
                        <Typography
                          component='li'
                          // variant='subtitle1'
                          align='center'
                        >
                          <button
                            className='add-button'
                            onClick={() => addToCart(item._id)}
                          >
                            Add to cart
                          </button>
                        </Typography>
                      </ul>
                    </Box>
                  </CardContent>
                </Card>
              </Grid>
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
          sx={{ width: '100%' }}
          severity={
            cartMessage.toLowerCase() === 'added to cart'
              ? 'success'
              : 'warning'
          }
        >
          <span id='client-snackbar'>{cartMessage}</span>
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
