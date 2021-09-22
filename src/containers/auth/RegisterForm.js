import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import AuthForm from '../../components/auth/AuthForm';
import { changeField, initialzeForm } from '../../modules/auth';

const RegisterForm = (props) => {
  const dispatch = useDispatch();
  const { form } = useSelector(({ auth }) => ({
    form: auth.register,
  }));
  // 인풋 변경 이벤트 핸들러입니다. /gyuo/201-09-22
  const onChange = (e) => {
    const { value, name } = e.target;
    dispatch(
      changeField({
        form: 'register',
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

  // 컴포넌트가 처음 렌더링될 때 form을 초기화함 /gyuo/2021-09-22
  useEffect(() => {
    dispatch(initialzeForm('register'));
  }, [dispatch]);

  return (
    <AuthForm
      type="register"
      form={form}
      onChange={onChange}
      onSubmit={onSubmit}
    />
  );
};
export default RegisterForm;
