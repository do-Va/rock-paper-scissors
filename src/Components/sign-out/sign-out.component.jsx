import { useEffect } from 'react';
import { useNavigate } from 'react-router';

import { auth, getAllUsers } from '../../firebase/firabase.utils';

import './sign-out.styles.scss';

const SignOut = ({ changeIsLoading, isLoading }) => {
  const navigate = useNavigate();

  useEffect(() => {
    getAllUsers();
  }, [isLoading]);

  const handleClick = () => {
    auth.signOut();
    navigate('/');

    changeIsLoading(false);
  };

  return (
    <button className="sign-out-btn" onClick={handleClick}>
      Sign out
    </button>
  );
};

export default SignOut;
