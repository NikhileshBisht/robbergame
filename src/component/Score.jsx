import React, { useState, useEffect } from 'react';

const ScoreTimer = ({ reset }) => {
  const [score, setScore] = useState(0);

  useEffect(() => {
    setScore(0);  
    const interval = setInterval(() => {
      setScore(score => score + 1);
    }, 1000);

    return () => clearInterval(interval);
  }, []);  

  useEffect(() => {
    if (reset==true) {
      setScore(0);  
    }
  }, [reset]);  

  return (
    <div>
      <h1 className='scoore'>Score: {score}</h1>
    </div>
  );
};

export default ScoreTimer;
