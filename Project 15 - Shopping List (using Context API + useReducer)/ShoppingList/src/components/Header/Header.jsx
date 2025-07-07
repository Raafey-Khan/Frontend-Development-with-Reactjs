// CSS Imports
import './Header.css'
// components imports
import HeaderImage from '../../assets/asset-1.png'

function Header() {
    return(
        <div className='header-wrapper'>
        <h1 className='header-text'>Shooping List</h1>
        <div className='header-image-wrapper'>
              <img 
        className='header_image'
        src={HeaderImage} 
        alt="" />

        </div>
      
        </div>
    )
}

export default Header;


