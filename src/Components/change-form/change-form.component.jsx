import './change-form.styles.scss';

const ChangeForm = ({ title, name, changeIsExist }) => {
  const handleClick = () => {
    changeIsExist();
  };

  return (
    <div className="title-container">
      <p className="title">{title}</p>
      <p className="sign-up" onClick={handleClick}>
        {name}
      </p>
    </div>
  );
};

export default ChangeForm;
