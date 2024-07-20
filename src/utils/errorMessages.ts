const firebaseErrorMessages: { [key: string]: string } = {
    "auth/invalid-email": "The email address is badly formatted.",
    "auth/user-not-found": "No user found with this email.",
    "auth/wrong-password": "The password is incorrect.",
    "auth/email-already-in-use": "The email address is already in use by another account.",
    "auth/weak-password": "The password must be 6 characters long or more.",
  };
  
  export function getFirebaseErrorMessage(code: string): string {
    return firebaseErrorMessages[code] || "An unknown error occurred. Please try again.";
  }
  