
import './DogTile.css'
import DogDescription from './DogDescription';
function DogTille() {
     const text = "Cute Puppy"
     const customStyle = {fontSize: '20px', color: 'red'}
     const imgUrl = 'https://images.pexels.com/photos/1490908/pexels-photo-1490908.jpeg?cs=srgb&dl=pexels-svetozar-milashevich-99573-1490908.jpg&fm=jpg'
    return(
       
    <section className="puppy">
      <div className="first">
      <h3 style={customStyle}> {text}</h3>
      <img src= {imgUrl} alt='nothing'/>
      <DogDescription/>
      
    </div>

    
    </section>
    )
  
  }
  

  export default DogTille;