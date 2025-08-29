import { List } from '@mui/material';
import type { FC } from 'react';
import type { NavListProps } from './NavList.props';
import { NavItem } from '@/ui';
import { useTranslation } from 'react-i18next';

export const NavList: FC<NavListProps> = ({ items }) => {
  const { t } = useTranslation();
  return (
    <List>
      {items.map(({ icon, label, to, id }) => (
        <NavItem id={id} key={id} to={to} label={t(label)} icon={icon} />
      ))}
    </List>
  );
};
