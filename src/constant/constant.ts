import {
  BanknotesIcon,
  ClipboardIcon,
  QueueListIcon,
  HomeIcon,
} from "@heroicons/react/24/solid";

const ITEMS_SIDEBAR = [
  {
    id: 1,
    name: "Inicio",
    icon: HomeIcon,
    path: "/home",
  },
  {
    id: 1,
    name: "Registro Marcas",
    icon: QueueListIcon,
    path: "/brands",
  },
  {
    id: 2,
    name: "Administración Marcas",
    icon: BanknotesIcon,
    path: "/dashboard",
  },
  {
    id: 3,
    name: "Seguimiento administrativo",
    icon: ClipboardIcon,
    path: "/brands",
  },
];

export { ITEMS_SIDEBAR };
