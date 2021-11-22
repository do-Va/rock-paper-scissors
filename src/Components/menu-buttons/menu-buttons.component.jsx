import { useNavigate } from 'react-router';

import './menu-buttons.styles.scss';

const MenuButtons = () => {
  const navigate = useNavigate();

  return (
    <div className="menu-buttons">
      <button className="btn" onClick={() => navigate('/game')}>
        VS Computer
      </button>
      <button className="btn" disabled>
        Coming Soon
      </button>
    </div>
  );
};

export default MenuButtons;
