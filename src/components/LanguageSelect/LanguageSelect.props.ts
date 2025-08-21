import type { Control, FieldValues, Path, RegisterOptions } from 'react-hook-form';

export interface LanguageSelectProps<T extends FieldValues> {
  name: Path<T>;
  control: Control<T>;
  label: string;
  options: string[];
  rules: RegisterOptions<T, Path<T>>;
}
