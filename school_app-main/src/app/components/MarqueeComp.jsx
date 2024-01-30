import React from 'react';
import Marquee from 'react-fast-marquee';

const MarqueeComp = ({text, speed})=> {
  
    
    

    return (
      <div className="marquee-container">
        
        {/* <div className="marquee" style={style}> */}
            <Marquee pauseOnHover={true} gradient={false} speed={speed}>
          {text}
          </Marquee>
        {/* </div> */}
      </div>
    );
  }


export default MarqueeComp;