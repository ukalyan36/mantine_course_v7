import { AppShell } from "@mantine/core";
import { SideMenuBar } from "./SideMenuBar";

const Navbar = () => {
  return (
    <AppShell.Navbar p="md" style={{ gap: "10px" }}>
      <SideMenuBar />
    </AppShell.Navbar>
  );
};

export default Navbar;
