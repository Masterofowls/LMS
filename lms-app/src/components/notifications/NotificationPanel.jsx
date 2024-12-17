import { useState } from 'react';
import styled from 'styled-components';

const PanelWrapper = styled.div`
  position: absolute;
  top: 40px;
  right: 0;
  width: 300px;
  background-color: #fff;
  border-radius: 8px;
  box-shadow: 0 4px 6px rgba(0,0,0,0.1);
  max-height: 300px;
  overflow-y: auto;
  z-index: 1000;
`;

const NotificationItem = styled.div`
  padding: 20px;
  border-bottom: 1px solid #f0f0f0;
  cursor: pointer;
  background-color: ${({ isRead }) => (isRead ? '#e6f7e6' : '#fbeaea')};
  color: ${({ isRead }) => (isRead ? 'green' : 'red')};

  &:hover {
    background-color: #f0f0f0;
  }
`;

export default function NotificationPanel() {
  const [notifications, setNotifications] = useState([
    { id: 1, message: 'Welcome, User!', isRead: false },
    { id: 2, message: 'Please read the notification', isRead: false }
  ]);

  const markAsRead = (id) => {
    setNotifications((prev) =>
      prev.map((notif) =>
        notif.id === id ? { ...notif, isRead: true } : notif
      )
    );
  };

  return (
    <PanelWrapper>
      {notifications.map((notif) => (
        <NotificationItem
          key={notif.id}
          isRead={notif.isRead}
          onClick={() => markAsRead(notif.id)}
        >
          {notif.message}
        </NotificationItem>
      ))}
    </PanelWrapper>
  );
}
