import './form-input.styles.scss';

const FormInput = ({ handleChange, label, ...otherProps }) => {
  return (
    <div className="group">
      <input className="form-input" onChange={handleChange} {...otherProps} />
      <label className={`${otherProps.value ? 'shrink' : ''} form-input-label`}>
        {label.split('').map((label, idx) => (
          <span key={idx} style={{ transitionDelay: `${idx * 50}ms` }}>
            {label}
          </span>
        ))}
      </label>
    </div>
  );
};

export default FormInput;
