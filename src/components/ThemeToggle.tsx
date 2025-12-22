import { motion } from "motion/react";
import { Sun, Moon } from "lucide-react";
import { useTheme } from "../context/ThemeContext";

export function ThemeToggle() {
  const { isDarkMode, toggleTheme } = useTheme();

  return (
    <motion.button
      onClick={toggleTheme}
      className="relative w-16 h-8 bg-gradient-to-r from-purple-400 to-pink-400 dark:from-indigo-600 dark:to-purple-600 rounded-full p-1 transition-colors duration-300 shadow-lg"
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
    >
      <motion.div
        className="w-6 h-6 bg-white dark:bg-gray-800 rounded-full shadow-md flex items-center justify-center"
        animate={{
          x: isDarkMode ? 32 : 0,
        }}
        transition={{
          type: "spring",
          stiffness: 500,
          damping: 30,
        }}
      >
        <motion.div
          initial={false}
          animate={{
            scale: isDarkMode ? 0 : 1,
            rotate: isDarkMode ? 180 : 0,
          }}
          transition={{ duration: 0.3 }}
        >
          {!isDarkMode && <Sun className="size-4 text-yellow-500" />}
        </motion.div>
        <motion.div
          initial={false}
          animate={{
            scale: isDarkMode ? 1 : 0,
            rotate: isDarkMode ? 0 : -180,
          }}
          transition={{ duration: 0.3 }}
          className="absolute"
        >
          {isDarkMode && <Moon className="size-4 text-indigo-300" />}
        </motion.div>
      </motion.div>
    </motion.button>
  );
}
