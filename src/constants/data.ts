import { UserJob, UserJobs } from "@/lib/schemas";
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
export interface Parameter {
  PeriodoRSI: number;
  EMA: boolean;
  "High Limit": number;
  "Low Limit": number;
}
export type Strategy = {
  name: string;
  parameters: { [k: string]: string | number | boolean };
  timeframe: string;
  is_custom: boolean;
  custom_strategy_id: string;
};

export type Executor = {
  id: string;
  last_change: string;
  name: string;
  symbol: string;
  quantity: number;
  take_profit: number;
  stop_loss: number;
  paused: boolean;
  close_mode: string;
  consensus_treshold: number;
  start_mode: string;
  leverage: number;
  quantity_mode: string;
  strategys: Strategy[];
};

type BacktestTargets = {
  symbol: string;
  quantity: number | null;
};

export type RunBacktestRequestBody = {
  end_time: string;
  start_time: string;
  executer: Executor;
  targets: Array<BacktestTargets> | string;
};
export type CreateExecutorRequestBody = {
  name: string;
  symbol: string;
  quantity: number;
  take_profit: number;
  stop_loss: number;
  paused: boolean;
  close_mode: string;
  consensus_treshold: number;
  start_mode: string;
  leverage: number;
  quantity_mode: string;
  strategys: Array<{
    name: string;
    parameters: { [k: string]: string | number | boolean };
    timeframe: string;
  }>;
};
export type backtestType = {
  backtestData: UserJobs;
  isLoading: boolean;
  error: string | null;
  getBacktest: () => Promise<void>;
};

export type dataState = {
  data: any[];
  total_count: number;
  executors?: any[];
  isLoading: boolean;
  error: string | null;
  getData: () => Promise<void>;
  createExecutor: (requestBody: CreateExecutorRequestBody) => Promise<void>;
  editExecutor: (requestBody: CreateExecutorRequestBody) => Promise<void>;
  cloneExecutor: (body: {
    executor_id: string;
    clone_mode: string;
    symbols: string[];
  }) => Promise<void>;
  deleteExecutor: (id: string) => Promise<void>;
  runBacktest: (requestBody: RunBacktestRequestBody) => Promise<void>;
};
export type dataSymbol = {
  data: any[];
  loaded: boolean;
  executors?: any[];
  isLoading: boolean;
  error: string | null;
  getData: () => Promise<void>;
};
export type strategiesAvail = {
  data: any[];
  executors?: any[];
  isLoading: boolean;
  error: string | null;
  getData: () => Promise<void>;
};
interface Metadata {
  backtest_metadata: {
    executor_copy: {
      name: string;
      symbol: string;
      quantity: number;
      take_profit: number;
      stop_loss: number;
      paused: boolean;
      close_mode: string;
      consensus_treshold: number;
      start_mode: string;
      leverage: number;
      quantity_mode: string;
      id: string;
      last_change: string;
      strategys: { name: string }[];
    };
  };
}
export type Job = {
  id: string;
  type: string;
  instructions: string;
  result: string;
  user_id: string;
  settings: string;
  created_date: string;
  metadata: Metadata;
  progress: string;
};

export type Executions = {
  name: string;
  leverage: number;
  unerealized_Profit: number;
  start_mode: string;
  quantity: number;
};
export type Settings = {
  data: any[];
  settingsData: { [key: string]: any };
  apiData: ApiBody;
  isLoading: boolean;
  error: string | null;
  getAvailable: () => Promise<void>;
  getSetting: () => Promise<void>;
  getApiKeys: () => Promise<void>;
  changeSetting: (requestBody: settingBody) => Promise<void>;
  editApiKey: (requestBody: ApiBody) => Promise<void>;
};
export type settingBody = {
  tag: string;
  new_value: string;
};
export type ApiBody = {
  api_key: string;
  api_secret: string;
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
    href: "/dashboard/live_execution",
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
