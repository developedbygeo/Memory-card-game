import React from 'react';
import Card from '../shared/UI/Card.styled';

const MemoryCard = ({ children, imageCont }) => {
  return <Card imageCont={imageCont}>{children}</Card>;
};

export default React.memo(MemoryCard);
