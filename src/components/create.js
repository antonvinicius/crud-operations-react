import axios from "axios";
import { useState } from "react";
import { Redirect } from "react-router";
import { Button, Checkbox, Form } from "semantic-ui-react";

export default function Create() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [checkbox, setCheckbox] = useState(false);
  const [redirect, setRedirect] = useState(false);

  const postData = () => {
    axios
      .post("https://615232494a5f22001701d67c.mockapi.io/api/fakeData", {
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
          placeholder="First Name"
          onChange={(e) => setFirstName(e.target.value)}
        />
      </Form.Field>
      <Form.Field>
        <label>Last Name</label>
        <input
          placeholder="Last Name"
          onChange={(e) => setLastName(e.target.value)}
        />
      </Form.Field>
      <Form.Field>
        <Checkbox
          label="I agree to the Terms and Conditions"
          onChange={(e) => setCheckbox(!checkbox)}
        />
      </Form.Field>
      <Button onClick={postData} type="submit">
        Submit
      </Button>
      {redirect ? <Redirect push to="/read" /> : null}
    </Form>
  );
}
