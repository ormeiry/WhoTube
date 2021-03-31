import React from 'react';
import VideoItem from '../layout/VideoItem/VideoItem';
import Pagination from '../layout/Pagination/Pagination';

function VideoScreen({
  currentVids,
  paginate,
  videoItems,
  vidsPerPage,
  title,
}) {
  return (
    <>
      <h1 style={{ marginTop: '4rem' }}>{title}</h1>
      <ul className='videos-wrapper'>
        {videoItems?.length &&
          currentVids.map((vid) => (
            <VideoItem data={vid} key={vid.id} allData={vid} />
          ))}
      </ul>
      <Pagination
        postsPerPage={vidsPerPage}
        totalPosts={videoItems.length}
        paginate={paginate}
      />
    </>
  );
}

export default VideoScreen;
