import React from 'react';
import { useNavigate } from 'react-router-dom';
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { Forma } from './Forma';
import { useAppDispatch } from 'hooks/redux-hooks';
import { setUser } from 'store/slices/userSlice';

const SignIn = () => {
    const dispatch = useAppDispatch();
    const navigate = useNavigate();

    const handleRegister = (email: string, password: string) => {
        const auth = getAuth();
        createUserWithEmailAndPassword(auth, email, password)
            .then(({user}) => {
                dispatch(setUser({
                    email: user.email,
                    id: user.uid,
                    token: user.refreshToken,
                }));
                navigate('/');
            })
            .catch(console.error)
    }

  return (
    <Forma
    title='Register'
    handleClick={handleRegister}
/>
  )
}

export default SignIn