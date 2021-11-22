import Loading from '../loading-page/loading.component';
import Menu from '../../Components/menu/menu.component';

import './menu.styles.scss';

const MenuPage = props => {
  return (
    <section className="menu-page">
      {!props.currentUser ? <Loading /> : <Menu {...props} />}
    </section>
  );
};

export default MenuPage;
