import { FC, ReactElement } from 'react';
import { Link as RouterLink } from 'react-router-dom';
import MuiLink from '@material-ui/core/Link';

interface ICustomLink {
  to: string;
  className: string;
  children: ReactElement;
}

const CommonLink: FC<ICustomLink> = ({ to, children, ...props }) => {
  return (
    <MuiLink component={RouterLink} to={to} {...props}>
      {children}
    </MuiLink>
  );
};

export default CommonLink;
