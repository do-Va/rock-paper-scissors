import Scores from '../scores/scores.component';
import MenuButtons from '../menu-buttons/menu-buttons.component';
import Logo from '../logo/logo.component';
import SignOut from '../sign-out/sign-out.component';

import './menu.styles.scss';

const Menu = props => {
  return (
    <section className="menu">
      <SignOut {...props} />
      <Logo />
      <Scores {...props} />
      <MenuButtons />
    </section>
  );
};

export default Menu;
