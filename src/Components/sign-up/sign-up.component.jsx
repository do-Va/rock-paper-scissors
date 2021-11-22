import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router';

import FormInput from '../form-input/form-input.component';
import CustomButton from '../custom-button/custom-button.component';
import { inputs } from '../../utils/constants';
import ChangeForm from '../change-form/change-form.component';

import {
  auth,
  createUserProfileDocument,
  getAllUsers,
} from '../../firebase/firabase.utils';

import './sign-up.styles.scss';

const SignUp = ({ changeIsLoading, isLoading, changeIsExist }) => {
  const navigate = useNavigate();

  useEffect(() => {
    getAllUsers();
  }, [isLoading]);

  const [user, setUser] = useState({
    displayName: '',
    email: '',
    password: '',
    confirmPassword: '',
  });

  const handleSubmit = async event => {
    event.preventDefault();
    changeIsLoading(true);
    navigate('menu');

    const { displayName, email, password, confirmPassword } = user;

    if (password !== confirmPassword) {
      alert("password don't match");
      return;
    }

    try {
      const { user } = await auth.createUserWithEmailAndPassword(
        email,
        password
      );

      await createUserProfileDocument(user, { displayName });

      setUser({
        displayName: '',
        email: '',
        password: '',
        confirmPassword: '',
      });
    } catch (error) {
      console.error(error);
    }
  };

  const handleChange = event => {
    const { name, value } = event.target;

    setUser({ ...user, [name]: value });
  };

  const getInputs = inputs => {
    return inputs.map(input => {
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
    <form className="sign-up" onSubmit={handleSubmit}>
      {getInputs(inputs)}
      <CustomButton type="submit">Sign Up</CustomButton>
      <ChangeForm
        changeIsExist={changeIsExist}
        name="Sign In"
        title="Do you have an account?"
      />
    </form>
  );
};

export default SignUp;
