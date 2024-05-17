/* eslint-disable react/no-unescaped-entities */
import './FrontFace.css'
import me from '../../assets/me.jpg'
import signature from '../../assets/signature.png'
const FrontFace = () => {
  return (
    <div className="frontface__div">
      <div className='frontface__banner frontface__banner__cover'>
        <div>
          <img src={me} alt="This is me, Fabio Guerreiro!" className="frontface__img"/>
        </div>
      </div>
      <div className='frontface__content'>
        <div className='frontface__firsthalf'>
          <div>
            <p className='frontface__0'>Fábio Guerreiro</p>
            <p className='frontface__1'>Full-Stack Developer @ Trading Economics</p>
            <p className='frontface__3'>Sesimbra, Portugal</p>

          </div>
        </div>
        <div className='frontface__secondhalf'>
          <div  className='frontface__secondhalf__about'>
            <p className='frontface__p__mobile'>I'm a Full-Stack Developer with 3 years of experience building and maintaining web applications.</p>
            <p className='frontface__p__desktop'>Currently working at Trading Economics as remote Developer.</p>
            <p className='frontface__p__mobile'>I possess a strong foundation in both front-end and back-end development, with a passion for crafting user-friendly and scalable software solutions.</p>
          </div>
          <div>
            <p></p>
          </div>
        </div>
      </div>
      <div className='frontface__footer'>
        <p>X: </p> <img src={signature} alt="Signature" className="frontface__signature"/>
      </div>
    </div>
  );
};
export default FrontFace;