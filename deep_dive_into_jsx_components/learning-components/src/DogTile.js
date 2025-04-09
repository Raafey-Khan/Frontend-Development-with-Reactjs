
import './DogTile.css'
import DogDescription from './DogDescription';
function DogTille(props) {
    // Destructing props
     const text = "Cute Puppy"
     console.log(props.children);
     const customStyle = {fontSize: '20px', color: 'red'}
    
     const imgUrl = 'https://images.pexels.com/photos/1490908/pexels-photo-1490908.jpeg?cs=srgb&dl=pexels-svetozar-milashevich-99573-1490908.jpg&fm=jpg'
    return(
       
    <section className="puppy">
      <div className="first">
      <h3 style={customStyle}> {props.texts}</h3>
      <img src= {props.image} alt='nothing'/>
      <DogDescription description={props.description}/>
      {props.children}
      
    </div>

    
    </section>
    )
  
  }
  

  export default DogTille;