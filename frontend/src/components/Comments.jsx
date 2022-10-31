import { useState, useEffect } from "react";
import CommentForm from "./CommentForm";
import { Avatar, Box, Button, Typography, TextField, Textarea } from '@mui/joy';
import { Stack } from '@mui/material';
import React from 'react';
import moment from 'moment';
import Comment from "./Comment";
import {
  getComments as getCommentsApi,
  createComment as createCommentApi,
  updateComment as updateCommentApi,
  deleteComment as deleteCommentApi,
  
} from "../api";

const Comments = ({ commentsUrl, currentUserId }) => {
  const [backendComments, setBackendComments] = useState([]);
  const [activeComment, setActiveComment] = useState(null);
  const rootComments = backendComments.filter(
    (backendComment) => backendComment.parentId === null
  );

  const getReplies = (commentId) =>
    backendComments
      .filter((backendComment) => backendComment.parentId === commentId)
      .sort(
        (a, b) =>
          new Date(a.createdAt).getTime() - new Date(b.createdAt).getTime()
      );
  const addComment = (text, parentId) => {
        createCommentApi(text, parentId).then((comment) => {
          setBackendComments([comment, ...backendComments]);
          
        });
      };
      const updateComment = (text, commentId) => {
        updateCommentApi(text).then(() => {
          const updatedBackendComments = backendComments.map((backendComment) => {
            if (backendComment.id === commentId) {
              return { ...backendComment, body: text };
            }
            return backendComment;
          });
          setBackendComments(updatedBackendComments);
          setActiveComment(null);
        });
      };
      const deleteComment = (commentId) => {
        if (window.confirm("Are you sure you want to remove comment?")) {
          deleteCommentApi().then(() => {
            const updatedBackendComments = backendComments.filter(
              (backendComment) => backendComment.id !== commentId
            );
            setBackendComments(updatedBackendComments);
          });
        }
      };
  useEffect(() => {
    getCommentsApi().then((data) => {
      setBackendComments(data);
    });
  }, []);

  return (
    <Stack spacing={2}> 
      <Typography variant="subtitle1">comments</Typography>
      
      <Stack spacing={2}>
      <CommentForm handleSubmit={addComment} />
        {rootComments.map((rootComment) => (
          <Comment 
          key={rootComment.id}
            comment={rootComment}
            replies={getReplies(rootComment.id)}
            activeComment={activeComment}
            setActiveComment={setActiveComment}
            addComment={addComment}
            deleteComment={deleteComment}
            updateComment={updateComment}
            currentUserId={currentUserId}
          />
        ))}
      </Stack>
    </Stack>
  );
};
export default Comments;