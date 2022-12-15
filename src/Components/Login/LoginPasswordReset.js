import React from 'react'
import Input from '../Form/Input';
import useFetch from '../../Hooks/useFetch';
import userForm from '../../Hooks/userForm';
import Button from '../Form/Button';
import Error from '../Helper/Error';
import { PASSWORD_RESET } from '../../api';
import { useNavigate } from 'react-router-dom';

const LoginPasswordReset = () => {
  const [login, setLogin] = React.useState();
  const [key, setKey] = React.useState();
  const { request, error, loading } = useFetch();
  const password = userForm();
  const navigate = useNavigate();

  React.useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const key = params.get('key');
    const login = params.get('login');
    if (key) setKey(key);
    if (login) setLogin(login);
  }, []);

  async function handleSubmit(event) {
    event.preventDefault();
    if (password.validate()) {
      const { url, options } = PASSWORD_RESET({
        login,
        key,
        password: password.value
      })
      const { response } = await request(url, options);
      if (response.ok) navigate('/login');
    }
  }

  return (
    <>
      <h1 className='title'>Resete a Senha</h1>
      <form onSubmit={handleSubmit}>
        <Input label='Nova senha' type='password' name='password' {...password} />
        {loading ? <Button disabled>Resetando...</Button> : <Button>Resetar Senha</Button>}
      </form>
      <Error error={error} />

    </>

  )
}

export default LoginPasswordReset;
