import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import SearchBar from '../layout/SearchBar/SearchBar';

function Home() {
  const videoItems = useSelector(
    (state) => state.videos.searchVideos.videoItems
  );
  const dispatch = useDispatch();

  return (
    <div>
      <SearchBar />
      <ul>
        {videoItems.length === 0 ? (
          <p>You can Search for Something...</p>
        ) : (
          videoItems.map((vid) => <li key={vid.id}>{vid.title}</li>)
        )}
      </ul>
    </div>
  );
}

export default Home;
