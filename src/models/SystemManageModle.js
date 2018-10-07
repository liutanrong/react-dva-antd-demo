import {getSystemList} from '../services/SystemManageService';

export default {

  namespace: 'systemManageModle',

  state: {},

  subscriptions: {
    setup ({ dispatch, history }) {
      history.listen((location) => {
        if (location.pathname === '/systemManage') {
          dispatch({ 
              type: 'getSystemList', 
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
    *getSystemList({ payload }, { call, put }){
      console.log("2");
      const result = yield call(getSystemList, payload)
      console.log(result)
      const {  data } = result
      if (data.success) {
        yield put({
          type: 'save',
          payload: {
            systemList: data.data,
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
