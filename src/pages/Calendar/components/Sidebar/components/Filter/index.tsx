import * as React from 'react';
import { useTranslation } from 'react-i18next';
import { Typography } from '@material-ui/core';
import useStyles from './style';

const Sidebar: React.FC = () => {
  const { t } = useTranslation('calendar');
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Typography component="p" variant="h5">
        {t('filter')}
      </Typography>
    </div>
  );
};

export default Sidebar;
