import { Notification } from 'keep-react';
import React, { useEffect, useState } from 'react'
import { io } from 'socket.io-client';


const BookingAlertNotifications = () => {

    const [showNotification, setShowNotification] = useState(true);


    const [BookingAlert,setBookingAlert] = useState(null)
    
    useEffect(() => {
        // Create the socket connection when the component mounts
        const socketInstance = io('http://localhost:3001');
    
        // Listen for the 'newOrder' event
        socketInstance.on('newOrder', (orderData) => {
          setBookingAlert(orderData);
        });
    
        // Clean up the socket connection when the component unmounts
        return () => {
          socketInstance.disconnect();
        };
      }, []);

      const onDismiss = () => {
        setShowNotification(p=>!p)
        setBookingAlert(null)
    }
    
    useEffect(()=>{
          setShowNotification(p=>!p)
      },[BookingAlert])

      console.log(BookingAlert,showNotification)

  return (
    <div>
      <Notification position="top-right" dismiss={showNotification} onDismiss={onDismiss}>
        <Notification.Body>
          <Notification.Title className='font-semibold text-sm'>Got the new booking from {BookingAlert?.customerName}?</Notification.Title>
          <Notification.Description className='font-medium text-sm'>
            Default message - Lorem Ipsum is simply dummy text of the printing and typesetting industry.
          </Notification.Description>
          {/* <Notification.Container className="!mt-6 flex gap-3">
            <Button type="primary" size="sm">
              Accept
            </Button>
            <Button type="outlineGray" size="sm" onClick={onDismiss}>
              Review
            </Button>
          </Notification.Container> */}
        </Notification.Body>
      </Notification>
    </div>
  )
}

export default BookingAlertNotifications
