const httpService = require('../services/httpService');
const Boom = require('boom');

const FavVideo = require('../db_config/models/FavVideo');

const formatVideoItems = (items) =>
  items.map(
    ({
      id,
      snippet: {
        title,
        thumbnails: {
          high: { url },
        },
      },
      contentDetails: { duration, definition },
      statistics: { viewCount, likeCount, dislikeCount },
    }) => ({
      id,
      title,
      thumbnailUrl: url,
      duration,
      definition,
      viewCount,
      likeCount,
      dislikeCount,
    })
  );

exports.getSingleVideo = async (req, res) => {
  const params = { id: req.params.id };

  try {
    const {
      data: { items },
    } = await httpService.fetchVideos(params);
    res.json({ ...formatVideoItems(items)[0] });
  } catch ({ response: { status, data } }) {
    res.status(status).send(data);
  }
};

exports.getTrendVideos = async (req, res) => {
  const params = {
    chart: 'mostPopular',
    pageToken: req.query.page || '',
  };

  try {
    const {
      data: { items, nextPageToken },
    } = await httpService.fetchVideos(params);
    res.json({ items: formatVideoItems(items), nextPageToken });
  } catch ({ response: { status, data } }) {
    res.status(status).send(data);
  }
};

exports.searchVideos = async (req, res) => {
  if (!req.query.name) res.json(Boom.badRequest('Name is required'));

  const params = {
    q: req.query.name,
    pageToken: req.query.page || '',
  };

  try {
    const {
      data: { items: searchItems, nextPageToken },
    } = await httpService.searchVideos(params);
    const idList = searchItems.map(({ id: { videoId } }) => videoId).join(',');
    const {
      data: { items },
    } = await httpService.fetchVideos({ id: idList });

    res.json({ items: formatVideoItems(items), nextPageToken });
  } catch ({ response: { status, data } }) {
    res.status(status).send(data);
  }
};

exports.getSavedVideos = async (req, res) => {
  try {
    const favVideos = await FavVideo.find({});
    res.json(favVideos);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
};

exports.saveVideo = async (req, res) => {
  const { videoData } = req.body;

  try {
    const newFavVid = new FavVideo({
      data: videoData,
    });

    const favVid = await newFavVid.save();
    res.json(favVid);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
};

exports.deleteVideo = async (req, res) => {
  try {
    let favVideo = await FavVideo.findOne({ 'data.id': req.params.id });

    if (!favVideo) return res.status(404).json({ msg: 'Video not found' });

    await FavVideo.findOneAndDelete({ 'data.id': req.params.id });

    res.json({ msg: 'Video Removed from favorite' });
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
};
