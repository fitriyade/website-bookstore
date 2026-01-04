import {
  House,
  BookOpen,
  ShoppingCart,
  BookHeart,
  User,
  Settings,
  LogOut,
} from "lucide-react";
const MenuItems = [
  { name: "Home", icon: <House size={20} />, href: "/home" },
  { name: "Library", icon: <BookOpen size={20} />, href: "/library" },
  { name: "Cart", icon: <ShoppingCart size={20} />, href: "/cart" },
  { name: "Favorite", icon: <BookHeart size={20} />, href: "/favorite" },
  { name: "Profile", icon: <User size={20} />, href: "/profile" },
  { name: "Setting", icon: <Settings size={20} />, href: "/setting" },
  { name: "Logout", icon: <LogOut size={20} />, href: "/login" },
];
export default MenuItems;
