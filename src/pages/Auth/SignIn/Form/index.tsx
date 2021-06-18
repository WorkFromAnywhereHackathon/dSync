import { FC } from 'react';
import { useTranslation } from 'react-i18next';
import { Form as FormType } from 'types';
import { useSelector, useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { setVerifyPhone } from 'store/auth/actions';
import { Typography } from '@material-ui/core';
import PhoneInput from 'material-ui-phone-number';
import { RootState } from 'store/reducers';
import { phoneFormat } from 'utils';

import useStyles from './style';
import validationSchema from './validation';

interface Values {
  phoneNumber: string;
}

const Login: FC<FormType> = ({ innerRef }) => {
  const classes = useStyles();
  const { t } = useTranslation('auth');
  const dispatch = useDispatch();
  const { errorMessage } = useSelector((state: RootState) => state.auth);

  const history = useHistory();
  const {
    register,
    handleSubmit,
    errors,
    formState: { isSubmitting },
  } = useForm({
    resolver: yupResolver(validationSchema),
  });

  const onSubmit = (formValues: Values) => {
    dispatch(
      setVerifyPhone.request({
        ...formValues,
        phoneNumber: phoneFormat(formValues.phoneNumber),
        clb: () => history.push('/auth/verification'),
      }),
    );
  };

  return (
    <form ref={innerRef} onSubmit={handleSubmit(onSubmit)}>
      <Typography className={classes.error}>{errorMessage}</Typography>
      <PhoneInput
        error={!!errors.phoneNumber}
        fullWidth
        name="phoneNumber"
        id="phoneNumber"
        label={t('phone_number')}
        defaultCountry="by"
        onlyCountries={['by', 'ru', 'ua', 'pl', 'lt', 'ge']}
        variant="outlined"
        disabled={isSubmitting}
        helperText={<span>{errors.phoneNumber?.message}</span>}
        inputProps={{
          ref: register,
        }}
      />
      <span className={classes.error}>{errors.email?.message}</span>
    </form>
  );
};

export default Login;
