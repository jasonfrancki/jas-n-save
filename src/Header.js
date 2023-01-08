import * as React from 'react'
import { styled, alpha } from '@mui/material/styles'
import AppBar from '@mui/material/AppBar'
import Box from '@mui/material/Box'
import Toolbar from '@mui/material/Toolbar'
import IconButton from '@mui/material/IconButton'
import Typography from '@mui/material/Typography'
import InputBase from '@mui/material/InputBase'
import MenuIcon from '@mui/icons-material/Menu'
import SearchIcon from '@mui/icons-material/Search'
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart'
import LightModeIcon from '@mui/icons-material/LightMode'
import DarkModeIcon from '@mui/icons-material/DarkMode'
import { Link } from 'react-router-dom'
import './Header.css'
import { useLocation } from 'react-router-dom'
import { Autocomplete, TextField } from '@mui/material'

const Search = styled('div')(({ theme }) => ({
  position: 'relative',
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  '&:hover': {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginLeft: 0,
  width: '100%',
  [theme.breakpoints.up('sm')]: {
    marginLeft: theme.spacing(1),
    width: 'auto',
  },
}))

const SearchIconWrapper = styled('div')(({ theme }) => ({
  padding: theme.spacing(0, 1),
  height: '100%',
  position: 'absolute',
  pointerEvents: 'none',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
}))

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: 'inherit',
  '& .MuiInputBase-input': {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      width: '12ch',
      '&:focus': {
        width: '20ch',
      },
    },
  },
}))

const Header = ({ query, setQuery, dark, setDark, items }) => {
  return (
    <Box className='header-box' sx={{ flexGrow: 1 }}>
      <AppBar position='fixed'>
        <Toolbar>
          {' '}
          <IconButton
            size='large'
            edge='start'
            color='inherit'
            aria-label={dark ? 'shopping cart' : 'list items'}
            sx={{ ml: 2 }}
          >
            {useLocation().pathname === '/' ? (
              <Link style={{ fontSize: 0 }} to='cart'>
                <ShoppingCartIcon />
              </Link>
            ) : (
              <Link style={{ fontSize: 0 }} to='/'>
                <MenuIcon />
              </Link>
            )}
          </IconButton>
          <IconButton
            onClick={() => setDark(!dark)}
            size='large'
            edge='start'
            color='inherit'
            aria-label={dark ? 'shopping cart' : 'list items'}
            sx={{ ml: 2 }}
          >
            {dark ? <LightModeIcon /> : <DarkModeIcon />}
          </IconButton>
          <Typography
            variant='h6'
            noWrap
            component='div'
            sx={{ flexGrow: 1, display: { xs: 'none', sm: 'block' } }}
          >
            Jas 'n Save
          </Typography>
          {useLocation().pathname === '/' ? (
            <Autocomplete
              selectOnFocus
              clearOnBlur
              freeSolo
              disablePortal
              id='combo-box-demo'
              options={items}
              getOptionLabel={(option) => option.name}
              sx={{ width: 300 }}
              renderInput={(params) => <TextField {...params} label='Items' />}
              onInputChange={(e, v) => {
                setQuery(v)
              }}
            />
          ) : (
            ''
          )}
          {/* <Search
            value={query}
            onChange={(e) => {
              setQuery(e.target.value)
            }}
          >
            <SearchIconWrapper>
              <SearchIcon />
            </SearchIconWrapper>
            <StyledInputBase
              placeholder='Search…'
              inputProps={{ 'aria-label': 'search' }}
            />
          </Search> */}
        </Toolbar>
      </AppBar>
    </Box>
    // <header className='header'>
    //   <div className='header-container'>
    //     <input
    //       placeholder='Search'
    //       type='text'
    //       value={query}
    //       onChange={(e) => {
    //         setQuery(e.target.value)
    //       }}
    //     />
    //     <button onClick={() => setQuery('')} className='header-button'>
    //       X
    //     </button>
    //     <button
    //       className={dark ? 'dark header-button' : 'light header-button'}
    //       onClick={() => setDark(!dark)}
    //     >
    //       {dark ? <LightModeIcon /> : <DarkModeIcon />}
    //     </button>

    //     {useLocation().pathname === '/' ? (
    //       <Link to='cart'>
    //         <button className='header-button'>
    //           <ShoppingCartIcon />
    //         </button>
    //       </Link>
    //     ) : (
    //       <Link to='/'>
    //         <button className='header-button'>
    //           <MenuIcon />
    //         </button>
    //       </Link>
    //     )}
    //   </div>
    // </header>
  )
}
export default Header
