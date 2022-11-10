import React from 'react'
import { USER_POST } from '../../api';
import userForm from '../../Hooks/userForm';
import Button from '../Form/Button';
import Input from '../Form/Input';
import {UserContext} from '../../UserContext'

const LoginCreate = () => {
  const username = userForm();
  const email = userForm('email');
  const password = userForm();

  const {userLogin} = React.useContext(UserContext)

  async function handleSubmit(event) {
    event.preventDefault();
    const { url, options } = USER_POST({
      username: username.value,
      email: email.value,
      password: password.value,
    });
    const response = await fetch(url, options);
    if(response.ok) userLogin(username.value, password.value);
    console.log(response);
  }

  return (
    <section className='animeLeft'>
      <h1 className='title'>Cadastre-se</h1>
      <form onSubmit={handleSubmit}>
        <Input label="Usuário" type="text" name="username" {...username} />
        <Input label="Email" type="email" name="email" {...email} />
        <Input label="Senha" type="password" name="password" {...password} />
        <Button>Cadastrar</Button>
      </form>
    </section>
  )


}

export default LoginCreate;
