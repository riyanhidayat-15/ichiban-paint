"use client";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  useSidebar,
} from "../ui/sidebar";
import {
  Coffee,
  EllipsisVertical,
  LayoutDashboard,
  LogOut,
  Package,
  PaintBucket,
  Video,
} from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "../ui/dropdown-menu";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";
import Link from "next/link";
import { usePathname } from "next/navigation";

const AppSidebar = () => {
  const { isMobile } = useSidebar();
  const pathName = usePathname();

  const menus = [
    { label: "Dashboard", href: "/admin", icon: LayoutDashboard },
    { label: "Products", href: "/admin/products", icon: Package },
    { label: "Contents", href: "/admin/contents", icon: Video },
  ];
  return (
    <Sidebar>
      <SidebarHeader>
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton size={"lg"}>
              <div className="flex items-center gap-2 self-center font-semibold">
                <div className="bg-red-600 flex p-2 items-center justify-center rounded-md">
                  <PaintBucket className="size-4" />
                </div>
                <h1 className="text-lg font-bold">ICHIBAN PAINT</h1>
              </div>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarHeader>
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel className="text-xs font-semibold tracking-wider uppercase text-muted-foreground px-2">
            Main Menu
          </SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {menus.map((item) => (
                <SidebarMenuItem key={item.href}>
                  <SidebarMenuButton
                    asChild
                    isActive={pathName === item.href}
                    className={`py-4 my-1 ${
                      pathName === item.href
                        ? "!bg-red-600 !text-white hover:!bg-red-700 hover:!text-white"
                        : ""
                    }`}
                  >
                    <Link href={item.href} className="flex items-center gap-2">
                      <item.icon size={18} />
                      <span className="text-sm font-medium">{item.label}</span>
                    </Link>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
      <SidebarFooter>
        <SidebarMenu>
          <SidebarMenuItem>
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <SidebarMenuButton size={"lg"}>
                  <Avatar className="h-8 w-8 rounded-lg">
                    <AvatarImage src={""} alt="" />
                    <AvatarFallback className="rounded-lg ">A</AvatarFallback>
                  </Avatar>
                  <div className=" leading-tight">
                    <h4 className="truncate font-medium">Riyan Hidayat</h4>
                    <p className="text-muted-foreground truncate text-xs">
                      Admin
                    </p>
                  </div>
                  <EllipsisVertical className="ml-auto size-4" />
                </SidebarMenuButton>
              </DropdownMenuTrigger>
              <DropdownMenuContent
                className="min-w-56 rounded-lg"
                side={isMobile ? "bottom" : "right"}
                align="end"
                sideOffset={4}
              >
                <DropdownMenuLabel className="p-0 font-normal ">
                  <div className="flex items-center gap-2 px-1 py-1.5 ">
                    <Avatar className="h-8 w-8 rounded-lg">
                      <AvatarImage src={""} alt="" />
                      <AvatarFallback className="rounded-lg ">A</AvatarFallback>
                    </Avatar>
                    <div className=" leading-tight">
                      <h4 className="truncate font-medium">Riyan Hidayat</h4>
                      <p className="text-muted-foreground truncate text-xs">
                        Admin
                      </p>
                    </div>
                  </div>
                </DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuGroup>
                  <DropdownMenuItem>
                    <LogOut />
                    Logout
                  </DropdownMenuItem>
                </DropdownMenuGroup>
              </DropdownMenuContent>
            </DropdownMenu>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarFooter>
    </Sidebar>
  );
};

export default AppSidebar;
