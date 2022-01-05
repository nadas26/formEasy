import Input from "./Input";

const FormField = (props) => {
  const { children, as: Component = Input, ...otherProps } = props;

  return (
    <label className="block">
      {children}
      <Component {...otherProps} />
    </label>
  );
};

export default FormField;
