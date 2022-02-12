const SERVER_URI =
  process.env.NODE_ENV === "development"
    ? process.env.REACT_APP_SERVER_URI_DEV
    : process.env.REACT_APP_SERVER_URI_PROD;

export default SERVER_URI || "";
