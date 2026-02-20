import { useTranslation } from "react-i18next";
import { AlertTriangle, Phone } from "lucide-react";

const DisclaimerBanner = () => {
  const { t } = useTranslation();
  return (
    <div className="bg-neon-pink/5 border border-neon-pink/15 rounded-xl p-3 flex items-start gap-3 text-sm">
      <AlertTriangle size={18} className="text-neon-pink mt-0.5 shrink-0" />
      <p className="text-muted-foreground leading-relaxed">{t("disclaimer")}</p>
    </div>
  );
};

export const CrisisCard = () => {
  const { t } = useTranslation();
  return (
    <div className="bg-destructive/10 border border-destructive/20 rounded-xl p-4 space-y-2">
      <div className="flex items-center gap-2">
        <Phone size={16} className="text-destructive" />
        <h3 className="font-display font-bold text-sm text-foreground">{t("crisis.title")}</h3>
      </div>
      <p className="text-xs text-muted-foreground">{t("crisis.message")}</p>
      <div className="space-y-0.5 text-xs font-medium text-foreground">
        <p>{t("crisis.hotlines.international")}</p>
        <p>{t("crisis.hotlines.us")}</p>
        <p>{t("crisis.hotlines.uk")}</p>
      </div>
    </div>
  );
};

export default DisclaimerBanner;
