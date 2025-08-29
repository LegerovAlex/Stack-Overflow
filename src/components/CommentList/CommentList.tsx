import type { FC } from 'react';
import type { CommentListProps } from './CommentLIst.props';
import { CommentItem } from '../CommentItem';

export const CommentList: FC<CommentListProps> = ({ comments }) => {
  return (
    <>
      {comments.map(({ content, id, username }) => (
        <CommentItem key={id} content={content} username={username} />
      ))}
    </>
  );
};
