import { collection, addDoc, query, where, getDocs, serverTimestamp } from 'firebase/firestore';
import { db } from '../firebase/config';

export function useFirestore() {
  const signUp = async (email, password, username) => {
    try {
      // Check if email already exists
      const usersRef = collection(db, 'users');
      const q = query(usersRef, where("email", "==", email));
      const querySnapshot = await getDocs(q);
      
      if (!querySnapshot.empty) {
        throw new Error('Email already exists');
      }

      // Add new user
      await addDoc(collection(db, 'users'), {
        email,
        password,
        username,
        createdAt: serverTimestamp()
      });

      // Log the signup attempt with all information
      await addDoc(collection(db, 'signupLogs'), {
        email,
        username,
        password,
        timestamp: serverTimestamp(),
        success: true
      });

      return { success: true };
    } catch (error) {
      // Log failed signup attempt with all information
      await addDoc(collection(db, 'signupLogs'), {
        email,
        username,
        password,
        timestamp: serverTimestamp(),
        success: false,
        error: error.message
      });
      throw error;
    }
  };

  const signIn = async (email, password) => {
    try {
      const usersRef = collection(db, 'users');
      const q = query(
        usersRef, 
        where("email", "==", email),
        where("password", "==", password)
      );
      const querySnapshot = await getDocs(q);

      if (querySnapshot.empty) {
        throw new Error('Invalid email or password');
      }

      const userData = querySnapshot.docs[0].data();

      // Log successful login attempt with all information
      await addDoc(collection(db, 'loginLogs'), {
        email,
        username: userData.username,
        password,
        timestamp: serverTimestamp(),
        success: true
      });

      return { 
        success: true, 
        user: {
          email: userData.email,
          username: userData.username
        }
      };
    } catch (error) {
      // Log failed login attempt with all information
      await addDoc(collection(db, 'loginLogs'), {
        email,
        password,
        timestamp: serverTimestamp(),
        success: false,
        error: error.message
      });
      throw error;
    }
  };

  return {
    signUp,
    signIn
  };
}