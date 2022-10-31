const express = require('express');
const router = express.Router();
const { ObjectId } = require('mongodb');
const Post = require('../models/post');
const User = require('../models/user');
const Comment = require('../models/comment');
const verifyToken = require('../utils/verifyToken');

router.get('/', async (req, res) => {
	try {
		const posts = await Post.find().populate(['user', 'likes', 'comments']);

		return res.send({ posts });
	} catch (err) {
		return res
			.status(500)
			.send({ error: 'An unexpected error occurred', details: err });
	}
});

router.post('/new-post', verifyToken, async (req, res) => {
	const userId = req.user;
	const title = req.body.title;

	if (!title) {
		return res.status(400).send({
			error: 'Post title must be provided!',
		});
	}

	try {
		if (ObjectId.isValid(userId)) {
			const userExists = await User.findById(userId);

			if (!userExists) {
				return res
					.status(404)
					.send({ error: 'No such user was found!' });
			}

			const newPost = new Post({
				user: userId,
				title,
				likes: [],
				comments: [],
			});
			const post = await newPost.save();

			return res.send({ post });
		} else {
			return res
				.status(400)
				.send({ error: 'UserID is not a valid ObjectId' });
		}
	} catch (err) {
		return res
			.status(500)
			.send({ error: 'An unexpected error occurred', details: err });
	}
});

router.post('/like', verifyToken, async (req, res) => {
	const userId = req.user;
	const postId = req.body.post;

	if (!postId) {
		return res.status(400).send({
			error: 'PostId must be provided!',
		});
	}

	try {
		if (ObjectId.isValid(postId)) {
			const post = await Post.findById(postId);
			if (!post) {
				return res.status(404).send({ error: 'No such post exists!' });
			}

			const liked = post.likes.includes(userId);

			if (!liked) {
				await post.update({
					$addToSet: { likes: userId },
				});
			} else {
				await post.update({
					$pull: { likes: userId },
				});
			}

			return res.send({ post });
		} else {
			return res
				.status(400)
				.send({ error: 'PostID is not a valid ObjectId' });
		}
	} catch (err) {
		return res
			.status(500)
			.send({ error: 'An unexpected error occurred', details: err });
	}
});

router.post('/comment', verifyToken, async (req, res) => {
	const userId = req.user;
	const postId = req.body.post;
	const commentTitle = req.body.commentTitle;
	const isReply = req.body.isReply || null;
	const parentCommentId = req.body.parentComment || null;

	if (!postId) {
		return res.status(400).send({
			error: 'PostId must be provided!',
		});
	}

	if (!commentTitle) {
		return res.status(400).send({
			error: 'Comment title must be provided!',
		});
	}

	try {
		if (ObjectId.isValid(postId)) {
			const post = await Post.findById(postId);
			if (!post) {
				return res.status(404).send({ error: 'No such post exists!' });
			}

			const newComment = new Comment({
				user: userId,
				post: postId,
				commentTitle,
				isReply,
				parentComment: parentCommentId,
				replies: [],
			});
			const comment = await newComment.save();

			await post.update({ $addToSet: { comments: comment._id } });

			if (isReply) {
				if (ObjectId.isValid(parentCommentId)) {
					const parentComment = await Comment.findById(
						parentCommentId
					);

					if (!parentComment) {
						return res
							.status(404)
							.send({ error: 'No such comment exists!' });
					}

					await parentComment.update({
						$addToSet: { replies: comment._id },
					});
				} else {
					return res
						.status(400)
						.send({
							error: 'ParentCommentID is not a valid ObjectId',
						});
				}
			}

			return res.send({ comment });
		} else {
			return res
				.status(400)
				.send({ error: 'PostID is not a valid ObjectId' });
		}
	} catch (err) {
		return res
			.status(500)
			.send({ error: 'An unexpected error occurred', details: err });
	}
});

module.exports = router;
