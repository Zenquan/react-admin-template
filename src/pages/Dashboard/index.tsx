import React from 'react';
import { useChangeLang } from 'hooks';

const Dashboard = () => {
  const { t } = useChangeLang();

  return (
    <div style={{fontSize: 28}}>
      {t('greet')}
    </div>
  )
}

export default Dashboard