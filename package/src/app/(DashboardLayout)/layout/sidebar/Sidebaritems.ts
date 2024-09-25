export interface ChildItem {
  id?: number | string;
  name?: string;
  icon?: any;
  children?: ChildItem[];
  item?: any;
  url?: any;
  color?: string;
  disabled?:boolean,
  subtitle?:string,
  badge?:boolean,
  badgeType?:string,
}

export interface MenuItem {
  heading?: string;
  name?: string;
  icon?: any;
  id?: number;
  to?: string;
  items?: MenuItem[];
  children?: ChildItem[];
  url?: any;
  disabled?:boolean,
  subtitle?:string,
  badgeType?:string,
  badge?:boolean,
}


import { uniqueId } from "lodash";

const SidebarContent: MenuItem[] = [
  {
    heading: "Home",
    children: [
      {
        name: "Dashboard",
        icon: 'tabler:aperture',
        id: uniqueId(),
        url: "/",
      },
    ],
  },
  {
    heading: "Utilities",
    children: [
      {
        name: "Typography",
        icon: 'tabler:typography',
        id: uniqueId(),
        url: "/utilities/typography",
      },
      {
        name: "Table",
        icon: 'tabler:table',
        id: uniqueId(),
        url: "/utilities/table",
      },
      {
        name: "Form",
        icon: 'tabler:brand-terraform',
        id: uniqueId(),
        url: "/utilities/form",
      },
      {
        name: "Shadow",
        icon: 'tabler:layers-subtract',
        id: uniqueId(),
        url: "/utilities/shadow",
      },
    ],
  },
  {
    heading: "Auth",
    children: [
      {
        name: "Login",
        icon: 'tabler:login-2',
        id: uniqueId(),
        url: "/auth/login",
      },
      {
        name: "Register",
        icon: 'tabler:user-plus',
        id: uniqueId(),
        url: "/auth/register",
      },
    ],
  },
  {
    heading: "Extra",
    children: [
      {
        name: "Icons",
        icon: 'tabler:mood-smile',
        id: uniqueId(),
        url: "/icons/tabler",
      },
      {
        name: "Sample Page",
        icon: 'tabler:aperture',
        id: uniqueId(),
        url: "/sample-page",
      },
    ],
  },


];

export default SidebarContent;
