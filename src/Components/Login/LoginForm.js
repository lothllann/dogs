import React from 'react'
import { Link } from 'react-router-dom';
import Input from '../Form/Input';
import Button from '../Form/Button';
import userForm from '../../Hooks/userForm';
import { UserContext } from '../../UserContext';


const LoginForm = () => {

    const username = userForm();
    const password = userForm();

    const {userLogin} = React.useContext(UserContext);


    async function handleSubmit(event) {
        event.preventDefault();

        if (username.validate() && password.validate()) {
            userLogin(username.value, password.value)
        }
    }

    return (
        <section>
            <h1>Login</h1>
            <form action='' onSubmit={handleSubmit}>
                <Input label="Usúario" type="text" name="username" {...username} />
                <Input label="Password" type="password" name="password" {...password} />

                <Button>Entrar</Button>
            </form>
            <Link to="/login/criar">Cadastro</Link>
        </section>
    )
}

export default LoginForm;
