import { Alert } from 'react-native/Libraries/Alert/Alert';
import {createAction, createReducer} from 'redux-act';
import {call, takeLatest, put, select} from 'redux-saga/effects';
import { httpGet, httpPost } from '../util/RequestHandler';

export const fundRaising = createAction('FUND_RAISING');
export const setFundraisingList = createAction('SET_FUND_RAISING_LIST');
export const setLoading = createAction('SET_LOADING');
export const donate = createAction('DONATE');

const initialState = {
  fundraisingList: [],
  isLoading:false,
   
  };

  const fundraisingSaga = function* (action) {
    let isDataLoan = false;
    const payload={};
    payload.pagination =1;
    payload.limit=10;
    try {
      
      
      const response = yield call(
        httpGet,
       'fundraising?pagination=1&limit=10',
       {},
        'loading.requesting',
      );
      //console.log("before.........",response.data);
      if (response.data !== null) {
        yield put(setFundraisingList(response.data));
        
        console.log("sucess.........",response.data);
       
      }
    } catch (e) {
      alert("Error ");
    }
  };

  const donateSaga = function* (action) {
    let isDataLoan = false;
    const payload={};
    payload.pagination =1;
    payload.limit=10;
    try {
      
      
      const response = yield call(
        httpPost,
       'donate',
       action.payload,
        'loading.requesting',
      );
      //console.log("before.........",response.data);
      if (response.data !== null) {
        alert("Success ");
        console.log("sucess.........",response.data);
       
      }
    } catch (e) {
      alert("Error ");
    }
  };

  export const donetionRootSaga = function* () {
    yield takeLatest(fundRaising, fundraisingSaga);
    yield takeLatest(donate, donateSaga);
  };
  
  export const donetionReducer = createReducer(
    {
      [setFundraisingList]: (state, payload) => {
        return {...state, fundraisingList: [...payload]};
      },
      [setLoading]: (state, payload) => {
        return {...state, isLoading: payload};
      },
    }, initialState,
  );