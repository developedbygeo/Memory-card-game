import React, { useEffect, useState } from 'react';

import Card from '../shared/UI/Card.styled';

const Score = ({ type, score, BgClr }) => {
  const [animationActive, setAnimationActive] = useState(false);

  useEffect(() => {
    setAnimationActive(true);
    const timer = setTimeout(() => {
      setAnimationActive(false);
    }, 300);
    return () => clearTimeout(timer);
  }, [score]);

  const animationClass = animationActive ? 'bump' : '';

  return (
    <Card BgClr={BgClr}>
      <h2 className={animationClass}>
        {type} Score: <span>{score}</span>
      </h2>
    </Card>
  );
};

export default React.memo(Score);
