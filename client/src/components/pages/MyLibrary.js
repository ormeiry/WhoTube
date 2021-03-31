import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import VideoScreen from './VideoScreen';
import { useVideos } from '../../hooks/useVideos';
import { getFavs } from '../../redux/actions/videoActions';
import { getCurrentVids } from '../../utils/getCurrentVids';
import './VideoWrapper.css';

const MyLibrary = () => {
  const [currentPage, setCurrentPage, vidsPerPage, state, dispatch] = useVideos(
    useDispatch,
    useSelector
  );

  useEffect(() => {
    dispatch(getFavs());
  }, [dispatch]);

  const videoItems = state.favVideos;
  const currentVids = getCurrentVids(currentPage, vidsPerPage, videoItems);
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <VideoScreen
      currentVids={currentVids}
      paginate={paginate}
      videoItems={videoItems}
      vidsPerPage={vidsPerPage}
      title='My Library'
    />
  );
};

export default MyLibrary;
