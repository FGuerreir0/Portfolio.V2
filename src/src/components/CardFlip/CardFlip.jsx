import { useState } from "react";
import { motion } from "framer-motion";
import Tilt from "react-parallax-tilt";
import FrontFace from "../FrontFace/FrontFace"; 
import "./CardFlip.css";

const CardFlip = () => {
  const [isFlipped, setIsFlipped] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false);

  function handleFlip() {
    if (!isAnimating) {
      setIsFlipped(!isFlipped);
      setIsAnimating(true);
    }
  }
  return (
    <div className="app__main__div">
    <div className="app_mobile_action">
    <p>Click me!</p>
    </div>
    <Tilt glareEnable={true} glareMaxOpacity={0.5} glareColor="#fff" glarePosition="bottom" glareBorderRadius="20px" tiltMaxAngleX={2} tiltMaxAngleY={2}>
    <div className="card-div" >
      <div
        className="flip-card"
        data-tilt
        onClick={handleFlip}
      >
        <motion.div
          className="flip-card-inner"
          initial={false}
          animate={{ rotateY: isFlipped ? 180 : 360 }}
          transition={{ duration: 0.4, animationDirection: "normal" }}
          onAnimationComplete={() => setIsAnimating(false)}
        >
          <div className="flip-card-front">
            <FrontFace />
          </div>

          <div
            className="flip-card-back"
          >
            
          </div>
        </motion.div>
      </div>
    </div>
    </Tilt>
    </div>
  );
};

export default CardFlip;