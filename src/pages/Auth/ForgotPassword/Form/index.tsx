import { FC, useState } from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { Form as FormType } from 'types';
import { FormControl, Input, Box } from '@material-ui/core';
import { useForm } from 'react-hook-form';
import InputLabel from '@material-ui/core/InputLabel';
import InputAdornment from '@material-ui/core/InputAdornment';
import IconButton from '@material-ui/core/IconButton';
import { yupResolver } from '@hookform/resolvers/yup';
import VisibilityIcon from '@material-ui/icons/Visibility';
import VisibilityOffIcon from '@material-ui/icons/VisibilityOff';
import useStyles from './style';

import validationSchema from './validation';

interface State {
  showPassword: boolean;
}

const ForgotPassForm: FC<FormType> = ({ innerRef }) => {
  const classes = useStyles();
  const { t } = useTranslation('auth');
  const dispatch = useDispatch();
  const history = useHistory();
  const [values, setValues] = useState<State>({
    showPassword: false,
  });
  const {
    register,
    handleSubmit,
    errors,
    formState: { isSubmitting },
  } = useForm({
    resolver: yupResolver(validationSchema),
  });

  const onSubmit = () => {
    dispatch({
      clb: () => history.push('/auth/login'),
    });
  };
  const handleClickShowPassword = () => {
    setValues({ ...values, showPassword: !values.showPassword });
  };

  const handleMouseDownPassword = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
  };

  return (
    <Box>
      <form ref={innerRef} onSubmit={handleSubmit(onSubmit)}>
        <FormControl>
          <InputLabel className={classes.label} htmlFor="password">
            {t('new_password')}
          </InputLabel>
          <Input
            className={classes.input}
            id="newPassword"
            name="password"
            type={values.showPassword ? 'text' : 'password'}
            endAdornment={
              <InputAdornment position="end">
                <IconButton
                  aria-label="toggle password visibility"
                  onClick={handleClickShowPassword}
                  onMouseDown={handleMouseDownPassword}
                >
                  {values.showPassword ? (
                    <VisibilityIcon style={{ color: '#BDBDBD' }} />
                  ) : (
                    <VisibilityOffIcon style={{ color: '#BDBDBD' }} />
                  )}
                </IconButton>
              </InputAdornment>
            }
            inputRef={register}
            disabled={isSubmitting}
          />
        </FormControl>
        <FormControl>
          <InputLabel className={classes.label} htmlFor="password">
            {t('retype_password')}
          </InputLabel>
          <Input
            error={!!errors.passord}
            className={classes.lastInput}
            id="password"
            name="password"
            type={values.showPassword ? 'text' : 'password'}
            endAdornment={
              <InputAdornment position="end">
                <IconButton
                  aria-label="toggle password visibility"
                  onClick={handleClickShowPassword}
                  onMouseDown={handleMouseDownPassword}
                >
                  {values.showPassword ? (
                    <VisibilityIcon style={{ color: '#BDBDBD' }} />
                  ) : (
                    <VisibilityOffIcon style={{ color: '#BDBDBD' }} />
                  )}
                </IconButton>
              </InputAdornment>
            }
            inputRef={register}
            disabled={isSubmitting}
          />
        </FormControl>
        <span className={classes.error}>{errors.password?.message}</span>
      </form>
    </Box>
  );
};
export default ForgotPassForm;
