import React from 'react';
import Card from '../shared/UI/Card.styled';

const MemoryCard = ({ children, imageCont, onDogSelection }) => {
  return (
    <Card draggable="false" onClick={onDogSelection} imageCont={imageCont}>
      {children}
    </Card>
  );
};

export default React.memo(MemoryCard);
