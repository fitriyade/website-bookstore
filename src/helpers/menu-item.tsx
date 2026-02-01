import { House, BookOpen, ShoppingCart, LogOut } from "lucide-react";
const MenuItems = [
  { name: "Home", icon: <House size={20} />, href: "/" },
  { name: "Library", icon: <BookOpen size={20} />, href: "/library" },
  { name: "Cart", icon: <ShoppingCart size={20} />, href: "/cart" },
  { name: "Logout", icon: <LogOut size={20} />, href: "/login" },
];
export default MenuItems;
