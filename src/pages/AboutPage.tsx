import { motion } from "motion/react";
import { BookOpen, Target, Users, Zap, Mail, Phone, MapPin } from "lucide-react";

export function AboutPage() {
  const features = [
    {
      icon: Target,
      title: "Our Mission",
      description:
        "To provide timely, accurate, and comprehensive education news to students, educators, and parents worldwide.",
      color: "from-blue-500 to-cyan-500",
    },
    {
      icon: Users,
      title: "Our Community",
      description:
        "Serving over 100,000 education enthusiasts with daily updates on policies, admissions, scholarships, and more.",
      color: "from-purple-500 to-pink-500",
    },
    {
      icon: Zap,
      title: "Fast Updates",
      description:
        "Breaking news delivered instantly. Stay ahead with real-time updates on everything education-related.",
      color: "from-orange-500 to-red-500",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 transition-colors duration-300">
      <div className="container mx-auto px-4 py-12">
        {/* Hero Section */}
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <motion.div
            animate={{
              rotate: [0, 5, -5, 0],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="inline-block bg-gradient-to-r from-blue-600 to-purple-600 rounded-full p-6 mb-6"
          >
            <BookOpen className="size-16 text-white" />
          </motion.div>
          <motion.h1
            animate={{
              backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
            }}
            transition={{ duration: 5, repeat: Infinity }}
            className="text-5xl bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 dark:from-blue-400 dark:via-purple-400 dark:to-pink-400 bg-clip-text text-transparent mb-4 bg-[length:200%_auto]"
          >
            About Update On Education
          </motion.h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Your trusted source for the latest education news, updates, and
            insights from around the world.
          </p>
        </motion.div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2 }}
              whileHover={{ y: -10, scale: 1.05 }}
              className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-8 border-2 border-transparent hover:border-purple-300 dark:hover:border-purple-500 transition-all"
            >
              <motion.div
                whileHover={{ rotate: 360, scale: 1.2 }}
                transition={{ duration: 0.5 }}
                className={`inline-block bg-gradient-to-r ${feature.color} rounded-full p-4 mb-4`}
              >
                <feature.icon className="size-8 text-white" />
              </motion.div>
              <h3 className="text-gray-900 dark:text-white mb-3">{feature.title}</h3>
              <p className="text-gray-600 dark:text-gray-400">{feature.description}</p>
            </motion.div>
          ))}
        </div>

        {/* Story Section */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.6 }}
          className="bg-white dark:bg-gray-800 rounded-2xl shadow-2xl p-8 md:p-12 mb-16 transition-colors duration-300"
        >
          <h2 className="text-3xl bg-gradient-to-r from-purple-600 to-pink-600 dark:from-purple-400 dark:to-pink-400 bg-clip-text text-transparent mb-6">
            Our Story
          </h2>
          <div className="space-y-4 text-gray-700 dark:text-gray-300">
            <p>
              Founded in 2020, <strong>Update On Education</strong> was born
              from a simple idea: education news should be accessible,
              comprehensive, and easy to understand for everyone.
            </p>
            <p>
              We believe that informed students, parents, and educators make
              better decisions. That&apos;s why we work tirelessly to bring you
              the most relevant and up-to-date information about education
              policies, admission processes, scholarship opportunities, and
              technological advancements in education.
            </p>
            <p>
              Our team of dedicated journalists and education experts curate
              news from reliable sources, ensuring that you receive accurate and
              verified information. We&apos;re more than just a news platform
              – we&apos;re your partner in the educational journey.
            </p>
          </div>
        </motion.div>

        {/* Contact Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
          className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-500 dark:from-blue-800 dark:via-purple-800 dark:to-pink-700 rounded-2xl shadow-2xl p-8 md:p-12 text-white transition-colors duration-300"
        >
          <h2 className="text-3xl mb-6">Get In Touch</h2>
          <p className="text-blue-100 mb-8">
            Have questions or suggestions? We&apos;d love to hear from you!
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="flex items-center gap-3 bg-white/10 backdrop-blur-sm rounded-xl p-4"
            >
              <Mail className="size-6" />
              <div>
                <p className="text-sm text-blue-100">Email</p>
                <p>info@updateonedu.com</p>
              </div>
            </motion.div>
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="flex items-center gap-3 bg-white/10 backdrop-blur-sm rounded-xl p-4"
            >
              <Phone className="size-6" />
              <div>
                <p className="text-sm text-blue-100">Phone</p>
                <p>+1 (555) 123-4567</p>
              </div>
            </motion.div>
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="flex items-center gap-3 bg-white/10 backdrop-blur-sm rounded-xl p-4"
            >
              <MapPin className="size-6" />
              <div>
                <p className="text-sm text-blue-100">Location</p>
                <p>New York, USA</p>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
