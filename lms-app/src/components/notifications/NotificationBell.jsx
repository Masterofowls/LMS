import { useState } from 'react';
import { FaBell } from 'react-icons/fa';
import NotificationPanel from './NotificationPanel';
import styled from 'styled-components';

const NotificationIcon = styled.div`
  position: relative;
  cursor: pointer;

  .badge {
    position: absolute;
    top: -5px;
    right: -5px;
    background-color: red;
    color: white;
    border-radius: 50%;
    padding: 4px 8px;
    font-size: 12px;
  }
`;

export default function NotificationBell() {
  const [isPanelOpen, setPanelOpen] = useState(false);
  const togglePanel = () => setPanelOpen(!isPanelOpen);

  return (
    <NotificationIcon onClick={togglePanel}>
      <FaBell size={24} />
      <span className="badge">2</span>
      {isPanelOpen && <NotificationPanel />}
    </NotificationIcon>
  );
}
