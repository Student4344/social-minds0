import { NavLink as RouterNavLink } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { Home, MessageCircle, Wind, BarChart3, BookOpen, Gamepad2, BookMarked, User, Settings } from "lucide-react";
import { motion } from "framer-motion";

const navItems = [
  { path: "/", icon: Home, labelKey: "nav.home" },
  { path: "/chat", icon: MessageCircle, labelKey: "nav.chat" },
  { path: "/breathe", icon: Wind, labelKey: "nav.breathe" },
  { path: "/games", icon: Gamepad2, label: "Games" },
  { path: "/profile", icon: User, label: "Profile" },
  { path: "/settings", icon: Settings, label: "Settings" },
];

const BottomNav = () => {
  const { t } = useTranslation();

  return (
    <nav className="fixed bottom-0 left-0 right-0 z-50 glass-card border-t border-border">
      <div className="flex items-center justify-around py-2 px-2 max-w-lg mx-auto">
        {navItems.map(({ path, icon: Icon, labelKey, label }) => (
          <RouterNavLink
            key={path}
            to={path}
            end={path === "/"}
            className={({ isActive }) =>
              `flex flex-col items-center gap-0.5 px-2 py-1.5 rounded-xl transition-colors ${
                isActive ? "text-primary" : "text-muted-foreground hover:text-foreground"
              }`
            }
          >
            {({ isActive }) => (
              <>
                <motion.div whileTap={{ scale: 0.9 }} className="relative">
                  {isActive && (
                    <motion.div
                      layoutId="nav-indicator"
                      className="absolute -inset-2 bg-primary/10 rounded-xl"
                      transition={{ type: "spring", stiffness: 300, damping: 30 }}
                    />
                  )}
                  <Icon className="relative z-10" size={20} />
                </motion.div>
                <span className="text-[9px] font-medium">{label || t(labelKey!)}</span>
              </>
            )}
          </RouterNavLink>
        ))}
      </div>
    </nav>
  );
};

export default BottomNav;
