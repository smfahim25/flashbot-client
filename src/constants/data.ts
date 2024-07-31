import { NavItem } from "@/types";

export type User = {
  id: number;
  first_name: string;
  company: string;
  role: string;
  verified: boolean;
  status: string;
  access_token?: string;
};
export const users: User[] = [
  {
    id: 1,
    first_name: "Candice Schiner",
    company: "Dell",
    role: "Frontend Developer",
    verified: false,
    status: "Active",
  },
  {
    id: 2,
    first_name: "John Doe",
    company: "TechCorp",
    role: "Backend Developer",
    verified: true,
    status: "Active",
  },
  {
    id: 3,
    first_name: "Alice Johnson",
    company: "WebTech",
    role: "UI Designer",
    verified: true,
    status: "Active",
  },
  {
    id: 4,
    first_name: "David Smith",
    company: "Innovate Inc.",
    role: "Fullstack Developer",
    verified: false,
    status: "Inactive",
  },
  {
    id: 5,
    first_name: "Emma Wilson",
    company: "TechGuru",
    role: "Product Manager",
    verified: true,
    status: "Active",
  },
  {
    id: 6,
    first_name: "James Brown",
    company: "CodeGenius",
    role: "QA Engineer",
    verified: false,
    status: "Active",
  },
  {
    id: 7,
    first_name: "Laura White",
    company: "SoftWorks",
    role: "UX Designer",
    verified: true,
    status: "Active",
  },
  {
    id: 8,
    first_name: "Michael Lee",
    company: "DevCraft",
    role: "DevOps Engineer",
    verified: false,
    status: "Active",
  },
  {
    id: 9,
    first_name: "Olivia Green",
    company: "WebSolutions",
    role: "Frontend Developer",
    verified: true,
    status: "Active",
  },
  {
    id: 10,
    first_name: "Robert Taylor",
    company: "DataTech",
    role: "Data Analyst",
    verified: false,
    status: "Active",
  },
];

export type Employee = {
  id: number;
  first_name: string;
  last_name: string;
  email: string;
  phone: string;
  gender: string;
  name: string;
  date_of_birth: string; // Consider using a proper date type if possible
  street: string;
  city: string;
  state: string;
  country: string;
  zipcode: string;
  longitude?: number; // Optional field
  latitude?: number; // Optional field
  job: string;
  profile_picture?: string | null;
  price: string; // Profile picture can be a string (URL) or null (if no picture)
  day: string;
};
export type Executor = {
  id: number;
  name: string;
  tp: string;
  status: string;
  ticker: string;
  size: string; // Consider using a proper date type if possible
  startposition: string;
  createdDate?: string;
};
export type Strategies = {
  id: number;
  name: string;
  purchase: string;
  creation: string;
  updated: string;
};

export const navItems: NavItem[] = [
  {
    title: "Dashboard",
    href: "/dashboard",
    icon: "dashboard",
    label: "Dashboard",
  },
  {
    title: "Statistics",
    href: "/dashboard/statistics",
    icon: "post",
    label: "statistics",
  },
  {
    title: "Executors",
    href: "/dashboard/executors",
    icon: "user",
    label: "Executors",
  },

  {
    title: "Backtest",
    href: "/dashboard/backtest",
    icon: "reset",
    label: "Backtest",
  },
  {
    title: "Live Executions",
    href: "/dashboard/livex",
    icon: "live",
    label: "table",
  },
  {
    title: "Table",
    href: "/dashboard/table",
    icon: "table",
    label: "table",
  },
  {
    title: "Search By",
    href: "/dashboard/searchby",
    icon: "search",
    label: "kanban",
  },
  {
    title: "AI",
    href: "/dashboard/ai",
    icon: "kanban",
    label: "kanban",
  },
  {
    title: "Strategy Builder",
    href: "/dashboard/strategy",
    icon: "reader",
    label: "login",
  },
  {
    title: "Trading View",
    href: "/dashboard/tradingview",
    icon: "barchart",
    label: "login",
  },
];
