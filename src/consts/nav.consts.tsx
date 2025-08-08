import { RoutesPaths } from '@/routes/routeesPaths';
import { AccountIcon, HomeIcon, PostIcon, QuestionIcon, SnippetsIcon, UsersIcon } from '@/static';
import type { NavItems } from '@/types/nav.types';

export const navItems: NavItems = [
  {
    id: '1',
    to: RoutesPaths.ROOT,
    label: 'navigation.home',
    icon: <HomeIcon />,
  },
  {
    id: '2',
    to: RoutesPaths.ACCOUNT,
    label: 'navigation.account',
    icon: <AccountIcon />,
  },
  {
    id: '3',
    to: RoutesPaths.POSTS,
    label: 'navigation.post',
    icon: <PostIcon />,
  },
  {
    id: '4',
    to: RoutesPaths.SNIPPETS,
    label: 'navigation.snippets',
    icon: <SnippetsIcon />,
  },
  {
    id: '5',
    to: RoutesPaths.QUESTIONS,
    label: 'navigation.questions',
    icon: <QuestionIcon />,
  },
  {
    id: '6',
    to: RoutesPaths.USERS,
    label: 'navigation.users',
    icon: <UsersIcon />,
  },
];
