import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import React,{ useState } from 'react'
import { Form, Button, Card, Alert } from 'react-bootstrap'

  export default function Signup () {

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [confirmPassword, setConfirmPassword] = useState('')

    const auth = getAuth();
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in 
        const user = userCredential.user;
        // ...
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        // ..
      });
  }