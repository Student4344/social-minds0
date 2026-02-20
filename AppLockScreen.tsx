import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Lock, Brain, ScanFace } from "lucide-react";
import { toast } from "sonner";

interface AppLockScreenProps {
  onUnlock: () => void;
}

const AppLockScreen = ({ onUnlock }: AppLockScreenProps) => {
  const [input, setInput] = useState("");
  const biometricEnabled = localStorage.getItem("mb_biometric") === "true";
  const credId = localStorage.getItem("mb_biometric_cred");

  useEffect(() => {
    if (biometricEnabled && credId) {
      attemptBiometric();
    }
  }, []);

  const attemptBiometric = async () => {
    try {
      const challenge = crypto.getRandomValues(new Uint8Array(32));
      const assertion = await navigator.credentials.get({
        publicKey: {
          challenge,
          allowCredentials: credId ? [{
            id: Uint8Array.from(atob(credId.replace(/-/g, '+').replace(/_/g, '/')), c => c.charCodeAt(0)),
            type: "public-key",
            transports: ["internal"],
          }] : [],
          userVerification: "required",
          timeout: 60000,
        },
      });

      if (assertion) {
        onUnlock();
      }
    } catch (err) {
      console.log("Biometric auth failed or cancelled, use passcode instead");
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const stored = localStorage.getItem("mb_passcode");
    if (input === stored) {
      onUnlock();
    } else {
      toast.error("Incorrect passcode");
      setInput("");
    }
  };

  return (
    <div className="min-h-screen mesh-gradient flex items-center justify-center p-4">
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        className="w-full max-w-xs space-y-8 text-center"
      >
        <div className="space-y-3">
          <motion.div
            animate={{ scale: [1, 1.05, 1] }}
            transition={{ repeat: Infinity, duration: 3 }}
            className="w-16 h-16 mx-auto rounded-2xl bg-primary/20 neon-glow flex items-center justify-center"
          >
            <Brain size={32} className="text-primary" />
          </motion.div>
          <h1 className="font-display text-2xl font-bold neon-text text-foreground">Social Bloom</h1>
          <p className="text-muted-foreground text-sm">Enter your passcode to unlock</p>
        </div>

        {biometricEnabled && (
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={attemptBiometric}
            className="w-full flex items-center justify-center gap-3 py-4 rounded-2xl bg-primary/10 border border-primary/30 text-primary font-display font-bold text-sm"
          >
            <ScanFace size={24} />
            Unlock with Biometrics
          </motion.button>
        )}

        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="relative">
            <Lock size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground" />
            <input
              type="password"
              value={input}
              onChange={(e) => setInput(e.target.value.replace(/\D/g, "").slice(0, 6))}
              placeholder="Enter passcode"
              className="w-full bg-muted rounded-xl pl-10 pr-4 py-3 text-sm text-foreground text-center tracking-[0.5em] placeholder:tracking-normal placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring"
              inputMode="numeric"
              maxLength={6}
              autoFocus
            />
          </div>
          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            type="submit"
            className="w-full bg-primary text-primary-foreground py-3 rounded-xl font-display font-bold text-sm neon-glow"
          >
            Unlock
          </motion.button>
        </form>
      </motion.div>
    </div>
  );
};

export default AppLockScreen;
