import { motion } from "motion/react";
import { BookOpen, Mail, MapPin, Phone, Heart, MessageCircle } from "lucide-react";

export function Footer() {
  const handleWhatsAppClick = (number: string, name: string) => {
    const message = `Hello! I need help with Update On Education. (${name})`;
    const whatsappUrl = `https://wa.me/91${number}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, "_blank", "noopener,noreferrer");
  };

  return (
    <footer className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-500 dark:from-blue-900 dark:via-purple-900 dark:to-pink-900 text-white mt-20 transition-colors duration-300">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* About Section */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <BookOpen className="size-8" />
              <h3 className="text-2xl">Update On Education</h3>
            </div>
            <p className="text-blue-100 mb-4">
              Your trusted source for the latest education news, policies, admissions, and scholarship updates.
            </p>
            <p className="text-sm text-blue-100">
              © 2024 Update On Education. All rights reserved.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl mb-4">Quick Links</h3>
            <ul className="space-y-2 text-blue-100">
              <li>
                <a href="/" className="hover:text-white transition-colors">
                  Home
                </a>
              </li>
              <li>
                <a href="/channels" className="hover:text-white transition-colors">
                  Our Channels
                </a>
              </li>
              <li>
                <a href="/about" className="hover:text-white transition-colors">
                  About Us
                </a>
              </li>
              <li>
                <a href="/chatbot" className="hover:text-white transition-colors">
                  Ask UOE Bot
                </a>
              </li>
            </ul>
          </div>

          {/* Contact WhatsApp Section */}
          <div>
            <h3 className="text-xl mb-4">Contact Us on WhatsApp</h3>
            <div className="space-y-3">
              {/* Admin WhatsApp */}
              <motion.button
                whileHover={{ scale: 1.05, x: 5 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => handleWhatsAppClick("7416472177", "Admin Support")}
                className="w-full bg-white/20 hover:bg-white/30 backdrop-blur-sm rounded-xl p-4 transition-all flex items-center gap-3 text-left"
              >
                <div className="bg-green-500 rounded-full p-2">
                  <MessageCircle className="size-5" />
                </div>
                <div>
                  <p className="font-semibold">Admin Support</p>
                  <p className="text-sm text-blue-100">+91 7416472177</p>
                </div>
              </motion.button>

              {/* Helpline WhatsApp */}
              <motion.button
                whileHover={{ scale: 1.05, x: 5 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => handleWhatsAppClick("9391978393", "Helpline")}
                className="w-full bg-white/20 hover:bg-white/30 backdrop-blur-sm rounded-xl p-4 transition-all flex items-center gap-3 text-left"
              >
                <div className="bg-green-500 rounded-full p-2">
                  <MessageCircle className="size-5" />
                </div>
                <div>
                  <p className="font-semibold">Helpline</p>
                  <p className="text-sm text-blue-100">+91 9391978393</p>
                </div>
              </motion.button>
            </div>

            <p className="text-xs text-blue-100 mt-4">
              Click to start a WhatsApp conversation
            </p>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/20 pt-6 text-center">
          <p className="text-blue-100 flex items-center justify-center gap-2">
            Made with <Heart className="size-4 text-red-400 fill-red-400" /> for the education community
          </p>
        </div>
      </div>
    </footer>
  );
}
