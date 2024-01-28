import React, { useState, useEffect } from 'react';
import { Button, Notification } from 'keep-react';
import { io } from 'socket.io-client';

const Notifications = () => {
  const [showNotification, setShowNotification] = useState(false);
  const [socket, setSocket] = useState(null);  // State to hold the socket instance

  useEffect(() => {
    // Create the socket connection when the component mounts
    const socketInstance = io('http://192.168.79.175:3001');
    setSocket(socketInstance);

    // Clean up the socket connection when the component unmounts
    return () => {
      socketInstance.disconnect();
    };
  }, []); // Empty dependency array ensures this effect runs once

  const onDismiss = () => {
    setShowNotification(!showNotification);
  };

  const sendOrder = () => {
    if (socket) {
      // Check if the socket is defined before using it
      socket.emit('order', {msg:'Order message data here',customerName:'Rishi'});
      onDismiss(); // Dismiss the notification after sending the order
    } else {
      console.error('Socket is not defined');
    }
  };

  return (
    <div>
      <Notification position="bottom-right" dismiss={showNotification} onDismiss={onDismiss}>
        <Notification.Body>
          <Notification.Title className='font-semibold text-sm'>Can we store cookies?</Notification.Title>
          <Notification.Description className='font-medium text-sm'>
            Default message - Lorem Ipsum is simply dummy text of the printing and typesetting industry.
          </Notification.Description>
          <Notification.Container className="!mt-6 flex gap-3">
            <Button type="primary" size="sm" onClick={sendOrder}>
              Accept
            </Button>
            <Button type="outlineGray" size="sm" onClick={onDismiss}>
              Review
            </Button>
          </Notification.Container>
        </Notification.Body>
      </Notification>
    </div>
  );
};

export default Notifications;
