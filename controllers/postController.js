const Post = require('../models/postModel');
exports.createPost = async (req, res) => {
  try {
    const { title, body, tags, status } = req.body;
    const post = new Post({ title, body, tags, status, userId: req.user.id });
    await post.save();
    res.status(201).json(post);
  } catch (error) {
    res.status(500).json({ message: 'Server error' });
  }
};