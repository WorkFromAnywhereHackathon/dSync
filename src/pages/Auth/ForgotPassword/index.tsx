import { useRef } from 'react';
import { Link as RouterLink } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import Button from 'components/Button';
import { Typography } from '@material-ui/core';
import useStyles from './style';
import Form from './Form';

const Login = () => {
  const { t } = useTranslation('auth');
  const formRef = useRef<HTMLFormElement>();
  const classes = useStyles();

  const handleClick = () => {
    formRef.current?.dispatchEvent(new Event('submit', { cancelable: true, bubbles: true }));
  };

  return (
    <div>
      <Typography className={classes.title} component="h1" variant="h1">
        {t('create_title')}
      </Typography>
      <div className={classes.content}>
        <Form innerRef={formRef} />
        <Button title="login" handleClick={handleClick} />
        <RouterLink className={classes.backToLogin} to="/auth/login">
          {t('Back to Login')}
        </RouterLink>
      </div>
    </div>
  );
};

export default Login;
