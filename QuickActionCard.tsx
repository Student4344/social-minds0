import { motion } from "framer-motion";
import { LucideIcon } from "lucide-react";
import { Link } from "react-router-dom";

interface QuickActionCardProps {
  to: string;
  icon: LucideIcon;
  title: string;
  description: string;
  color: "purple" | "blue" | "cyan" | "pink" | "green" | "orange";
}

const colorMap = {
  purple: { bg: "bg-primary/15", text: "text-primary", icon: "bg-primary/25", border: "border-primary/20" },
  blue: { bg: "bg-secondary/15", text: "text-secondary", icon: "bg-secondary/25", border: "border-secondary/20" },
  cyan: { bg: "bg-neon-cyan/10", text: "text-neon-cyan", icon: "bg-neon-cyan/20", border: "border-neon-cyan/15" },
  pink: { bg: "bg-neon-pink/10", text: "text-neon-pink", icon: "bg-neon-pink/20", border: "border-neon-pink/15" },
  green: { bg: "bg-neon-green/10", text: "text-neon-green", icon: "bg-neon-green/20", border: "border-neon-green/15" },
  orange: { bg: "bg-sunshine/15", text: "text-sunshine", icon: "bg-sunshine/25", border: "border-sunshine/20" },
};

const QuickActionCard = ({ to, icon: Icon, title, description, color }: QuickActionCardProps) => {
  const c = colorMap[color];
  return (
    <Link to={to}>
      <motion.div
        whileHover={{ scale: 1.03, y: -2 }}
        whileTap={{ scale: 0.97 }}
        className={`${c.bg} border ${c.border} rounded-2xl p-4 cursor-pointer transition-colors`}
      >
        <div className={`${c.icon} w-10 h-10 rounded-xl flex items-center justify-center mb-3`}>
          <Icon size={20} className={c.text} />
        </div>
        <h3 className="font-display font-bold text-sm text-foreground mb-0.5">{title}</h3>
        <p className="text-xs text-muted-foreground">{description}</p>
      </motion.div>
    </Link>
  );
};

export default QuickActionCard;
