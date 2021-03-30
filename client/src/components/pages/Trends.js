import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getTrends } from '../../redux/actions/videoActions';

const Trends = () => {
  const { videoItems, nextPageToken } = useSelector(
    (state) => state.videos.trendVideos
  );
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getTrends());
  }, [dispatch]);

  return (
    <>
      <h1>Trends</h1>
    </>
  );
};

export default Trends;
