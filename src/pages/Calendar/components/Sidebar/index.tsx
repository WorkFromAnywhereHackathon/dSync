import * as React from 'react';
import { useTranslation } from 'react-i18next';
import { Typography } from '@material-ui/core';
import { Controls, Calendar, Filter } from './components';
import useStyles from './style';

const Sidebar: React.FC = () => {
  const classes = useStyles();
  const { t } = useTranslation('calendar');

  return (
    <div className={classes.container}>
      <Typography component="h1" variant="h3">
        {t('header')}
      </Typography>
      <Controls />
      <Calendar />
      <Filter />
    </div>
  );
};

export default Sidebar;
