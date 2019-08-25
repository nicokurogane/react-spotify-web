import history from '../../../history';

const errorHandler = errorCode => {
  switch (errorCode) {
    case 500:
      return 'Server is not responding';
    case 401: //token expired
      history.push('/login');
      break;
    default:
      return 'Unknown error';
  }
};

export default errorHandler;
