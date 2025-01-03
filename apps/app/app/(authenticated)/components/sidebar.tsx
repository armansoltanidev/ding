"use client";

import { UserButton } from "@repo/auth/client";
import { ModeToggle } from "@repo/design-system/components/mode-toggle";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@repo/design-system/components/ui/collapsible";

import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarInset,
  SidebarMenu,
  SidebarMenuAction,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarMenuSub,
  SidebarMenuSubButton,
  SidebarMenuSubItem,
  useSidebar,
} from "@repo/design-system/components/ui/sidebar";

import { cn } from "@repo/design-system/lib/utils";
import {
  AnchorIcon,
  BookOpenIcon,
  BotIcon,
  CalendarRange,
  ChevronDownIcon,
  EarthIcon,
  LifeBuoyIcon,
  SendIcon,
  Settings2Icon,
} from "lucide-react";
import type { ReactNode } from "react";

type GlobalSidebarProperties = {
  readonly children: ReactNode;
};

const data = {
  user: {
    name: "shadcn",
    email: "m@example.com",
    avatar: "/avatars/shadcn.jpg",
  },
  navMain: [
    {
      title: "شــارژ بین الملل",
      url: "#",
      icon: EarthIcon,
      isActive: true,
      items: [
        {
          title: "شارژ مستقیم افغانستان",
          url: "#",
        },
        {
          title: "بسته مستقیم افغانستان",
          url: "#",
        },
        {
          title: "بسته های رومینگ افغانستان",
          url: "#",
        },
      ],
    },
    {
      title: "مدیریت سفارشات",
      url: "#",
      icon: CalendarRange,
      isActive: true,
      items: [
        {
          title: "پیگیری سفارشات",
          url: "#",
        },
        {
          title: "سفارشات  در انتظار",
          url: "#",
        },
        {
          title: "درخواست ویرایش سفارش",
          url: "#",
        },
      ],
    },
    {
      title: "مدیریت کارت ها",
      url: "#",
      icon: BotIcon,
      isActive: true,
      items: [
        {
          title: "ثبت کارت جدید",
          url: "#",
        },
        {
          title: "ویرایش کارت",
          url: "#",
        },
        {
          title: "درخواست رفع مسدودی",
          url: "#",
        },
      ],
    },

    {
      title: "گزارش ها",
      url: "#",
      isActive: true,
      icon: BookOpenIcon,
      items: [
        {
          title: "گزارش تراکنش ",
          url: "#",
        },
        {
          title: "گزارش افزایش موجودی",
          url: "#",
        },
        {
          title: "گزارش کلی",
          url: "#",
        },
        {
          title: "نمودار فروش",
          url: "#",
        },
      ],
    },
    {
      title: "تنظیمات",
      url: "#",
      icon: Settings2Icon,
      items: [
        {
          title: "General",
          url: "#",
        },
        {
          title: "Team",
          url: "#",
        },
        {
          title: "Billing",
          url: "#",
        },
        {
          title: "Limits",
          url: "#",
        },
      ],
    },
  ],
  navSecondary: [
    {
      title: "Webhooks",
      url: "/webhooks",
      icon: AnchorIcon,
    },
    {
      title: "Support",
      url: "#",
      icon: LifeBuoyIcon,
    },
    {
      title: "Feedback",
      url: "#",
      icon: SendIcon,
    },
  ],
};

export const GlobalSidebar = ({ children }: GlobalSidebarProperties) => {
  const sidebar = useSidebar();

  return (
    <>
      <Sidebar side="right">
        <SidebarHeader>
          <SidebarMenu>
            <SidebarMenuItem>
              <div
                className={cn(
                  "h-[60px] overflow-hidden transition-all [&>div]:w-full",
                  sidebar.open ? "" : "-mx-1"
                )}
              >
                <div className="flex flex-col px-4 py-3">
                  <h2 className="text-xs">خوش آمدید</h2>
                  <p className="text-lg">آرمان سلطانی</p>
                </div>
              </div>
            </SidebarMenuItem>
          </SidebarMenu>
        </SidebarHeader>
        <SidebarContent>
          <SidebarGroup>
            <SidebarGroupLabel>خدمات شــارژ و بسته</SidebarGroupLabel>
            <SidebarMenu>
              {data.navMain.map((item) => (
                <Collapsible
                  key={item.title}
                  asChild
                  defaultOpen={item.isActive}
                >
                  <SidebarMenuItem>
                    <SidebarMenuButton asChild tooltip={item.title}>
                      <a href={item.url}>
                        <item.icon />
                        <span>{item.title}</span>
                      </a>
                    </SidebarMenuButton>
                    {item.items?.length ? (
                      <>
                        <CollapsibleTrigger asChild>
                          <SidebarMenuAction className="data-[state=open]:rotate-90">
                            <ChevronDownIcon />
                            <span className="sr-only">Toggle</span>
                          </SidebarMenuAction>
                        </CollapsibleTrigger>
                        <CollapsibleContent>
                          <SidebarMenuSub>
                            {item.items?.map((subItem) => (
                              <SidebarMenuSubItem key={subItem.title}>
                                <SidebarMenuSubButton asChild>
                                  <a href={subItem.url}>
                                    <span>{subItem.title}</span>
                                  </a>
                                </SidebarMenuSubButton>
                              </SidebarMenuSubItem>
                            ))}
                          </SidebarMenuSub>
                        </CollapsibleContent>
                      </>
                    ) : null}
                  </SidebarMenuItem>
                </Collapsible>
              ))}
            </SidebarMenu>
          </SidebarGroup>
          <SidebarGroup className="mt-auto">
            <SidebarGroupContent>
              <SidebarMenu>
                {data.navSecondary.map((item) => (
                  <SidebarMenuItem key={item.title}>
                    <SidebarMenuButton asChild>
                      <a href={item.url}>
                        <item.icon />
                        <span>{item.title}</span>
                      </a>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                ))}
              </SidebarMenu>
            </SidebarGroupContent>
          </SidebarGroup>
        </SidebarContent>
        <SidebarFooter>
          <SidebarMenu>
            <SidebarMenuItem className="flex items-center gap-2">
              <UserButton
                showName
                appearance={{
                  elements: {
                    rootBox: "flex overflow-hidden w-full",
                    userButtonBox: "flex-row-reverse",
                    userButtonOuterIdentifier: "truncate pl-0",
                  },
                }}
              />
              <ModeToggle />
            </SidebarMenuItem>
          </SidebarMenu>
        </SidebarFooter>
      </Sidebar>
      <SidebarInset>{children}</SidebarInset>
    </>
  );
};
