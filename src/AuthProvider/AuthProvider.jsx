import React, { createContext } from 'react';
import { getAuth } from "firebase/auth";
import app from '../firebase/firebase.config';

const auth = getAuth(app)
export const AuthContext = createContext(null)
const AuthProvider = () => {
    return (
        <div>
            
        </div>
    );
};

export default AuthProvider;