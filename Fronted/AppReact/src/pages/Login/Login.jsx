const PUBLISHABLE_KEY = import.meta.env.VITE_CLERK_PUBLISHABLE_KEY
import { SignedIn } from "@clerk/clerk-react";


function Login() {
    
    // <ClerkProvider publishableKey={PUBLISHABLE_KEY} afterSignOutUrl="/">
    {/* <App /> */}
    <SignedIn/>
    {/* <UserButton />
  </SignedIn> */}
//   </ClerkProvider>
}
export default Login
