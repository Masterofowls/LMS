import { useState, useEffect } from 'react';
import { ref, push, onValue } from 'firebase/database';
import { database } from '../../firebase'; // Import Firebase client instance
import styled from 'styled-components';

const ChatContainer = styled.div`
  width: 100%;
  height: 400px;
  border: 1px solid #ccc;
  border-radius: 8px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  overflow: hidden;
`;

const Messages = styled.div`
  flex-grow: 1;
  padding: 20px;
  overflow-y: auto;
`;

const Message = styled.div`
  padding: 10px;
  background-color: ${({ isAdmin }) => (isAdmin ? '#f4f6f8' : '#e6f7e6')};
  margin-bottom: 10px;
  border-radius: 4px;
  font-size: 14px;
`;

const Form = styled.form`
  display: flex;
  padding: 10px;
`;

const Input = styled.input`
  flex-grow: 1;
  padding: 10px;
  border-radius: 4px;
  border: 1px solid #ccc;
`;

const Button = styled.button`
  padding: 10px 20px;
  background-color: #1d3557;
  color: #fff;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  margin-left: 10px;

  &:hover {
    background-color: #457b9d;
  }
`;

export default function GroupChat({ username }) {
  const [messages, setMessages] = useState([]);
  const [message, setMessage] = useState('');

  // Listen for real-time updates from Firebase
  useEffect(() => {
    const messagesRef = ref(database, 'group-chat/messages');
    onValue(messagesRef, (snapshot) => {
      const data = snapshot.val();
      if (data) {
        const formattedMessages = Object.entries(data).map(([id, msg]) => ({
          id,
          ...msg
        }));
        setMessages(formattedMessages);
      }
    });
  }, []);

  // Send message to Firebase
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!message) return;

    const newMessage = {
      user: username || 'Guest',
      message,
      timestamp: Date.now()
    };

    const messagesRef = ref(database, 'group-chat/messages');
    push(messagesRef, newMessage);
    setMessage('');
  };

  return (
    <ChatContainer>
      <Messages>
        {messages.map((msg) => (
          <Message key={msg.id} isAdmin={msg.user === 'Admin'}>
            <strong>{msg.user}: </strong> {msg.message}
          </Message>
        ))}
      </Messages>
      <Form onSubmit={handleSubmit}>
        <Input
          type="text"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          placeholder="Type your message..."
        />
        <Button type="submit">Send</Button>
      </Form>
    </ChatContainer>
  );
}
