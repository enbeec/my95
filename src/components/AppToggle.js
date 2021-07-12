import React from "react";
import { ListItem } from "react95";

export const AppToggle = ({ state, children, ...props }) => {
  const [appOpen, setAppOpen] = state;
  return (
    <ListItem onClick={() => setAppOpen(!appOpen)} {...props}>
      {children} {appOpen && "✓"}
    </ListItem>
  );
};
