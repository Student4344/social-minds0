import { useTranslation } from "react-i18next";
import { Globe } from "lucide-react";

const languages = [
  { code: "en", label: "EN" },
  { code: "al", label: "AL" },
  { code: "fr", label: "FR" },
  { code: "it", label: "IT" },
  { code: "de", label: "DE" },
];

const LanguageSwitcher = () => {
  const { i18n } = useTranslation();
  return (
    <div className="flex items-center gap-1 bg-muted rounded-full p-1">
      <Globe size={12} className="text-muted-foreground ml-1.5" />
      {languages.map((lang) => (
        <button
          key={lang.code}
          onClick={() => i18n.changeLanguage(lang.code)}
          className={`text-[10px] font-bold px-2 py-1 rounded-full transition-all ${
            i18n.language === lang.code ? "bg-primary text-primary-foreground" : "text-muted-foreground"
          }`}
        >
          {lang.label}
        </button>
      ))}
    </div>
  );
};

export default LanguageSwitcher;
