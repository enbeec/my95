import React, { useState, useRef } from "react";
import {
  AppBar,
  Toolbar,
  Button,
  Cutout,
  List,
  ListItem,
  Divider,
  Slider,
} from "react95";
import useClickOutside from "../hooks/useClickOutside";
import { AppToggle } from "./AppToggle";
import useKeyboardShortcut from "use-keyboard-shortcut";
import vcLogo from "../vc_logo.png";

export const TopBar = ({ openStates, children, ...props }) => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [optionsMenuOpen, setOptionsMenuOpen] = useState(false);

  const dummyRef = useRef();
  const menuRef = useRef();
  useClickOutside(menuRef, () => {
    menuOpen && setMenuOpen(!menuOpen);
  });

  return (
    <AppBar>
      <Toolbar style={{ display: "flex" }}>
        <Button
          style={{ fontWeight: "bold" }}
          onClick={() => setMenuOpen(!menuOpen)}
          active={menuOpen}
          ref={menuRef}
        >
          <img style={{ height: "20px" }} src={vcLogo} />
          <div style={{ height: "20px" }}>Menu</div>
        </Button>
        {/* I got a menu tree to work!! */}
        {/* TODO figure out how to space things better */}
        {menuOpen && (
          <List style={{ position: "fixed", left: "0.5rem", top: "1.8rem" }}>
            <ListItem size="sm" disabled>
              Launch
            </ListItem>
            <Divider />
            <AppToggle size="sm" state={openStates.notecard}>
              Notecard
            </AppToggle>
            <AppToggle size="sm" state={openStates.files}>
              Files
            </AppToggle>
            <AppToggle size="sm" state={openStates.about}>
              About
            </AppToggle>
            <Divider />
            <ListItem
              ref={menuRef}
              size="sm"
              onClick={() => setOptionsMenuOpen(!optionsMenuOpen)}
            >
              Options {">"}
            </ListItem>
            {optionsMenuOpen && (
              <List
                style={{
                  position: "fixed",
                  left: "7rem",
                  top: "10.5rem",
                }}
              >
                <ListItem size="sm">I am an Option</ListItem>
                <ListItem size="sm">And so am I!</ListItem>
                <ListItem size="sm" disabled>
                  A slider option!
                </ListItem>
                <Divider />
                <Slider
                  ref={menuRef}
                  defaultValue={10}
                  style={{
                    marginBottom: "0",
                    marginLeft: "0.4rem",
                  }}
                  size="90%"
                />
              </List>
            )}
          </List>
        )}
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "flex-start",
          }}
        >
          {children}
        </div>
        <Cutout
          style={{
            height: "40px",
            fontWeight: "bold",
            marginLeft: "auto",
            alignSelf: "flex-end",
          }}
        >
          Welcome to my95!
        </Cutout>
      </Toolbar>
    </AppBar>
  );
};
