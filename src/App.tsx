import { useTranslation } from 'react-i18next';
import { InputField } from '@/ui';
import { Icon1 } from '@/static';

const App = () => {
  const { t } = useTranslation();

  return (
    <>
      <InputField label={t('labels.email')} placeholder={t('placeholders.email')} />
      <Icon1 />
      <div>lox</div>
    </>
  );
};
export default App;
