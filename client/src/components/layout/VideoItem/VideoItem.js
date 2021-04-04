import React, { useRef } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { delFav, addFav } from '../../../redux/actions/videoActions';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import './VideoItem.css';

function VideoItem({
  data: { id, title, thumbnailUrl, likeCount, viewCount },
  allData,
}) {
  const ref = useRef();
  const favIds = useSelector((state) => state.videos.favIds);
  const isFav = favIds[id];

  const dispatch = useDispatch();
  const favHandler = (id) => {
    if (isFav) {
      ref.current.classList.remove('bounce');
      dispatch(delFav(id));
    } else {
      ref.current.classList.add('bounce');
      dispatch(addFav(id, allData));
    }
  };
  return (
    <Card ref={ref}>
      <Card.Img variant='top' src={thumbnailUrl} className='vid-image' />
      <Card.Body className='card-content'>
        <Card.Title>{title}</Card.Title>
        <Card.Text>{`Likes: ${likeCount},  Views: ${viewCount}`}</Card.Text>
        <Button
          variant='primary'
          className='card-btn'
          style={{ backgroundColor: isFav && 'black', color: isFav && 'white' }}
          onClick={() => favHandler(id)}
        >
          {isFav ? 'Remove' : 'Add'}
        </Button>
      </Card.Body>
    </Card>
  );
}

export default VideoItem;
