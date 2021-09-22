import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import AuthForm from '../../components/auth/AuthForm';
import { changeField, initialzeForm } from '../../modules/auth';

/* 
* useDispatch와 useSelector 함수를 사용하여 컴포넌트를 리덕스와 연동시킵니다. connect함수대신 Hooks를 사용했습니다. 
/gyuo/2021-09-22
*/
const LoginForm = () => {
  //생성한 action 을 useDispatch를 통해 발생시킵니다. /gyuo/2021-09-22
  const dispatch = useDispatch();
  // connect함수를 이용하지 않고리덕스의 state를 조회할 수 있습니다. /gyuo/2021-09-22
  const { form } = useSelector(({ auth }) => ({
    form: auth.login,
  }));
  // 인풋 변경 이벤트 핸들러 /gyuo/2021-09-22
  const onChange = (e) => {
    const { value, name } = e.target;
    dispatch(
      changeField({
        form: 'login',
        key: name,
        value,
      }),
    );
  };

  // 폼 등록 이벤트 핸들러 /gyuo/2021-09-22
  const onSubmit = (e) => {
    e.preventDefault();
    // 구현 예정
  };

  /*
   * 컴포넌트가 처음 렌더링될 때 form을 초기화합니다.
  useEffect를 사용하여 맨 처음 렌더링 후 initializeForm 액션 생성 함수를 호출
  이 작업을 하지않으면, 로그인 페이지에서 값을 입력한 뒤 다른 페이지로 이동했다가 다시 돌아왔을 때 값이
  유지된 상태로 보이게 됩니다.  
   /gyuo/2021-09-22
   */
  useEffect(() => {
    dispatch(initialzeForm('login'));
  }, [dispatch]);

  return (
    <AuthForm
      type="login"
      form={form}
      onChange={onChange}
      onSubmit={onSubmit}
    />
  );
};

export default LoginForm;
