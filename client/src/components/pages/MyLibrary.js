import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getFavs } from '../../redux/actions/videoActions';

function MyLibrary() {
  const data = useSelector((state) => state.videos.favVideos);
  const dispatch = useDispatch();

  console.log(data);

  useEffect(() => {
    dispatch(getFavs());
  }, [dispatch]);
  return <h1>My Library</h1>;
}

export default MyLibrary;
