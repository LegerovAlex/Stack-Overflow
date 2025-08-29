import type { SnippetFormValue } from '@/interfaces/api.interfaces';

export interface CreateSnippetFormProps {
  initialValues?: SnippetFormValue;
  snippetId?: string;
}
