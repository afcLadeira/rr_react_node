import { Button, FormLabel, Input } from "@chakra-ui/react";
import { createContext, useContext, useState } from "react";
import ToggleExample from "../../components/ToggleButton";

const NamesContext = createContext();

function NamesProvider(props) {
  const [state, setState] = useState(() => ({
    lastName: "",
    currentName: "",
    namesList: [],
  }));
  
  function clearList() {
    setState((prevState) => ({ ...prevState, lastName: "", namesList: [] }));
  }

  const value = { state, setState, clearList };

  return (
    <NamesContext.Provider value={value} {...props}></NamesContext.Provider>
  );
}

function NameInput() {
  const { state, setState } = useContext(NamesContext);

  let handleChange = (e) =>
    setState((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));

  return (
    <div className="fieldset" style={{ padding: 10, border: "1px solid blue" }}>
      <h1>Component 1</h1>
      <FormLabel htmlFor="currentName">Name</FormLabel>
      <Input
        type="text"
        name="currentName"
        value={state.currentName}
        onChange={handleChange}
      ></Input>
    </div>
  );
}

function NameDisplay() {
  const { state, setState } = useContext(NamesContext);
  const { currentName, namesList } = state;
  let addNameToList = () => {
    setState({
      lastName: currentName,
      currentName: "",
      namesList: [...namesList, currentName],
    });
  };

  return (
    <div
      className="fieldset"
      style={{
        display: "flex",
        justifyContent: "flex-start",
        flexDirection: "column",
        padding: 10,
        border: "1px solid blue",
      }}
    >
      <h1>Component 2</h1>
      <div>
        Current Name:{" "}
        {state.currentName ? (
          <span
            style={{
              borderRadius: 6,
              backgroundColor: "teal",
              color: "white",
              padding: 5,
            }}
          >
            {state.currentName}
          </span>
        ) : null}
      </div>
      <Button
        disabled={!currentName}
        colorScheme="blue"
        style={{ marginTop: 20 }}
        onClick={addNameToList}
      >
        Add User
      </Button>
    </div>
  );
}

function NameHistory() {
  const { state, clearList } = useContext(NamesContext);

  console.log("state", state);

  //return state.namesList.map(name => <p>{name}</p>)

  return (
    <div
      className="fieldset"
      style={{
        display: "flex",
        flexDirection: "column",
        padding: 10,
        border: "1px solid blue",
      }}
    >
      <h1>Component 3</h1>
      <div style={{ margin: "10px 0" }}>Last insert: {state.lastName}</div>
      <div
        style={{ textAlign: "left", width: "80%", padding: 10, margin: "auto" }}
      >
        <ul>
          {state.namesList.map((name) => (
            <li>{name}</li>
          ))}
        </ul>
      </div>
      <Button colorScheme="blue" variant="outline" onClick={clearList}>
        Clear List
      </Button>
    </div>
  );
}

export default function UseContextTest() {
  return (
    <div>
      <h4>example 1: basic</h4>
      <div style={{ display: "flex", justifyContent: "space-around" }}>
        <NamesProvider>
          <div style={{ display: "flex", flexDirection: "column" }}>
            <NameInput></NameInput>
            <NameDisplay></NameDisplay>
          </div>
          <NameHistory></NameHistory>
        </NamesProvider>
      </div>
      <hr></hr>
      <h4>example 2: compound components</h4>
      <ToggleExample></ToggleExample>
    </div>
  );
}
