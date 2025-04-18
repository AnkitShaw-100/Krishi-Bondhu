import React from 'react';
import { useTranslation } from 'react-i18next';

function BuyerDashboard() {
  const { t, i18n } = useTranslation();

  const handleLanguageChange = (lang) => {
    i18n.changeLanguage(lang); // Change the language dynamically
  };

  return (
    <div>
      <h1>{t('welcome')}</h1>
      <p>{t('search')}</p>
      
      {/* Language Switcher */}
      <button onClick={() => handleLanguageChange('en')}>English</button>
      <button onClick={() => handleLanguageChange('bn')}>বাংলা</button>
    </div>
  );
}

export default BuyerDashboard;
