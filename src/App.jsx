import './App.css'
import { GoogleOAuthProvider } from '@react-oauth/google';
import GoogleLoginAuto from './Components/GoogleLoginAuthorization';
import { useState } from 'react';

function App() {
  const[name, setName] = useState('')
  const[email, setEmail] = useState('')
  const[image, setImage] = useState('')
  const[isLoggedIn, setIsLoggedIn] = useState(false)

  return (
    <>
     <GoogleOAuthProvider clientId=''>
      <form>
        <label>Login: <input type="text" /></label>
        <label>Senha: <input type="password" /></label>
        <GoogleLoginAuto
        setName={setName}
        setEmail={setEmail}
        setImage={setImage}
        setIsLoggedIn={setIsLoggedIn}
        />
        <button>Entrar</button>
      </form>
     </GoogleOAuthProvider>



 {isLoggedIn ? (
       <div>
       <h1>Suas informações</h1>
        <img src={image} alt=""/>
        <p>Seu nome: {name}</p>
        <p>Seu email: {email}</p>
       </div>
     ) : (
      ''
     )}
    </>
  )
}

export default App