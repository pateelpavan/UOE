import { motion } from "motion/react";
import { Chatbot } from "../components/Chatbot";
import { MessageCircleHeart, Sparkles } from "lucide-react";

export function ChatbotPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 transition-colors duration-300">
      <div className="container mx-auto px-4 py-12">
        {/* Hero Section */}
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-8"
        >
          <motion.div
            animate={{
              y: [0, -10, 0],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="inline-block bg-gradient-to-r from-pink-600 to-orange-600 rounded-full p-6 mb-6"
          >
            <MessageCircleHeart className="size-16 text-white" />
          </motion.div>
          <motion.h1
            animate={{
              backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
            }}
            transition={{ duration: 5, repeat: Infinity }}
            className="text-5xl bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 dark:from-blue-400 dark:via-purple-400 dark:to-pink-400 bg-clip-text text-transparent mb-4 bg-[length:200%_auto]"
          >
            Ask UOE Bot
          </motion.h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto mb-2">
            Your intelligent education assistant is here to help!
          </p>
          <motion.div
            animate={{
              scale: [1, 1.05, 1],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
            }}
            className="flex items-center justify-center gap-2 text-purple-600 dark:text-purple-400"
          >
            <Sparkles className="size-5" />
            <p>Powered by AI-driven responses</p>
            <Sparkles className="size-5" />
          </motion.div>
        </motion.div>

        {/* Info Cards */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8"
        >
          <div className="bg-white dark:bg-gray-800 rounded-xl p-4 shadow-md border-2 border-blue-200 dark:border-blue-700 transition-colors duration-300">
            <h3 className="text-blue-600 dark:text-blue-400 mb-2">Ask About Admissions</h3>
            <p className="text-sm text-gray-600 dark:text-gray-400">
              Get information about university admissions and application
              processes
            </p>
          </div>
          <div className="bg-white dark:bg-gray-800 rounded-xl p-4 shadow-md border-2 border-purple-200 dark:border-purple-700 transition-colors duration-300">
            <h3 className="text-purple-600 dark:text-purple-400 mb-2">Scholarship Info</h3>
            <p className="text-sm text-gray-600 dark:text-gray-400">
              Learn about available scholarships and financial aid programs
            </p>
          </div>
          <div className="bg-white dark:bg-gray-800 rounded-xl p-4 shadow-md border-2 border-pink-200 dark:border-pink-700 transition-colors duration-300">
            <h3 className="text-pink-600 dark:text-pink-400 mb-2">Education Policies</h3>
            <p className="text-sm text-gray-600 dark:text-gray-400">
              Stay updated on the latest education policies and reforms
            </p>
          </div>
        </motion.div>

        {/* Chatbot Component */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.4 }}
        >
          <Chatbot />
        </motion.div>

        {/* Tips Section */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
          className="mt-8 bg-gradient-to-r from-blue-100 to-purple-100 dark:from-blue-900/30 dark:to-purple-900/30 rounded-2xl p-6 transition-colors duration-300"
        >
          <h3 className="text-gray-800 dark:text-white mb-3">💡 Tips for better responses:</h3>
          <ul className="space-y-2 text-gray-700 dark:text-gray-300">
            <li>• Be specific with your questions</li>
            <li>• Use keywords like &quot;admission&quot;, &quot;scholarship&quot;, &quot;policy&quot;</li>
            <li>• Ask one question at a time for clearer answers</li>
            <li>
              • Check our news section for detailed articles on specific topics
            </li>
          </ul>
        </motion.div>
      </div>
    </div>
  );
}