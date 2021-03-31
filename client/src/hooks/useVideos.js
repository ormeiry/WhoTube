import React, { useState } from 'react';

export function useVideos(dispatchFunc, selector) {
  const [currentPage, setCurrentPage] = useState(1);
  const [vidsPerPage] = useState(5);
  const state = selector((state) => state.videos);
  const dispatch = dispatchFunc();

  return [currentPage, setCurrentPage, vidsPerPage, state, dispatch];
}

export default useVideos;
