import { Notification } from 'keep-react';
import React, { useEffect, useState } from 'react';
import { io } from 'socket.io-client';
import NotificationsSound from '../../../assets/notysound.wav';

const BookingAlertNotifications = () => {
  const [showNotification, setShowNotification] = useState(true);
  const [bookingAlert, setBookingAlert] = useState(null);

  useEffect(() => {
    // Create the socket connection when the component mounts
    const socketInstance = io('http://192.168.79.175:3001');

    // Listen for the 'newOrder' event
    socketInstance.on('newOrder', (orderData) => {
      setBookingAlert(orderData);
      playNotificationSound();
    });

    // Clean up the socket connection when the component unmounts
    return () => {
      socketInstance.disconnect();
    };
  }, []);

  const onDismiss = () => {
    setBookingAlert(null);
  };

  const playNotificationSound = () => {
    const audio = new Audio(NotificationsSound);
    audio.play();
  };

  useEffect(() => {
    setShowNotification((prev) => !prev);
  }, [bookingAlert]);

  return (
    <div>
      <Notification position="bottom-right" dismiss={showNotification} onDismiss={onDismiss}>
        <Notification.Body>
          <Notification.Title className='font-semibold text-sm'>
            Got the new booking from {bookingAlert?.customerName}?
          </Notification.Title>
          <Notification.Description className='font-medium text-sm'>{bookingAlert?.msg}</Notification.Description>
        </Notification.Body>
      </Notification>
    </div>
  );
};

export default BookingAlertNotifications;
