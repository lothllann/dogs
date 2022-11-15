import styles from './FeedPhotosItem.module.css';
import React from 'react'

const FeedPhotosItem = ({photo, setModalPhoto}) => {

  function handleClick(){
    setModalPhoto(photo);
  }
  return (
    <li className={styles.photo} onClick={handleClick}>
      <img src={photo.src} alt={photo.title} />
      <span className={styles.visualizacao}>{photo.acessos}</span>
    </li>
  );
};

export default FeedPhotosItem;
