import { SignOutButton, useUser } from '@clerk/nextjs';
import Header from '../components/layout/Header';
import Sidebar from '../components/layout/Sidebar';

export default function Dashboard() {
  const { isSignedIn, user } = useUser();

  if (!isSignedIn) {
    return (
      <div>
        <h1>Please sign in to access the Dashboard</h1>
      </div>
    );
  }

  return (
    <>
      <Header />
      <Sidebar />
      <div className="container">
        <h1>Welcome to the Dashboard, {user?.firstName}!</h1>
        <p>This is your personalized dashboard where you can access your courses, notifications, and messages.</p>
        <SignOutButton />
      </div>
    </>
  );
}
