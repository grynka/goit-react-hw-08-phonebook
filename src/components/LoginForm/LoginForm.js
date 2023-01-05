import { useDispatch } from 'react-redux';
import { login } from 'redux/auth/operatons';

export const LoginForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = event => {
    event.preventDefault();
    const form = event.currentTarget;
    dispatch(login({
         email: form.elements.email.value, 
         password: form.elements.password.value,
        })
         );
         form.reset();
  };

  return (
    <div>
      <h1>Log in</h1>
      <form onSubmit={handleSubmit}>
        <label>
          {' '}
          Email
          <input type="text" name="email"></input>
        </label>
        <label>
          {' '}
          Password
          <input type="text" name="password"></input>
        </label>
        <button type='submit'>Log in</button>
      </form>
    </div>
  );
}
