import axios from "axios";
import { useEffect, useState } from "react";
import { Redirect } from "react-router";
import { Button, Checkbox, Form } from "semantic-ui-react";

export default function Update() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [checkbox, setCheckbox] = useState(false);
  const [id, setID] = useState(null);
  const [redirect, setRedirect] = useState(false);

  useEffect(() => {
    setID(localStorage.getItem("ID"));
    setFirstName(localStorage.getItem("First Name"));
    setLastName(localStorage.getItem("Last Name"));
    setCheckbox(localStorage.getItem("Checkbox Value"));
  }, []);

  const updateAPIData = () => {
    axios
      .put(`https://615232494a5f22001701d67c.mockapi.io/api/fakeData/${id}`, {
        firstName,
        lastName,
        checkbox,
      })
      .then(() => {
        setRedirect(true);
      });
  };

  return (
    <Form className="create-form">
      <Form.Field>
        <label>First Name</label>
        <input
          value={firstName}
          placeholder="First Name"
          onChange={(e) => setFirstName(e.target.value)}
        />
      </Form.Field>
      <Form.Field>
        <label>Last Name</label>
        <input
          value={lastName}
          placeholder="Last Name"
          onChange={(e) => setLastName(e.target.value)}
        />
      </Form.Field>
      <Form.Field>
        <Checkbox
          checked={checkbox}
          label="I agree to the Terms and Conditions"
          onChange={(e) => setCheckbox(!checkbox)}
        />
      </Form.Field>
      <Button type="submit" onClick={updateAPIData}>
        Update
      </Button>
      {redirect ? <Redirect push to="/read" /> : null}
    </Form>
  );
}
