import { uniqueId } from 'lodash'

export interface ChildItem {
  id?: number | string
  name?: string
  icon?: any
  children?: ChildItem[]
  item?: any
  url?: any
  color?: string
  disabled?: boolean
  subtitle?: string
  badge?: boolean
  badgeType?: string
  isPro?: boolean
}

export interface MenuItem {
  heading?: string
  name?: string
  icon?: any
  id?: number
  to?: string
  items?: MenuItem[]
  children?: ChildItem[]
  url?: any
  disabled?: boolean
  subtitle?: string
  badgeType?: string
  badge?: boolean
  isPro?: boolean
}

const SidebarContent: MenuItem[] = [
  {
    heading: "Home",
    children: [
      {
        name: "Dashboard",
        icon: 'solar:widget-add-line-duotone',
        id: uniqueId(),
        url: "/",
      },
    ],
  },
  {
    heading: 'AI',
    children: [
      {
        name: 'Ai Table Builder',
        icon: 'solar:server-linear',
        id: uniqueId(),
        url: 'https://tailwindbuilder.ai/table-builder',
        isPro: false,

      },
      {
        name: 'Ai Form Builder',
        icon: 'solar:document-add-linear',
        id: uniqueId(),
        url: 'https://tailwindbuilder.ai/form-builder',
        isPro: false,

      },
      {
        id: uniqueId(),
        name: 'Ai Chart Builder',
        icon: 'solar:pie-chart-2-linear',
        url: 'https://tailwindbuilder.ai/chart-builder',
        isPro: false,

      },
    ],
  },
  {
    heading: "Utilities",
    children: [
      {
        name: "Typography",
        icon: 'solar:text-circle-outline',
        id: uniqueId(),
        url: "/utilities/typography",
      },
      {
        name: "Table",
        icon: 'solar:server-linear',
        id: uniqueId(),
        url: "/utilities/table",
      },
      {
        name: "Form",
        icon: 'solar:document-add-linear',
        id: uniqueId(),
        url: "/utilities/form",
      },
      {
        name: "Shadow",
        icon: "solar:airbuds-case-charge-outline",
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
        icon: "solar:login-2-linear",
        id: uniqueId(),
        url: "/auth/login",
      },
      {
        name: "Register",
        icon: "solar:shield-user-outline",
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
        icon: "solar:sticker-smile-circle-outline",
        id: uniqueId(),
        url: "/icons/tabler",
      },
      {
        name: "Sample Page",
        icon: "solar:notes-minimalistic-outline",
        id: uniqueId(),
        url: "/sample-page",
      },
    ],
  }
]

export default SidebarContent
