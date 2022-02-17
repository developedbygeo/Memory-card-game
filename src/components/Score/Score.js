import React from 'react';
import Card from '../shared/UI/Card.styled';

const Score = ({ type, score, BgClr }) => {
  return (
    <Card BgClr={BgClr}>
      <h2>
        {type} Score: <span>0</span>
      </h2>
    </Card>
  );
};

export default React.memo(Score);
