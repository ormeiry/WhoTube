import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import VideoScreen from './VideoScreen';
import SearchBar from '../layout/SearchBar/SearchBar';
import { useVideos } from '../../hooks/useVideos';
import { getFavs, getTrends } from '../../redux/actions/videoActions';
import { getCurrentVids } from '../../utils/getCurrentVids';
import './VideoWrapper.css';

const Home = () => {
  const [currentPage, setCurrentPage, vidsPerPage, state, dispatch] = useVideos(
    useDispatch,
    useSelector
  );

  useEffect(() => {
    dispatch(getTrends());
    dispatch(getFavs());
  }, [dispatch]);

  const videoItems = state.searchVideos.videoItems;
  const currentVids = getCurrentVids(currentPage, vidsPerPage, videoItems);
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <>
      <SearchBar />
      <VideoScreen
        currentVids={currentVids}
        paginate={paginate}
        videoItems={videoItems}
        vidsPerPage={vidsPerPage}
        title={null}
      />
    </>
  );
};

export default Home;
