/* eslint-disable react/no-unescaped-entities */
import './FrontFace.css'
import me from '../../assets/me.webp'
import signature from '../../assets/signature.webp'
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
            {/* Desktop */}
            
            <p className='frontface__p__desktop'>I’m a Full-Stack Developer with 4 years of experience in building and maintaining web applications. Currently working remotely at Trading Economics.</p>
            <p className='frontface__p__desktop'>I have a strong foundation in both front-end and back-end development, with a passion for creating scalable, user-friendly software. I’m always learning and adapting to new technologies and frameworks.</p>
            <p className='frontface__p__desktop'>I’m proficient in various programming languages and tools, which helps me tackle diverse development challenges efficiently.</p>
            
            {/* Mobile */}
            <p className='frontface__p__mobile'>I’m a Full-Stack Developer with 4 years of experience in building and maintaining web applications. Currently working remotely at Trading Economics.</p>
            <p className='frontface__p__mobile'>I have experience in full-stack development, creating scalable, user-friendly solutions. With a passion for continuous learning, I quickly adapt to new technologies, efficiently tackling diverse development challenges</p>
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