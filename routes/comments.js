const express = require('express');
const router = express.Router();
const { ObjectId } = require('mongodb');
const Post = require('../models/post');
const User = require('../models/user');
const Comment = require('../models/comment');
const verifyToken = require('../utils/verifyToken');

// get a single comment
router.post('/', async (req, res) => {
	const commentId = req.body.comment;

	if (!commentId) {
		return res.status(400).send({
			error: 'CommentID must be provided!',
		});
	}

	try {
		if (ObjectId.isValid(commentId)) {
			const comment = await Comment.findById(commentId).populate([
				'user',
				'post',
				'replies',
				'hearts',
			]);
			if (!comment) {
				return res
					.status(404)
					.send({ error: 'No such comment exists!' });
			}

			return res.send({ comment });
		} else {
			return res
				.status(400)
				.send({ error: 'CommentID is not a valid ObjectId' });
		}
	} catch (err) {
		return res
			.status(500)
			.send({ error: 'An unexpected error occurred', details: err });
	}
});

// get replies of a comment (depth 1)
router.post('/replies', async (req, res) => {
	const commentId = req.body.comment;

	if (!commentId) {
		return res.status(400).send({
			error: 'CommentID must be provided!',
		});
	}

	try {
		if (ObjectId.isValid(commentId)) {
			const comment = await Comment.findById(commentId).populate({
				path: 'replies',
				populate: { path: 'user', model: 'User' },
			});
			if (!comment) {
				return res
					.status(404)
					.send({ error: 'No such comment exists!' });
			}

			return res.send({ replies: comment.replies });
		} else {
			return res
				.status(400)
				.send({ error: 'CommentID is not a valid ObjectId' });
		}
	} catch (err) {
		return res
			.status(500)
			.send({ error: 'An unexpected error occurred', details: err });
	}
});

// heart a comment
router.post('/heart', verifyToken, async (req, res) => {
	const userId = req.user;
	const commentId = req.body.comment;

	if (!commentId) {
		return res.status(400).send({
			error: 'CommentID must be provided!',
		});
	}

	try {
		if (ObjectId.isValid(commentId)) {
			const comment = await Comment.findById(commentId);
			if (!comment) {
				return res
					.status(404)
					.send({ error: 'No such comment exists!' });
			}

			// check if comment is already hearted by the user
			const hearted = comment.hearts.includes(userId);

			if (!hearted) {
				await comment.update({ $addToSet: { hearts: userId } });
			} else {
				await comment.update({
					$pull: { hearts: userId },
				});
			}

			const updatedComment = await Comment.findById(commentId);

			return res.send({ hearts: updatedComment.hearts });
		} else {
			return res
				.status(400)
				.send({ error: 'CommentID is not a valid ObjectId' });
		}
	} catch (err) {
		return res
			.status(500)
			.send({ error: 'An unexpected error occurred', details: err });
	}
});

module.exports = router;
