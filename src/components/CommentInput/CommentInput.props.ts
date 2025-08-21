import type { FormEventHandler } from 'react';
import type { FieldValues, Path, UseFormRegister } from 'react-hook-form';

export interface CommentInputProps<T extends FieldValues> {
  register: UseFormRegister<T>;
  fieldName: Path<T>;
  placeholder: string;
  onSubmit: FormEventHandler<HTMLFormElement>;
  isSubmitting?: boolean;
}
