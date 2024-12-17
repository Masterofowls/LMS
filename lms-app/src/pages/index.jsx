import { SignInButton, SignOutButton, useUser } from '@clerk/nextjs';
import Header from '../components/layout/Header';
import Sidebar from '../components/layout/Sidebar';
import Footer from '../components/layout/Footer';
import NotificationBell from '../components/notifications/NotificationBell';
import GroupChat from '../components/chat/GroupChat';

export default function Home() {
  const { isSignedIn, user } = useUser();

  if (!isSignedIn) {
    return (
      <div>
        <h1>Welcome to the LMS</h1>
        <p>Please sign in to access the interface.</p>
        <SignInButton />
      </div>
    );
  }

  return (
    <>
      <Header />
      <div style={{ display: 'flex' }}>
        <Sidebar />
        <div style={{ marginLeft: '250px', padding: '20px', width: '100%' }}>
          <h1>Welcome, {user?.firstName}!</h1>
          <NotificationBell />
          <h2>Your Courses</h2>
          <p>Course list will be displayed here.</p>
          <GroupChat username={user?.firstName} />
          <SignOutButton />
        </div>
      </div>
      <Footer />
    </>
  );
}
