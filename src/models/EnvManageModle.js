import {getEnvList} from '../services/EnvManageService';

export default {

  namespace: 'envManageModle',

  state: {},

  subscriptions: {
    setup ({ dispatch, history }) {
      history.listen((location) => {
        if (location.pathname === '/envManage') {
          dispatch({ 
              type: 'getEnvList', 
              payload: location.query || {},
          })
        }
      })
    },
  },

  effects: {
    *fetch({ payload }, { call, put }) {  // eslint-disable-line
      yield put({ type: 'save' });
    },
    *getEnvList({ payload }, { call, put }){
      console.log("2");
      const result = yield call(getEnvList, payload)
      console.log(result)
      const {  data } = result
      if (data.success) {
        yield put({
          type: 'save',
          payload: {
            envList: data.data,
            totalNum:data.total
          }
        })
      } else {
        throw result
      }

    }
  },

  reducers: {
    save(state, action) {
      return { ...state, ...action.payload };

    },
  },

};
