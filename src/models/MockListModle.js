import {getAccessList} from '../services/AccessRecordService';

export default {

  namespace: 'accessRecordModle',

  state: {},

  subscriptions: {
    setup ({ dispatch, history }) {
      history.listen((location) => {
        if (location.pathname === '/accessRecord') {
          dispatch({ 
              type: 'getAccessList', 
              payload: {
                page:1
              },
          })
        }
      })
    },
  },

  effects: {
    *fetch({ payload }, { call, put }) {  // eslint-disable-line
      yield put({ type: 'save' });
    },
    *getAccessList({ payload }, { call, put }){
      console.log("2");
      const result = yield call(getAccessList, payload)
      console.log(result)
      const {  data } = result
      if (data.success) {
        yield put({
          type: 'save',
          payload: {
            accessList: data.data,
            totalNum:data.total,
            currentPage:payload.page
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
