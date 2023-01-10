import { Grid, Card, CardContent, Box, Button, Typography } from '@mui/material'
import { useLocation } from 'react-router-dom'
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart'
import './item.css'

const Item = ({ item, urlFor, addToCart }) => {
  return (
    <Grid item key={item._id} xs={12} sm={6} md={4}>
      <Card>
        <CardContent>
          <Box
            sx={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'baseline',
            }}
          >
            <ul>
              {/* ---------- */}
              {/* Item Image */}
              {/* ---------- */}

              <img
                className='item-image'
                src={urlFor(item.image.asset._ref).width(300).url()}
              />

              {/* --------- */}
              {/* Item Name */}
              {/* --------- */}

              <Typography
                variant='h6'
                align='center'
                sx={{ mb: 0.5, height: '4rem' }}
              >
                {item.name}
              </Typography>

              {/* ------------- */}
              {/* Item Location */}
              {/* ------------- */}

              <Typography align='center'>{item.location}</Typography>

              {/* ------------------ */}
              {/* Add to Cart button */}
              {/* ------------------ */}

              {useLocation().pathname === '/' && (
                <Button
                  // className='add-button'
                  variant='contained'
                  size='large'
                  sx={{ width: '100%', mt: 2 }}
                  onClick={() => addToCart(item._id)}
                >
                  <AddShoppingCartIcon />
                </Button>
              )}
            </ul>
          </Box>
        </CardContent>
      </Card>
    </Grid>
  )
}
export default Item
