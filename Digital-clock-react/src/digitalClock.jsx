import React, {useState, useEffect} from "react";

function digitalClock(){

  const [time, setTime] = useState(new Date());

  useEffect(() => {
    
  }, []);

  return(
    <div className="clock-container">
      <div className="clock">
          <span>00:00:00</span>
      </div>
    </div>
  );
}

export default digitalClock