import { useState } from 'react';

import SignIn from '../../Components/sign-in/sign-in.component';
import SignUp from '../../Components/sign-up/sign-up.component';

import './form-page.styles.scss';

const FormPage = props => {
  const [isExist, setIsExist] = useState(true);

  const changeIsExist = () => {
    setIsExist(!isExist);
  };

  return (
    <section className="form-page">
      {isExist ? (
        <SignIn {...props} changeIsExist={changeIsExist} />
      ) : (
        <SignUp {...props} changeIsExist={changeIsExist} />
      )}
    </section>
  );
};

export default FormPage;
