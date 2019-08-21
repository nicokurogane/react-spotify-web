export default errorHandler = errorCode => {
  switch (errorCode) {
    case 500:
      return 'the server is not available';
    default:
      return 'Unknown error';
  }
};
