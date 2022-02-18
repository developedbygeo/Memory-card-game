import React from 'react';
import StyledNotification from './Notification.styled';

const Notification = ({ data }) => {
  const { status, title, message } = data;
  return (
    <StyledNotification status={status}>
      <h2>{title}</h2>
      <p>{message}</p>
    </StyledNotification>
  );
};

export default React.memo(Notification);
