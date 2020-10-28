import React from "react";
import Center from "../Center/Center";
import Button from "./Button";

export default {
  title: "Form/control/Button",
  component: Button,
  args: {
    children: "contenido de adentro",
  },
 
};

export const Primary = () => <Button variant="primary">Primary</Button>;

export const Secondary = () => <Button variant="secondary">Secondary</Button>;

export const Success = () => <Button variant="success">Success</Button>;

export const Danger = () => (
    <Button variant="danger">Danger</Button>
);

const Template = (args) => <Button {...args} />;

export const PrimaryA = Template.bind({});
PrimaryA.args = {
  variant: "primary",
  // children:'short button test'
};

PrimaryA.storyName = "ShortButton";

export const LongPrimaryA = Template.bind({});
LongPrimaryA.args = {
  variant: "primary",
  children: "Long Primary Args",
};

LongPrimaryA.storyName = "long button";

export const SecondaryA = Template.bind({});
SecondaryA.args = {
  variant: "secondary",
  children: "Secondary Args",
};
