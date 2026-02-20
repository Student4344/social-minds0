import { useState } from "react";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";

const emojis = ["😢", "😔", "😐", "🙂", "😊", "😄", "🤩"];

interface MoodSliderProps {
  onMoodChange?: (value: number) => void;
  initialValue?: number;
}

const MoodSlider = ({ onMoodChange, initialValue = 4 }: MoodSliderProps) => {
  const [mood, setMood] = useState(initialValue);
  const { t } = useTranslation();
  const labels = t("mood.labels", { returnObjects: true }) as string[];

  const handleChange = (val: number) => {
    setMood(val);
    onMoodChange?.(val);
  };

  return (
    <div className="space-y-4">
      <motion.div key={mood} initial={{ scale: 0.5, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} className="text-center">
        <span className="text-5xl">{emojis[mood - 1]}</span>
        <p className="mt-2 font-display font-bold text-foreground">{labels[mood - 1]}</p>
      </motion.div>
      <div className="px-2">
        <input
          type="range"
          min={1}
          max={7}
          value={mood}
          onChange={(e) => handleChange(Number(e.target.value))}
          className="w-full h-2 rounded-full appearance-none cursor-pointer bg-gradient-to-r from-neon-pink via-primary to-neon-cyan [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:w-6 [&::-webkit-slider-thumb]:h-6 [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:bg-primary [&::-webkit-slider-thumb]:shadow-lg [&::-webkit-slider-thumb]:cursor-pointer"
        />
      </div>
    </div>
  );
};

export default MoodSlider;
