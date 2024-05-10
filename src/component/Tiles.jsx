import React, { useState, useEffect } from 'react';
import './layout.css';

const Tiles = ({ setReset}) => {
  const [isKeyPressed, setIsKeyPressed] = useState(false);

  useEffect(() => {
    const handleKeyPress = (event) => {
      if (event.key === ' ') {  
        setIsKeyPressed(true);
        setTimeout(() => {
          setIsKeyPressed(false);
        }, 350);  
      } 
    };
   /* function handlescore()  {
      setReset(true);
      console.log(reset);
    }*/
    const dino = document.getElementById("dino");
    const cactus = document.getElementById("cactus");
    
    let isAlive = setInterval(function () {
      let dinoTop = parseInt(window.getComputedStyle(dino).getPropertyValue("top"));
      let cactusLeft = parseInt(window.getComputedStyle(cactus).getPropertyValue("left"));
    
      if (cactusLeft < 50 && cactusLeft > 0 && dinoTop >= 140) {
         
        setReset(true);
        alert("Game Over!");
      }
    }, 10);
    
    document.addEventListener('keydown', handleKeyPress);

    return () => {
      document.removeEventListener('keydown', handleKeyPress);
    };
  }, [ ]);


  return (
    
    <div className='mainbox'> 
      <div id='dino' className={isKeyPressed ? 'jump' : ''}></div>
      <div id='cactus'></div>
    </div>
  );
}

export default Tiles;
