import type { Meta, StoryObj } from "@storybook/react";
import React, { useState } from "react";
import { Input } from "../components/input/Input";

const meta = {
  title: "Input",
  component: Input,
  parameters: { layout: "centered" },
} satisfies Meta<typeof Input>;

export default meta;
type Story = StoryObj<typeof meta>;

const TextDemo: React.FC = () => {
  const [v, setV] = useState("");
  return (
    <Input
      label="Name"
      placeholder="Type..."
      value={v}
      onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
        setV(e.target.value)
      }
    />
  );
};

const ClearableDemo: React.FC<React.ComponentProps<typeof Input>> = (props) => {
  const [v, setV] = useState("Hello");
  return (
    <Input
      {...props}
      clearable
      value={v}
      onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
        setV(e.target.value)
      }
    />
  );
};

export const Text: Story = {
  render: () => <TextDemo />,
};

export const Password: Story = {
  args: { label: "Password", type: "password", placeholder: "••••••••" },
  render: (args) => <Input {...args} />,
};

export const Clearable: Story = {
  args: { label: "Search", type: "text", placeholder: "Type…" },
  render: (args) => <ClearableDemo {...args} />,
};
