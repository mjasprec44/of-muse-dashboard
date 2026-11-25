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
  ChartColumnBigIcon,
  CreditCard,
  Headset,
  LayoutDashboard,
  LogOut,
  Megaphone,
  Settings,
  Users,
} from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";

// Define your navigation items
const mainNav = [
  {
    title: "Dashboard",
    description: "Agency-wide KPIs and trends",
    url: ROUTES.DASHBOARD,
    icon: LayoutDashboard,
  },
  {
    title: "Creators",
    description: "Performance and account status",
    url: ROUTES.CREATORS,
    icon: Users,
  },
  {
    title: "Chatters",
    description: "Sales and productivity",
    url: ROUTES.CHATTERS,
    icon: Headset,
  },
  {
    title: "Promotions",
    description: "Tracking links and acquisition",
    url: ROUTES.PROMOTIONS,
    icon: Megaphone,
  },
  {
    title: "Fans",
    description: "Subscriber growth, spending, and retention",
    url: ROUTES.FANS,
    icon: Users,
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
              <ChartColumnBigIcon className="size-4" />
            </Link>
          </div>
          <div className="flex flex-col gap-0.5 leading-none">
            <h1 className="font-semibold text-lg">Agency Dashboard</h1>
          </div>
        </div>
      </SidebarHeader>

      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel className="text-lg">Main</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {mainNav.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton
                    isActive={pathname === item.url}
                    className="h-auto"
                  >
                    <Link href={item.url} className="flex items-center gap-3">
                      <item.icon className="h-5! w-5!" />

                      <div className="flex flex-col gap-0">
                        <p className="text-lg tracking-wider">{item.title}</p>
                        {/* <span className="text-muted-foreground text-xs p-0">
                          {item.description}
                        </span> */}
                      </div>
                    </Link>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
        <SidebarGroup>
          <SidebarGroupLabel className="text-lg">Settings</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {settingsNav.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton isActive={pathname === item.url}>
                    <Link className="flex items-center gap-3" href={item.url}>
                      <item.icon className="h-5! w-5!" />
                      <p className="text-lg tracking-wider">{item.title}</p>
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
