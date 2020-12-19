import { createContext } from 'react';
import Firebase from 'firebase';

export interface IFirebase {
  firebase: Firebase.app.App | null;
}

export const FirebaseContext = createContext<IFirebase>({firebase: null});