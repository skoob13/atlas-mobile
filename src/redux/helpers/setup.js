import { StatusBar, Platform } from 'react-native';
import apiProvider from 'redux-entities';
import { camelizeKeys } from 'humps';
import 'redux/types';
import config from 'config';


const tokenSelector = () => 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ1c2VyX2lkIjoxLCJ1c2VybmFtZSI6Im1pbnlvdkB5YW5kZXgucnUiLCJleHAiOjE1NjA2Nzg0NTgsImVtYWlsIjoibWlueW92QHlhbmRleC5ydSIsIm9yaWdfaWF0IjoxNTYwMDczNjU4fQ.z61Cf9SJ8R4rdOKBjI86Jtk0lxjuy1qRW902XJJg7wc';

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
