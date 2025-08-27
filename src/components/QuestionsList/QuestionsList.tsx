import type { FC } from 'react';
import type { QuestionsListProps } from './QuestionsList.props';
import { Box } from '@mui/material';
import { QuestionCard } from '../QuestionCard';
import { questionsListStyles } from './QuestionsList.styles';

export const QuestionsList: FC<QuestionsListProps> = ({ items, lastElementRef }) => {
  return (
    <Box sx={questionsListStyles.container}>
      {items.map((item, index) => (
        <QuestionCard
          key={item.id}
          ref={index === items.length - 1 ? lastElementRef : undefined}
          {...item}
        />
      ))}
    </Box>
  );
};
