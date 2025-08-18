import { Box, Typography } from '@mui/material';
import { FormInput } from '../FormInput';
import { PrimaryButton } from '@/ui';
import { useForm } from 'react-hook-form';
import { editFormStyles } from './EditForm.styles';
import { useTranslation } from 'react-i18next';

export const EditForm = () => {
  const { t } = useTranslation();
  const { control } = useForm();

  return (
    <Box component="form" sx={editFormStyles.form}>
      <Typography sx={editFormStyles.title}>{t('account.editProfile')}</Typography>
      <Box sx={editFormStyles.section}>
        <Box>
          <FormInput
            name="username"
            control={control}
            placeholder={t('placeholders.usernameNew')}
            label={t('labels.changeUsername')}
          />
          <PrimaryButton>{t('button.save')}</PrimaryButton>
        </Box>
        <Box>
          <FormInput
            placeholder={t('placeholders.passwordOld')}
            label={t('labels.changePassword')}
            name="password"
            control={control}
          />
          <FormInput
            placeholder={t('placeholders.passwordNew')}
            name="password"
            control={control}
          />
          <FormInput
            placeholder={t('placeholders.confirmPassword')}
            name="password"
            control={control}
          />
          <PrimaryButton>{t('button.changePassword')}</PrimaryButton>
        </Box>
      </Box>
    </Box>
  );
};
