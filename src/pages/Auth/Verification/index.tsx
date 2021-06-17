import { useRef } from 'react';
import { useTranslation } from 'react-i18next';
import { useHistory } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { Typography, Button, IconButton, CircularProgress, TextField } from '@material-ui/core';
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import { RootState } from 'store/reducers';
import SubmitButton from 'components/Button';
import useStyles from './style';

const Verification = () => {
  const classes = useStyles();
  const { t } = useTranslation('auth');
  const { loading } = useSelector((state: RootState) => state.auth);
  const inputRef = useRef<HTMLInputElement>(null);
  const history = useHistory();

  const onResend: () => void = () => ({});

  const onLogIn: () => void = () => ({});

  return (
    <div>
      <IconButton
        className={classes.backButton}
        disabled={!history.length}
        onClick={() => {
          if (history.length) {
            history.push('/auth');
          }
        }}
        color="primary"
        disableRipple
      >
        <ArrowBackIosIcon />
        {t('back')}
      </IconButton>
      <Typography className={classes.title} component="h1" variant="h1">
        {t('welcome_title')}
      </Typography>
      <Typography className={classes.hint} component="p" variant="body2">
        {t('verification_hint')}
      </Typography>
      <TextField
        classes={{
          root: classes.textFieldLabel,
        }}
        autoFocus
        fullWidth
        label={t('verification_code')}
        inputRef={inputRef}
      />
      <div className={classes.content}>
        {!loading ? (
          <SubmitButton title={t('login_title')} onClick={onLogIn} fullWidth color="secondary" />
        ) : (
          <CircularProgress className={classes.loader} />
        )}
      </div>
      <Button className={classes.resend} disableRipple onClick={onResend} color="primary">
        {t('resend')}
      </Button>
    </div>
  );
};

export default Verification;
