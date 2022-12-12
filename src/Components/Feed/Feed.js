import React from 'react'
import FeedModal from './FeedModal';
import FeedPhotos from './FeedPhotos';

const Feed = ({user}) => {
  const [modalPhoto, setModalPhoto] = React.useState(null);
  return (
    <>
      {modalPhoto && <FeedModal photo={modalPhoto} setModalPhoto={setModalPhoto} />}
      <FeedPhotos user={user} setModalPhoto={setModalPhoto} />
    </>
  )
}

export default Feed;