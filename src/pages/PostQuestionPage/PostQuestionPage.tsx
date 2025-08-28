import { QuestionForm } from '@/modules';
import type { FC } from 'react';
import { useLocation, useParams } from 'react-router';

export const PostQuestionPage: FC = () => {
  const { id } = useParams<{ id: string }>();
  const location = useLocation();
  const initialValues = location.state?.initialValues;

  return <QuestionForm questionId={id} initialValues={initialValues} />;
};
