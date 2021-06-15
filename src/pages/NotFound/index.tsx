import useStyle from './style';

const NotFound = () => {
  const classes = useStyle();
  return <div className={classes.title}>Error 404: Page Was Not Found</div>;
};

export default NotFound;
