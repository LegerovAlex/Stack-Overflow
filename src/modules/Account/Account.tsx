import { Box } from '@mui/system';
import { useAccount } from './hooks/useAccount';
import { Typography } from '@mui/material';
import { UserCard } from '@/components';
import { accountStyles } from './Account.styles';
import { useTranslation } from 'react-i18next';
import { Spinner } from '@/ui';
import { EditForm } from './components/EditForm';
import { AccountStats } from './components/AccountStats';

export const Account = () => {
  const { t } = useTranslation();
  const { account, isAuthenticated, isError, isLoading, deleteAccont, handleLogout } = useAccount();

  if (isLoading) return <Spinner />;

  if (!isAuthenticated)
    return <Typography sx={accountStyles.title}>{t('account.errors.loginPrompt')}</Typography>;

  if (isError || !account)
    return <Typography sx={accountStyles.title}>{t('account.errors.loadFailed')}</Typography>;

  return (
    <Box sx={accountStyles.container}>
      <Typography sx={accountStyles.title}>
        {t('account.title')}
        {account.username}
      </Typography>
      <UserCard
        username={account.username}
        id={account.id}
        role={account.role}
        onDelete={deleteAccont}
        onLogout={handleLogout}
      />
      <AccountStats id={account.id} />
      <EditForm />
    </Box>
  );
};
