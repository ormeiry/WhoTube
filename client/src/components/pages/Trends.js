import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import VideoScreen from './VideoScreen';
import { useVideos } from '../../hooks/useVideos';
import { getTrends, getFavs } from '../../redux/actions/videoActions';
import { getCurrentVids } from '../../utils/getCurrentVids';
import './VideoWrapper.css';

const Trends = () => {
  const [currentPage, setCurrentPage, vidsPerPage, state, dispatch] = useVideos(
    useDispatch,
    useSelector
  );

  useEffect(() => {
    dispatch(getFavs());
  }, [dispatch]);

  useEffect(() => {
    dispatch(getTrends());
  }, [dispatch]);

  const videoItems = state.trendVideos.videoItems;
  const currentVids = getCurrentVids(currentPage, vidsPerPage, videoItems);
  const paginate = (pageNumber) => {
    window.scrollTo({ top: 5, behavior: 'smooth' });
    setCurrentPage(pageNumber);
  };

  return (
    <VideoScreen
      currentVids={currentVids}
      paginate={paginate}
      videoItems={videoItems}
      vidsPerPage={vidsPerPage}
      title='Trends'
    />
  );
};

export default Trends;
