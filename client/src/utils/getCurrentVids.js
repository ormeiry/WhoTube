export function getCurrentVids(currentPage, vidsPerPage, videoItems) {
  const indexOfLastvid = currentPage * vidsPerPage;
  const indexOfFirstvid = indexOfLastvid - vidsPerPage;
  const currentvids = videoItems.slice(indexOfFirstvid, indexOfLastvid);

  return currentvids;
}
