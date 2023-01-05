import { useDispatch } from 'react-redux';
import { register } from 'redux/auth/operatons';

export const RegistrationForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = event => {
    event.preventDefault();
    const form = event.currentTarget;
    dispatch(register({
         name: form.elements.name.value, 
         email: form.elements.email.value, 
         password: form.elements.password.value,
        })
         );
         form.reset();
  };

  return (
    <div>
      <h1>Registration</h1>
      <form onSubmit={handleSubmit}>
        <label>
          {' '}
          Name
          <input type="text" name="name"></input>
        </label>
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
        <button>Registration</button>
      </form>
    </div>
  );
}
