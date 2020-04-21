import React from "react";
import { RouteComponentProps, Link } from "react-router-dom";
import Counter from "../components/Counter";

export const TestScreen1: React.FC<RouteComponentProps> = (props) => {
  return (
    <div>
      <Link to="/next">to next</Link>
      <Counter />
    </div>
  );
};

export const TestScreen2: React.FC<RouteComponentProps> = (props) => {
  console.log(props);
  return (
    <Link to="/next-next">
      <p>To next screen</p>
    </Link>
  );
};

export const TestScreen3: React.FC<RouteComponentProps> = (props) => {
  console.log(props);
  return (
    <Link to="/">
      <p>to home</p>
    </Link>
  );
};
