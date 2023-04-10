import React from 'react';
import { useNavigate } from 'react-router-dom';
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { Forma } from './Forma';
import { useAppDispatch } from 'hooks/redux-hooks';
import { setUser } from 'store/slices/userSlice';


const Login = () => {
const dispatch = useAppDispatch();
const navigate = useNavigate();

const handleLogin = (email: string, password: string) => {
    const auth = getAuth();
    signInWithEmailAndPassword(auth, email, password)
    .then(({user}) => {
        dispatch(setUser({
            email: user.email,
            id: user.uid,
            token: user.refreshToken,
        }));
        navigate('/');
    })
        .catch(() => alert('Invalid User or Password!'))
}

  return (
    <div>
            <Forma
                title='Sign In'
                handleClick={handleLogin}
            />
    </div>
  )
}

export {Login}