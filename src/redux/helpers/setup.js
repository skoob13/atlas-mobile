import { StatusBar, Platform } from 'react-native';
import apiProvider from 'redux-entities';
import { camelizeKeys } from 'humps';
import 'redux/types';
import config from 'config';


const tokenSelector = () => '';

let requestsAmount = 0;

function beforeRequest() {
  if (Platform.OS === 'ios') {
    requestsAmount += 1;
    StatusBar.setNetworkActivityIndicatorVisible(true);
  }
}

const beforeSuccess = ({ payload, withSchema, result }) => {
  const data = camelizeKeys(payload);
  if (withSchema && result.count && Array.isArray(result.results)) {
    data.count = result.count;
    data.next = result.next;
    data.previous = result.previous;
  }
  return data;
};

function success() {
  if (Platform.OS === 'ios') {
    requestsAmount -= 1;
    if (!requestsAmount) {
      StatusBar.setNetworkActivityIndicatorVisible(false);
    }
  }
}

const beforeFailure = ({ error }) => {
  if (Platform.OS === 'ios') {
    requestsAmount -= 1;
    if (!requestsAmount) {
      StatusBar.setNetworkActivityIndicatorVisible(false);
    }
  }

  if (__DEV__) {
    // eslint-disable-next-line
    console.log(error);
  }
};


export default apiProvider({
  tokenSelector,
  hooks: {
    beforeRequest,
    beforeSuccess,
    success,
    beforeFailure,
  },
  authorizationType: 'JWT',
  path: config.path,
});
