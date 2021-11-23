import { useNavigate } from 'react-router';

import './error-page.styles.scss';

import Img from '../../assets/lookatyou.gif';

const ErrorPage = () => {
  const navigate = useNavigate();

  return (
    <section className="error-page">
      <img className="error-img" src={Img} alt="" />
      <p className="message">Did you take the wrong bus?</p>
      <div className="bus-button">
        <button className="btn" onClick={() => navigate('/')}>
          Stop
        </button>
      </div>
    </section>
  );
};

export default ErrorPage;
