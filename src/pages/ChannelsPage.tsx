import { motion } from "motion/react";
import { 
  MessageCircle, 
  Send, 
  Youtube, 
  Instagram, 
  Twitter,
  Facebook,
  Radio,
  Bell,
  ExternalLink
} from "lucide-react";

export function ChannelsPage() {
  const channels = [
    {
      name: "WhatsApp Channel",
      description: "Get instant updates on your WhatsApp",
      icon: MessageCircle,
      color: "from-green-500 to-green-600",
      link: "https://whatsapp.com/channel/0029VaAjyEi7Noa52Yqs5q2S", // Replace with your actual channel
      followers: "100+ followers",
    },
    {
      name: "Telegram Channel",
      description: "Join our Telegram community for daily updates",
      icon: Send,
      color: "from-blue-500 to-blue-600",
      link: "https://t.me/UOE287", // Replace with your actual channel
      followers: "100+ members",
    },
    {
      name: "YouTube Channel",
      description: "Watch educational videos and news updates",
      icon: Youtube,
      color: "from-red-500 to-red-600",
      link: "https://www.youtube.com/@updateoneducation", // Replace with your actual channel
      followers: "100+ subscribers",
    },
    {
      name: "Instagram",
      description: "Follow us for daily education news and tips",
      icon: Instagram,
      color: "from-pink-500 via-purple-500 to-orange-500",
      link: "https://www.instagram.com/update_on_education/", // Replace with your actual channel
      followers: "100+ followers",
    },
    {
      name: "Twitter / X",
      description: "Get real-time updates and breaking news",
      icon: Twitter,
      color: "from-sky-500 to-blue-600",
      link: "https://x.com/UOE282177", // Replace with your actual channel
      followers: "100+ followers",
    },
    {
      name: "Facebook Page",
      description: "Join our Facebook community",
      icon: Facebook,
      color: "from-blue-600 to-blue-700",
      link: "https://facebook.com/updateoneducation", // Replace with your actual channel
      followers: "100+ likes",
    },
  ];

  const handleJoinChannel = (link: string) => {
    window.open(link, "_blank", "noopener,noreferrer");
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 transition-colors duration-300">
      <div className="container mx-auto px-4 py-12">
        {/* Hero Section */}
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <motion.div
            animate={{
              rotate: [0, 10, -10, 10, 0],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              repeatDelay: 2,
            }}
            className="inline-block bg-gradient-to-r from-blue-600 to-purple-600 rounded-full p-6 mb-6"
          >
            <Radio className="size-16 text-white" />
          </motion.div>
          <motion.h1
            animate={{
              backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
            }}
            transition={{ duration: 5, repeat: Infinity }}
            className="text-5xl bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 dark:from-blue-400 dark:via-purple-400 dark:to-pink-400 bg-clip-text text-transparent mb-4 bg-[length:200%_auto]"
          >
            Join Our Channels
          </motion.h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Stay connected with Update On Education across all platforms
          </p>
        </motion.div>

        {/* Notification Banner */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.2 }}
          className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-500 rounded-2xl p-6 mb-12 text-white shadow-xl"
        >
          <div className="flex items-center gap-4">
            <motion.div
              animate={{
                scale: [1, 1.2, 1],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
              }}
            >
              <Bell className="size-8" />
            </motion.div>
            <div className="flex-1">
              <h3 className="mb-1">Never Miss an Update!</h3>
              <p className="text-sm text-blue-100">
                Join our channels to receive instant notifications about new education policies, admissions, scholarships, and more.
              </p>
            </div>
          </div>
        </motion.div>

        {/* Channels Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {channels.map((channel, index) => (
            <motion.div
              key={channel.name}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -8, scale: 1.03 }}
              className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg overflow-hidden border-2 border-transparent hover:border-purple-400 dark:hover:border-purple-500 transition-all duration-300"
            >
              <div className={`bg-gradient-to-r ${channel.color} p-6`}>
                <motion.div
                  whileHover={{ rotate: 360, scale: 1.2 }}
                  transition={{ duration: 0.5 }}
                  className="bg-white dark:bg-gray-800 rounded-full p-4 inline-block mb-4"
                >
                  <channel.icon className="size-8 text-gray-800 dark:text-white" />
                </motion.div>
                <h3 className="text-white mb-2">{channel.name}</h3>
                <p className="text-sm text-white/90">{channel.followers}</p>
              </div>

              <div className="p-6">
                <p className="text-gray-600 dark:text-gray-300 mb-6">
                  {channel.description}
                </p>

                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => handleJoinChannel(channel.link)}
                  className={`w-full bg-gradient-to-r ${channel.color} text-white px-6 py-3 rounded-xl hover:shadow-lg transition-shadow flex items-center justify-center gap-2`}
                >
                  <span>Join Channel</span>
                  <ExternalLink className="size-5" />
                </motion.button>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Mobile App Notice */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
          className="mt-12 bg-gradient-to-r from-purple-100 to-pink-100 dark:from-purple-900/30 dark:to-pink-900/30 rounded-2xl p-8 text-center"
        >
          <h3 className="text-gray-800 dark:text-white mb-3">
            📱 Mobile App Coming Soon!
          </h3>
          <p className="text-gray-700 dark:text-gray-300 mb-4">
            Click any channel above to open in your mobile app (WhatsApp, Telegram, etc.) 
            or web browser. Stay tuned for our dedicated mobile application!
          </p>
          <div className="flex gap-4 justify-center text-sm text-gray-600 dark:text-gray-400">
            <span>✅ Instant Notifications</span>
            <span>✅ Real-time Updates</span>
            <span>✅ Exclusive Content</span>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
