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
} from "@/components/ui/sidebar";
import { ROUTES } from "@/utils/constants/routes";
import {
  Briefcase,
  CreditCard,
  LayoutDashboard,
  LogOut,
  Settings,
  Users,
  UsersRoundCollaborationIcon,
} from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";

// Define your navigation items
const mainNav = [
  { title: "Dashboard", url: ROUTES.DASHBOARD, icon: LayoutDashboard },
  { title: "Creators", url: ROUTES.CREATORS, icon: Users },
  {
    title: "Chatters",
    url: ROUTES.CHATTERS,
    icon: UsersRoundCollaborationIcon,
  },
];

const settingsNav = [
  { title: "Settings", url: ROUTES.SETTINGS, icon: Settings },
  { title: "Billing", url: ROUTES.BILLING, icon: CreditCard },
];

export function AppSidebar() {
  const pathname = usePathname();
  return (
    <Sidebar>
      <SidebarHeader>
        <div className="flex items-center gap-2 px-4 py-2">
          <div className="flex aspect-square size-8 items-center justify-center rounded-lg bg-primary text-primary-foreground">
            <Link href="/" className="flex gap-2">
              <Briefcase className="size-4" />
            </Link>
          </div>
          <div className="flex flex-col gap-0.5 leading-none">
            <span className="font-semibold">Muse</span>
          </div>
        </div>
      </SidebarHeader>

      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel>Main</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {mainNav.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton isActive={pathname === item.url}>
                    <Link href={item.url} className="flex gap-2">
                      <item.icon />
                      <span>{item.title}</span>
                    </Link>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
        <SidebarGroup>
          <SidebarGroupLabel>Settings</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {settingsNav.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton isActive={pathname === item.url}>
                    <Link className="flex gap-2" href={item.url}>
                      <item.icon />
                      <span>{item.title}</span>
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
            <SidebarMenuButton>
              <LogOut />
              <span>Log out</span>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarFooter>
    </Sidebar>
  );
}
