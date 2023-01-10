import { Grid, Card, CardContent, Box, Button, Typography } from '@mui/material'
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart'

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

              <Typography variant='h6' align='center' sx={{ mb: 1 }}>
                {item.name}
              </Typography>

              {/* ------------------ */}
              {/* Add to Cart button */}
              {/* ------------------ */}

              <Button
                // className='add-button'
                variant='contained'
                size='large'
                sx={{ width: '100%' }}
                onClick={() => addToCart(item._id)}
              >
                <AddShoppingCartIcon />
              </Button>
            </ul>
          </Box>
        </CardContent>
      </Card>
    </Grid>
  )
}
export default Item
