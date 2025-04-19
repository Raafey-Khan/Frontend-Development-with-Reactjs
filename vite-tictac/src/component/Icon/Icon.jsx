import {FaTimes, FaPen, FaRegCircle} from 'react-icons/fa'

function Icon({name}) {
      if(name == 'circle') {
        return <FaRegCircle/>
      } else if(name == 'cross'){
        return <FaTimes />
      } 
}


export default Icon;