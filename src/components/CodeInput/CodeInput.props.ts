import type { Control, FieldValues, Path, RegisterOptions } from 'react-hook-form';

export interface CodeInputProps<T extends FieldValues> {
  name: Path<T>;
  control: Control<T>;
  label: string;
  rules: RegisterOptions<T, Path<T>>;
  placeholder: string;
}
