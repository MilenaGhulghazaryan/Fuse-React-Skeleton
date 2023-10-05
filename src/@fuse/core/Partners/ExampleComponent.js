import React from 'react';
import { useTranslation } from 'react-i18next';

const ExampleComponent = () => {
  const { t } = useTranslation();
  return (
    <div>
      <h1>{t('greeting')}</h1>
      <button>{t('buttonText')}</button>
    </div>
  );
};

export default ExampleComponent;
