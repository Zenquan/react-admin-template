import { useTranslation } from 'react-i18next';


const useChangeLang = () => {
  const { t, i18n } = useTranslation();

  const changeLanguage = (lng: string) => {
    i18n.changeLanguage(lng);
  };

  return {
    t,
    changeLanguage
  }
}

export default useChangeLang;