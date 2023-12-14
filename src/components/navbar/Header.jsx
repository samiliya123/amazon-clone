import React from 'react'
import './header.css'
import { Link } from 'react-router-dom'
import SearchIcon from '@mui/icons-material/Search';
import ShoppingBasketIcon from '@mui/icons-material/ShoppingBasket';
import { useStateValue } from '../../StateProvider';


const Header = () => {
  const [{ basket }] = useStateValue()
  console.log(basket);
  return (
     <div className="header">
        <Link to='/'>
          <img src="https://logo.com/image-cdn/images/kts928pd/production/b62759b3862dcd675eed3483b4c4b17e6f19ca85-731x731.png?w=640&q=72" alt="" className="header__logo" /> 
        </Link>
        <div className="header__search">
          <input type="text"  className="header__searchInput" />
          <SearchIcon className='header__searchIcon'/>
        </div>

        <div className="header__nav">
          <Link to='/login' className="header__link">
            <div className="header__option">
              < span className='header__optionLineOne'>Hello Emma</ span>
              < span  className='header__optionLineTwo'>Sign In</ span>
            </div>
          </Link>

          <Link to='/' className="header__link">
            <div className="header__option">
              < span className='header__optionLineOne'>Returns</ span>
              < span className='header__optionLineTwo'>& Orders</ span>
            </div>
          </Link>

          <Link to='/' className="header__link">
            <div className="header__option">
              < span className='header__optionLineOne'>Your</ span>
              < span className='header__optionLineTwo'>Prime</ span>
            </div>
          </Link>

          <Link to='/checkout' className='header__optionLink'>
            <div className="header__optionBasket">
              <ShoppingBasketIcon />  
              <span className='header__optionLineTwo header__basketCount'>{basket?.length}</span>
            </div>
          </Link>
        </div>
     </div>
  )
}

export default Header
