import { useTranslation } from 'react-i18next';

import { languages } from './config';

const ChangeLang = () => {
  const { i18n } = useTranslation();

  const changeLanguage = (lng: string) => {
    if (i18n.language !== lng) {
      i18n.changeLanguage(lng);
    }
  };

  return (
    <div>
      {languages.map(({ code }) => (
        <button key={code} type="button" onClick={() => changeLanguage(code)} disabled={i18n.language === code}>
          {code}
        </button>
      ))}
    </div>
  );
};

export default ChangeLang;
