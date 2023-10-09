import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Chatbox } from './chatbox/Chatbox'
import './aside.css'
import { faUser } from '@fortawesome/free-solid-svg-icons'

export const Aside = () => {
  return(
    <div className="aside">
      <div className='elements'>
        <p className='mini-titles'>Hoje</p>
        <Chatbox commentCount={1}/>
        <Chatbox commentCount={2}/>
      </div>
      <div className='user-config'>
        <FontAwesomeIcon icon={faUser} style={{color: "#000000",}} className='user-icon'/>
        <p>User</p>
        <button type="button">Clear</button>
      </div>
    </div>
  )
}