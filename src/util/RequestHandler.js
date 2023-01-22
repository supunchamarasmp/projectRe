import { ActivityIndicator} from 'react-native';
import { setLoading } from '../models/donetionModel';
import store from '../store/store';

export const httpPost = async (
  method,
  payload,
  loadingText = null,
) => {
  let url = 'https://07fplmn2nd.execute-api.us-west-2.amazonaws.com/dev/'+method;
  try {
    const headers = {
      'Content-Type': 'application/json',
      'accept':'application/json',
      'x-api-key':'RHtTMSSIsm4ecSAfaHq4N7HpaMOJBv5utDDhp1ch',
    };
    store.dispatch(setLoading(true));
    let res = await fetch(url, {
      method: 'POST',
      headers: headers,
      body: JSON.stringify(payload),
    });

    const resJson = res.json();
    store.dispatch(setLoading(false));
    return resJson;
  } catch (e) {
    console.log('Exception', e);
    store.dispatch(setLoading(false));
    alert("Error ");
  }
  // });
};

export const httpGet = async (
  method,
  payload,
  loadingText = null,
) => {
  let url = 'https://07fplmn2nd.execute-api.us-west-2.amazonaws.com/dev/'+method;
  try {
    const headers = {
      'Content-Type': 'application/json',
      'accept':'application/json',
      'x-api-key':'RHtTMSSIsm4ecSAfaHq4N7HpaMOJBv5utDDhp1ch',
    };
store.dispatch(setLoading(true));
    let res = await fetch(url, {
      method: 'GET',
      headers: headers,
    });
    const resJson = res.json();
    store.dispatch(setLoading(false));
    return resJson;
  } catch (e) {
    console.log('Exception', e);
    store.dispatch(setLoading(false));
    alert("Error ");
  }
  // });
};