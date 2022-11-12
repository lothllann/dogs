import React from 'react'
import styles from './UserPhotoPost.module.css'
import useForm from '../../Hooks/userForm';
import Button from '../Form/Button';
import Error from '../Helper/Error';
import Input from '../Form/Input';

const UserPhotoPost = () => {
const nome = useForm();
const peso = useForm();
const idade = useForm();


  function handleSubmit(event) {
    event.prevenDefault();
    
  }

  function handleImgChange() {
    
  }
  return (
    <section className={`${styles.photoPost} animeLeft`}>
      <form onSubmit={handleSubmit}>
        <Input label="Nome" type="text" name="nome" />
        <Input label="Peso" type="text" name="peso" />
        <Input label="Idade" type="text" name="idade" />
        <input type="file" name='img' id='img' onChange={handleImgChange} />
        <Button>Enviar</Button>
      </form>

    </section>
  )
}

export default UserPhotoPost;
