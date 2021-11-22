import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router';

import FormInput from '../form-input/form-input.component';
import CustomButton from '../custom-button/custom-button.component';
import { inputs } from '../../utils/constants';
import ChangeForm from '../change-form/change-form.component';

import {
  auth,
  signInWithGoogle,
  getAllUsers,
} from '../../firebase/firabase.utils';

import './sign-in.styles.scss';

const SignIn = ({ changeIsLoading, isLoading, changeIsExist }) => {
  const [user, setUser] = useState({
    email: '',
    password: '',
  });

  useEffect(() => {
    getAllUsers();
  }, [isLoading]);

  const navigate = useNavigate();

  const handleChange = event => {
    const { name, value } = event.target;

    setUser({ ...user, [name]: value });
  };

  const handleSubmit = async event => {
    event.preventDefault();

    const { email, password } = user;

    try {
      await auth.signInWithEmailAndPassword(email, password);
      changeIsLoading(true);

      setUser({ email: '', password: '' });
      navigate('menu');
    } catch (error) {
      console.log(error);
    }

    setUser({ email: '', password: '' });
  };

  const handleButtonClick = () => {
    changeIsLoading(true);
    navigate('menu');
    signInWithGoogle();
  };

  const getInputs = inputs => {
    return inputs
      .filter(input => input.name === 'email' || input.name === 'password')
      .map(input => {
        return (
          <FormInput
            key={input.id}
            {...input}
            handleChange={handleChange}
            value={user[input.name]}
          />
        );
      });
  };

  return (
    <form className="sign-in" onSubmit={handleSubmit}>
      {getInputs(inputs)}
      <div className="button-group">
        <CustomButton type="submit">Sign in</CustomButton>
        <CustomButton type="button" onClick={handleButtonClick} isGoogleSignIn>
          Sign in with Google
        </CustomButton>
      </div>
      <ChangeForm
        changeIsExist={changeIsExist}
        name="Sign Up"
        title="Don't you have an account?"
      />
    </form>
  );
};

export default SignIn;
