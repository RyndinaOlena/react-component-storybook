// Toast.stories.tsx
import type { Meta, StoryObj } from "@storybook/react";
import React, { useState } from "react";
import { Toast } from "../components/toast/toast"; 

const meta = {
  title: "Feedback/Toast",
  component: Toast,
  parameters: { layout: "centered" },
} satisfies Meta<typeof Toast>;
export default meta;
type Story = StoryObj<typeof meta>;


const BasicDemo: React.FC<React.ComponentProps<typeof Toast>> = (args) => {
  const [open, setOpen] = useState(false);
  return (
    <>
      <button onClick={() => setOpen(true)}>Show Toast</button>
      {open && <Toast {...args} onClose={() => setOpen(false)} />}
    </>
  );
};

export const Basic: Story = {
  args: { message: "Saved!", type: "success", duration: 1500 },
  render: (args) => <BasicDemo {...args} />,
};
