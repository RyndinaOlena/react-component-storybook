import type { Meta, StoryFn } from "@storybook/react";
import { useState } from "react";
import { SidebarMenu, type MenuItem } from "../components/sidebarMenu";

const meta: Meta<typeof SidebarMenu> = {
  title: "Navigation/SidebarMenu",
  component: SidebarMenu,
  parameters: { layout: "centered" },
};
export default meta;

const items: MenuItem[] = [
  { label: "Dashboard" },
  { label: "Products", children: [{ label: "List" }, { label: "Create" }] },
  { label: "Settings" },
];

export const Basic: StoryFn<typeof SidebarMenu> = (args) => {
  const [open, setOpen] = useState(false);
  return (
    <>
      <button onClick={() => setOpen(true)}>Open Menu</button>
      <SidebarMenu
        {...args}
        open={open}
        onClose={() => setOpen(false)}
        items={items}
      />
    </>
  );
};
Basic.args = { items };
