/* eslint-disable react/no-unescaped-entities */
import './FrontFace.css'
import me from '../../public/assets/me.webp'
import signature from '../../public/assets/signature.webp'
import { FaNode, FaPython, FaAws, FaDocker, FaReact, FaVuejs, FaGithub, FaCss3Alt, FaLinux } from "react-icons/fa";
import { TbSql } from "react-icons/tb";
import { SiMongodb, SiRedis, SiElasticsearch, SiApachekafka, SiSocketdotio } from "react-icons/si";

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
          <div className='frontface__secondhalf__about'>
            {/* Desktop */}
            
            <p className='frontface__p__desktop'>I’m a Full-Stack Developer with 4 years of experience in building and maintaining web applications. Currently working remotely at Trading Economics.</p>
            <p className='frontface__p__desktop'>I have a strong foundation in both front-end and back-end development, with a passion for creating scalable, user-friendly software. I’m always learning and adapting to new technologies and frameworks.</p>
            <p className='frontface__p__desktop'>I’m proficient in various programming languages and tools, which helps me tackle diverse development challenges efficiently.</p>
            
            {/* Mobile */}
            <p className='frontface__p__mobile'>I’m a Full-Stack Developer with 4 years of experience in building and maintaining web applications. Currently working remotely at Trading Economics.</p>
            <p className='frontface__p__mobile'>I have experience in full-stack development, creating scalable, user-friendly solutions. With a passion for continuous learning, I quickly adapt to new technologies, efficiently tackling diverse development challenges</p>
          </div>
          <div className='frontface__secondhalf__techs_container'>
            <h2 className="frontface__secondhalf__techs_header">Developer DNA:</h2>
            <div className='frontface__secondhalf__techs'>
            <FaNode  title="NodeJs"/>
            <FaPython  title="Python"/>
            <TbSql  title="MsSql"/>
            <SiMongodb  title="MongoDB"/>
            <FaAws  title="Amazon Web Services"/>
            <FaDocker  title="Docker"/>
            <FaReact  title="React"/>
            <FaVuejs  title="VueJs"/>
            <FaGithub  title="Github"/>
            <FaCss3Alt  title="CSS & relatives"/>
            <FaLinux  title="Linux OS"/>
            <SiRedis  title="Redis"/>
            <SiElasticsearch  title="ElasticSearch"/>
            <SiApachekafka  title="Apache Kafka"/>
            <SiSocketdotio  title="Socket.io"/>
            </div>

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