import CommentForm from "./CommentForm";
import { Avatar, Box, Typography} from '@mui/joy';
import { Stack } from '@mui/material';

const Comment = ({ comment, replies, parentId = null}) => {
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
        
        {replies.length > 0 && (
          <Stack direction="row" spacing={2} >
            {replies.map((reply) => (
              <Comment
                comment={reply}
                key={reply.id}
               
                replies={[]}
                
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