import { createAction, handleActions } from 'redux-actions';
import produce from 'immer';

// 액션 타입을 정의해줍니다. /gyuo/2021-09-22
const CHANGE_FIELD = 'auth/CHANGE_FIELD';
const INITIALIZE_FORM = 'auth/INITIALIZE_FORM';

// 액션 생성 함수를 만듭니다. /gyuo/2021-09-22
export const changeField = createAction(
  CHANGE_FIELD,
  ({ form, key, value }) => ({
    form, // register , login
    key, // username, password, passwordConfirm
    value, // 실제 바꾸려는 값
  }),
);
export const initialzeForm = createAction(INITIALIZE_FORM, (form) => form); //register / login

// 모듈의 초기 상태를 정의합니다 . /gyuo/2021-09-22
const initialState = {
  register: {
    username: '',
    password: '',
    passwordConfirm: '',
  },
  login: {
    username: '',
    password: '',
  },
};

/* 
* immer 를 사용하여 값을 수정하는 리듀서 입니다. 
리듀서에서 상태를 업데이트할 떄는 불변성을 지켜야 하기떄문에 spread연산자(...)를 활용했습니다.
/gyuo/2021-09-22
*/
const auth = handleActions(
  {
    [CHANGE_FIELD]: (state, { payload: { form, key, value } }) =>
      produce(state, (draft) => {
        draft[form][key] = value; // 예: state.register.usernmae을 바꾼다.
      }),
    [INITIALIZE_FORM]: (state, { payload: form }) => ({
      ...state,
      [form]: initialState[form],
    }),
  },
  initialState,
);

export default auth;
