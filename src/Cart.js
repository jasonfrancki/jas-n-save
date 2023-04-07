import { Link } from 'react-router-dom'
import './Cart.css'
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
import Item from './Item'
import { width } from '@mui/system'

const Cart = ({ results, urlFor, setCart }) => {
  const removeFromCart = (id) => {
    const newCart = results.filter((item) => item._id !== id)
    console.log(results)
    console.log(newCart)
    setCart(newCart)
  }

  return (
    <React.Fragment>
      <GlobalStyles
        styles={{ ul: { margin: 0, padding: 0, listStyle: 'none' } }}
      />
      <CssBaseline />
      <Typography sx={{ mb: 5 }} variant="h1" align="center">
        Cart
      </Typography>

      <Container maxWidth="md" component="main">
        {results.length < 1 ? (
          <Typography variant="h6" align="center">
            Cart is empty
          </Typography>
        ) : (
          <Grid container spacing={5} alignItems="flex-end">
            {results
              .sort((a, b) => {
                if (a.location.toLowerCase() < b.location.toLowerCase())
                  return -1
                if (a.location.toLowerCase() > b.location.toLowerCase())
                  return 1
              })
              .map((item) => (
                <Item
                  key={item._id}
                  urlFor={urlFor}
                  item={item}
                  removeFromCart={removeFromCart}
                />
              ))}
          </Grid>
        )}
      </Container>
      {results.length > 0 && (
        <Box textAlign="center">
          <Button
            size="large"
            sx={{ my: 5 }}
            variant="contained"
            color="error"
            onClick={() => setCart([])}
          >
            Empty
          </Button>
        </Box>
      )}
    </React.Fragment>
  )
}
export default Cart
