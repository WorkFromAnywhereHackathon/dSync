import { Route, Redirect, RouteProps } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { RootState } from 'store/reducers';
import { FC } from 'react';

interface PrivateRouteProps extends RouteProps {
  component: any;
}

const PrivateRoute: FC<PrivateRouteProps> = ({ component: Component, ...restProps }) => {
  const { isAuthenticated } = useSelector((state: RootState) => state.auth);

  return (
    <Route
      {...restProps}
      render={props => {
        if (!isAuthenticated) {
          return <Redirect to="/auth/login" />;
        }

        return <Component {...props} />;
      }}
    />
  );
};

export default PrivateRoute;
