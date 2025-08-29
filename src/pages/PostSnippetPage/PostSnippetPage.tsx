import { CreateSnippetForm } from '@/modules';
import type { FC } from 'react';
import { useLocation, useParams } from 'react-router';

export const PostSnippetPage: FC = () => {
  const { id } = useParams<{ id: string }>();

  const location = useLocation();

  const initialValues = location.state?.initialValues;

  return <CreateSnippetForm snippetId={id} initialValues={initialValues} />;
};
