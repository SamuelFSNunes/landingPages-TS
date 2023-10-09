import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faComments, faPenToSquare, faTrashCan } from '@fortawesome/free-solid-svg-icons'
import './chatbox.css'

export const Chatbox = ({commentCount}: {commentCount:number}) => {

  return(
    <div className='chatbox'>
      <FontAwesomeIcon icon={faComments} className='icons' />
      Conversa {commentCount}
      <FontAwesomeIcon icon={faPenToSquare}  className='icons'/>
      <FontAwesomeIcon icon={faTrashCan} className='icons'/>
    </div>
  )
}