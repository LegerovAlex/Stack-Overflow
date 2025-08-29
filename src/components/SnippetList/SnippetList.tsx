import type { FC } from 'react';

import { Box } from '@mui/system';
import { snippetListStyles } from './SnippetList.styles';
import { SnippetCard } from '@/components';
import type { SnippetListProps } from './SnippetLits.props';

export const SnippetList: FC<SnippetListProps> = ({
  items,
  lastElementRef,
  onComment,
  onLike,
  onDelete,
}) => {
  return (
    <Box sx={snippetListStyles.container}>
      {items.map((item, index) => (
        <SnippetCard
          key={item.id}
          {...item}
          ref={index === items.length - 1 ? lastElementRef : null}
          onLike={onLike}
          onComment={onComment}
          onDelete={onDelete}
        />
      ))}
    </Box>
  );
};
