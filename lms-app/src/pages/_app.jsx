import { ClerkProvider } from '@clerk/nextjs';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/global.css';

function MyApp({ Component, pageProps }) {
  return (
    <ClerkProvider publishableKey={process.env.NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY}>
      <Component {...pageProps} />
    </ClerkProvider>
  );
}

export default MyApp;