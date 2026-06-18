import { BarChart3, Home, LucideIcon, Settings, Users } from "lucide-react";

export interface NavigationItem {
    label: string;
    href: string;
    icon: LucideIcon;
}

export const navigationItems: NavigationItem[] = [
    {
        label: "Dashboard",
        href: "/",
        icon: Home,
    },
    {
        label: "Patients",
        href: "/patients",
        icon: Users,
    },
    {
        label: "Analytics",
        href: "/analytics",
        icon: BarChart3,
    },
    {
        label: "Admin",
        href: "/admin",
        icon: Settings,
    },
]