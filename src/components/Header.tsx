import { Link, useLocation } from "react-router-dom";
import { Home, Info, MessageCircle, Radio } from "lucide-react";
import { motion } from "motion/react";
import { ThemeToggle } from "./ThemeToggle";

export function Header() {
  const location = useLocation();

  const isActive = (path: string) => location.pathname === path;

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-500 dark:from-blue-800 dark:via-purple-800 dark:to-pink-700 text-white shadow-lg sticky top-0 z-50 transition-colors duration-300"
    >
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo and Brand */}
          <Link to="/" className="flex items-center gap-3 group">
            <motion.div
              whileHover={{ rotate: 360, scale: 1.1 }}
              transition={{ duration: 0.5 }}
              className="bg-white rounded-full p-2"
            >
              <img
                src="https://instagram.fbpm3-1.fna.fbcdn.net/v/t51.2885-19/591159979_18067488545580075_7925953588105994821_n.jpg?efg=eyJ2ZW5jb2RlX3RhZyI6InByb2ZpbGVfcGljLmRqYW5nby4xMDgwLmMyIn0&_nc_ht=instagram.fbpm3-1.fna.fbcdn.net&_nc_cat=103&_nc_oc=Q6cZ2QEDr-Tq7JlQsoaaIwx5iWJQet3ELfJ0zIpfRQfQzrPdoZgLxkdjcIHshTzF6dfTWTs&_nc_ohc=7AwSvQru52sQ7kNvwGrSzua&_nc_gid=IFJ5VgHFeRxMR9mHrP1WjA&edm=AP4sbd4BAAAA&ccb=7-5&oh=00_AflHiV6ZybSHAHYf8xvRuubmjL2MKT-DoE9nKllGtoEVNw&oe=694F6D58&_nc_sid=7a9f4b"
                alt="UOE logo"
                className="h-8 w-8 rounded-full object-cover"
                loading="eager"
                decoding="sync"
              />
            </motion.div>
            <div className="hidden md:block">
              <h1 className="text-2xl tracking-tight">Update On Education</h1>
              <p className="text-sm text-blue-100">Your Education News Hub</p>
            </div>
          </Link>

          {/* Navigation */}
          <nav className="flex items-center gap-3 md:gap-6">
            <Link to="/">
              <motion.div
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                className={`flex items-center gap-2 px-3 md:px-4 py-2 rounded-lg transition-colors ${
                  isActive("/")
                    ? "bg-white text-purple-600"
                    : "hover:bg-white/75"
                }`}
              >
                <Home className="size-5" />
                <span className="hidden md:inline">Home</span>
              </motion.div>
            </Link>

            <Link to="/channels">
              <motion.div
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                className={`flex items-center gap-2 px-3 md:px-4 py-2 rounded-lg transition-colors ${
                  isActive("/channels")
                    ? "bg-white text-purple-600"
                    : "hover:bg-white/20"
                }`}
              >
                <Radio className="size-5" />
                <span className="hidden md:inline">Channels</span>
              </motion.div>
            </Link>

            <Link to="/about">
              <motion.div
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                className={`flex items-center gap-2 px-3 md:px-4 py-2 rounded-lg transition-colors ${
                  isActive("/about")
                    ? "bg-white text-purple-600"
                    : "hover:bg-white/20"
                }`}
              >
                <Info className="size-5" />
                <span className="hidden md:inline">About</span>
              </motion.div>
            </Link>

            <Link to="/chatbot">
              <motion.div
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                className={`flex items-center gap-2 px-3 md:px-4 py-2 rounded-lg transition-colors ${
                  isActive("/chatbot")
                    ? "bg-white text-purple-600"
                    : "hover:bg-white/20"
                }`}
              >
                <MessageCircle className="size-5" />
                <span className="hidden md:inline">UOE Bot</span>
              </motion.div>
            </Link>

            {/* Theme Toggle */}
            <div className="ml-2">
              <ThemeToggle />
            </div>
          </nav>
        </div>
      </div>
    </motion.header>
  );
}
