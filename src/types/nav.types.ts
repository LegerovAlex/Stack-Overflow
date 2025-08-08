import type { RoutesPaths } from '@/routes/routeesPaths';
import type { ParseKeys } from 'i18next';
import type { ReactNode } from 'react';

export type NavItems = ReadonlyArray<{
  readonly id: string;
  readonly to: RoutesPaths;
  readonly icon: ReactNode;
  readonly label: ParseKeys;
}>;
