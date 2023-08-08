export interface errorMessagesType {
  "auth/email-already-exists": string;
  "auth/wrong-password": string;
  "auth/user-not-found": string;
  "auth/email-already-in-use": string;
}

const errorMessages: errorMessagesType = {
  "auth/email-already-exists":
    "The provided email is already in use by an existing user. Each user must have a unique email.",
  "auth/wrong-password": "The given password doesn't match the user provided.",
  "auth/user-not-found":
    "There is no existing user record corresponding to the provided identifier.",
  "auth/email-already-in-use":
    "The provided email is already in use by an existing user. Each user must have a unique email.",
};

export default errorMessages;
