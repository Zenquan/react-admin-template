import { useTranslation } from 'react-i18next';
import { message } from 'antd';

export const useChangeLang = () => {
  const { t, i18n } = useTranslation();

  const changeLanguage = (lng: string) => {
    i18n.changeLanguage(lng);
    message.success(t('lng.changeLangSuccess'));
  };

  return {
    t,
    changeLanguage,
  };
};
