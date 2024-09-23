import { SignedIn, SignedOut, useAuth } from '@clerk/clerk-react';
import React, { useEffect } from 'react';
import { Navigate } from 'react-router-dom';

const ProtectedRoute = ({ children }) => {
  const { isLoaded, isSignedIn } = useAuth();

  useEffect(() => {
    if (isLoaded && !isSignedIn) {
      alert('Please login first');  // Show alert when the user is not signed in
    }
  }, [isLoaded, isSignedIn]);

  if (!isLoaded) {
    return <div>Loading...</div>;  // Add a loading state to ensure the component is only rendered once Clerk is loaded
  }

  return (
    <>
      <SignedIn>
        {children}
      </SignedIn>
      <SignedOut>
        <Navigate to="/login" />
      </SignedOut>
    </>
  );
};

export default ProtectedRoute;
