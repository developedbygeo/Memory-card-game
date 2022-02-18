import React from 'react';
import StyledNotification from './Notification.styled';

const Notification = ({ status, title, message }) => {
  return (
    <StyledNotification status={status}>
      <h2>{title}</h2>
      <p>{message}</p>
    </StyledNotification>
  );
};

export default React.memo(Notification);
