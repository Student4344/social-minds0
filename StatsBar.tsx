import { motion } from "framer-motion";
import { Flame, Sparkles, Trophy } from "lucide-react";
import { useTranslation } from "react-i18next";

interface StatsBarProps {
  streak: number;
  xp: number;
  level: number;
}

const StatsBar = ({ streak, xp, level }: StatsBarProps) => {
  const { t } = useTranslation();

  return (
    <div className="flex items-center gap-3">
      <motion.div whileHover={{ scale: 1.05 }} className="flex items-center gap-1.5 bg-neon-pink/10 border border-neon-pink/20 px-3 py-1.5 rounded-full">
        <Flame size={14} className="text-neon-pink" />
        <span className="text-xs font-bold text-foreground">{streak} {t("home.streak")}</span>
      </motion.div>
      <motion.div whileHover={{ scale: 1.05 }} className="flex items-center gap-1.5 bg-primary/10 border border-primary/20 px-3 py-1.5 rounded-full">
        <Sparkles size={14} className="text-primary" />
        <span className="text-xs font-bold text-foreground">{xp} {t("home.xp")}</span>
      </motion.div>
      <motion.div whileHover={{ scale: 1.05 }} className="flex items-center gap-1.5 bg-neon-cyan/10 border border-neon-cyan/20 px-3 py-1.5 rounded-full">
        <Trophy size={14} className="text-neon-cyan" />
        <span className="text-xs font-bold text-foreground">{t("home.level")} {level}</span>
      </motion.div>
    </div>
  );
};

export default StatsBar;
