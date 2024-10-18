import { Menubar, MenubarMenu, MenubarTrigger } from "@/components/ui/menubar";

export const Navbar = () => {
  return (
    <Menubar>
      <MenubarMenu>
        <MenubarTrigger className="cursor-pointer">Game</MenubarTrigger>
      </MenubarMenu>
      <MenubarMenu>
        <MenubarTrigger className="cursor-pointer">Edit</MenubarTrigger>
      </MenubarMenu>
      <MenubarMenu>
        <MenubarTrigger className="cursor-pointer">View</MenubarTrigger>
      </MenubarMenu>
      <MenubarMenu>
        <MenubarTrigger className="cursor-pointer">Profiles</MenubarTrigger>
      </MenubarMenu>
    </Menubar>
  );
};
