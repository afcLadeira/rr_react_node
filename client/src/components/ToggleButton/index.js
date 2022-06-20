import React, { createContext, useContext, useState } from "react";

function Switch({ on, onClick }) {

const noop = () => {}


  return (
    <input
      style={{ margin: "0 10px" }}
      type="checkbox"
      checked={on}
      onClick={onClick}
      onChange={noop}
    ></input>
  );
}

const ToggleContext = createContext();

ToggleContext.displayName = 'ToggleContext'

function Toggle({ children }) {
  const [on, setOn] = useState(false);

  const toggle = () => setOn(!on);

  return (
    <ToggleContext.Provider value={{ on, toggle }}>
      {children}
    </ToggleContext.Provider>
  );
}

function useToggle() {
  return useContext(ToggleContext);
}

function ToggleOn({ children }) {
  const { on } = useToggle();

  return on ? children : null;
}

function ToggleOff({ children }) {
  const { on } = useToggle();
  return on ? null : children;
}

function ToggleButton(props) {
  const { on, toggle } = useToggle();

  return <Switch on={on} onClick={toggle} {...props}></Switch>;
}

export default function ToggleExample() {
  return (
    <div style={{ marginTop: 20, textAlign: "center" }}>
      <Toggle>
        <ToggleOn>
          <span style={{ padding: 6, backgroundColor: "green" , color:'white'}}>ON</span>
        </ToggleOn>
        <ToggleOff>
          <span style={{ padding: 6, backgroundColor: "red" , color :'white'}}>OFF</span>
        </ToggleOff>
        <ToggleButton></ToggleButton>
      </Toggle>
    </div>
  );
}
