import "./styles.css";
import Button from "./components/Button";
import { useCallback, useState } from "react";
import FormField from "./components/FormField";

const CustomSelect = () => (
  <select className="border-2 border-slate-200 p-2">
    <option>YES</option>
    <option>NO</option>
  </select>
);

const App = () => {
  const handleSubmit = useCallback((event) => {
    const data = new FormData(event.target);

    console.log(Object.fromEntries(data.entries()));

    event.preventDefault();
  }, []);
  const [password, setPassword] = useState("");
  const handleChange = useCallback(
    (event) => setPassword(event.target.value),
    []
  );

  return (
    <form
      className="p-4 flex flex-col gap-4 "
      noValidate
      onSubmit={handleSubmit}
    >
      <FormField type="email" name="email">
        E-mail
      </FormField>
      <FormField type="password" name="password" onChange={handleChange}>
        Password
      </FormField>
      <p className="text-red-500">
        {password && password.length < 8 ? "Password too short" : ""}
      </p>
      <FormField name="isVegan" as={CustomSelect}>
        Vegan?
      </FormField>
      <p className="mt-4">
        <Button type="submit">Sign In</Button>
      </p>
    </form>
  );
};

export default App;
