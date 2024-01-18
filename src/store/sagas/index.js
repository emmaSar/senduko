import {all} from 'redux-saga/effects';
// import {watchAuthType} from './auth-saga';
// import {watchMainType} from './main-saga';


export default function* rootSaga() {
  yield all([
    //  watchAuthType(),
    //  watchMainType()
  ]);
}
