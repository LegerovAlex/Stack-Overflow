import type { FC } from 'react';

import { Box } from '@mui/system';
import { snippetListStyles } from './SnippetList.styles';
import { SnippetCard } from '@/components';
import type { SnippetListProps } from './SnippetLits.props';

export const SnippetList: FC<SnippetListProps> = ({ items }) => {
  return (
    <Box sx={snippetListStyles.container}>
      {items.map((item) => (
        <SnippetCard key={item.id} {...item} />
      ))}
    </Box>
  );
};
