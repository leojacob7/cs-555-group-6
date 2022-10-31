import CommentForm from "./CommentForm";
import { Avatar, Box, Typography} from '@mui/joy';
import { Stack } from '@mui/material';

const Comment = ({ 
  comment,
  replies,
  setActiveComment,
  activeComment,
  updateComment,
  deleteComment,
  addComment,
  parentId = null,
  currentUserId,

}) => {
    const isEditing =
    activeComment &&
    activeComment.id === comment.id &&
    activeComment.type === "editing";
    const isReplying =
    activeComment &&
    activeComment.id === comment.id &&
    activeComment.type === "replying";
    const canDelete =
    currentUserId === comment.userId && replies.length === 0;
    const canEdit = currentUserId === comment.userId;
    const canReply = Boolean(currentUserId);
    const createdAt = new Date(comment.createdAt).toLocaleDateString();
    const replyId = parentId ? parentId : comment.id;
   

  return (
    <div key={comment.id} className="comment">
    <Stack direction="row" spacing={2}> 
        <Avatar/>
      
      <Stack spacing={2}>
      <Stack direction="row" spacing={2}>
        <Typography component='strong'>{comment.username}</Typography>
          <Typography>{createdAt}</Typography>
        </Stack>
        <Typography >{comment.body} </Typography>
        <Stack direction="row" spacing={2}>
        <div className="comment-actions"> Reply </div>
        <div className="comment-actions"> Edit </div>
        <div className="comment-actions"> Delete </div>
        </Stack>
        <div className="comment-actions">
          {canReply && (
            <div
            className="comment-actions"
            onClick={() => 
              setActiveComment ({id : comment.id, type: "replying "})
            }
          > Reply </div>)}
          {isReplying && (
            <CommentForm
              submitLabel="Reply"
              handleSubmit={(text) => addComment(text, replyId)}
            />
          )}
          
        </div>
        {isReplying && (
          <CommentForm
            submitLabel="Reply"
            handleSubmit={(text) => addComment(text, replyId)}
          />)}

        {replies.length > 0 && (
          <Stack direction="row" spacing={2} >
            {replies.map((reply) => (
              <Comment
              comment={reply}
              key={reply.id}
              setActiveComment={setActiveComment}
              activeComment={activeComment}
              updateComment={updateComment}
              deleteComment={deleteComment}
              addComment={addComment}
              parentId={comment.id}
              replies={[]}
              currentUserId={currentUserId}
              />
            ))}
          </Stack>
        )}
      </Stack>
      </Stack>
    </div>
  );
};

export default Comment;