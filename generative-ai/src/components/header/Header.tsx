import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'
import './header.css'

export const Header = () => {
  const logo = 'https://logodownload.org/wp-content/uploads/2014/07/pernambucanas-logo-2048x624.png'
  return(
    <div className='header'>
      <FontAwesomeIcon icon={faBars} className='bars'/>
      <img src={logo} alt="logo" className='logo'/>
    </div>  
  )
}