import { motion, AnimatePresence } from "motion/react";
import { MessageCircle, X, Headphones, User } from "lucide-react";
import { useState } from "react";

export function WhatsAppContact() {
  const [isOpen, setIsOpen] = useState(false);

  const contacts = [
    {
      name: "Admin Support",
      number: "7416472177",
      icon: User,
      color: "from-blue-500 to-blue-600",
      message: "Hello! I need help with Update On Education.",
    },
    {
      name: "Helpline",
      number: "9391978393",
      icon: Headphones,
      color: "from-green-500 to-green-600",
      message: "Hi! I have a question about education news.",
    },
  ];

  const handleWhatsAppClick = (number: string, message: string) => {
    const whatsappUrl = `https://wa.me/91${number}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, "_blank", "noopener,noreferrer");
  };

  return (
    <>
      {/* Floating WhatsApp Button */}
      <motion.div
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        className="fixed bottom-6 right-6 z-50"
      >
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, y: 20, scale: 0.8 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 20, scale: 0.8 }}
              className="absolute bottom-20 right-0 bg-white dark:bg-gray-800 rounded-2xl shadow-2xl p-6 w-80 border-2 border-green-400 dark:border-green-600"
            >
              {/* Close Button */}
              <button
                onClick={() => setIsOpen(false)}
                className="absolute top-3 right-3 text-gray-400 hover:text-gray-600 dark:hover:text-gray-300"
              >
                <X className="size-5" />
              </button>

              {/* Header */}
              <div className="mb-4">
                <h3 className="text-gray-900 dark:text-white mb-2">Contact Us on WhatsApp</h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  Choose who you'd like to chat with
                </p>
              </div>

              {/* Contact Cards */}
              <div className="space-y-3">
                {contacts.map((contact) => (
                  <motion.button
                    key={contact.number}
                    whileHover={{ scale: 1.03 }}
                    whileTap={{ scale: 0.97 }}
                    onClick={() => handleWhatsAppClick(contact.number, contact.message)}
                    className={`w-full bg-gradient-to-r ${contact.color} text-white p-4 rounded-xl shadow-lg hover:shadow-xl transition-shadow flex items-center gap-4`}
                  >
                    <div className="bg-white/20 backdrop-blur-sm rounded-full p-3">
                      <contact.icon className="size-6" />
                    </div>
                    <div className="flex-1 text-left">
                      <p className="font-semibold">{contact.name}</p>
                      <p className="text-sm text-white/90">+91 {contact.number}</p>
                    </div>
                    <MessageCircle className="size-5" />
                  </motion.button>
                ))}
              </div>

              {/* Footer Note */}
              <p className="text-xs text-gray-500 dark:text-gray-400 mt-4 text-center">
                Click to start a WhatsApp conversation
              </p>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Main Floating Button */}
        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          onClick={() => setIsOpen(!isOpen)}
          className="bg-gradient-to-r from-green-500 to-green-600 text-white rounded-full p-4 shadow-2xl hover:shadow-green-500/50 transition-shadow relative"
          animate={{
            boxShadow: isOpen
              ? "0 0 0 0 rgba(34, 197, 94, 0)"
              : [
                  "0 0 0 0 rgba(34, 197, 94, 0.7)",
                  "0 0 0 20px rgba(34, 197, 94, 0)",
                ],
          }}
          transition={{
            duration: 2,
            repeat: isOpen ? 0 : Infinity,
          }}
        >
          <AnimatePresence mode="wait">
            {isOpen ? (
              <motion.div
                key="close"
                initial={{ rotate: -90, opacity: 0 }}
                animate={{ rotate: 0, opacity: 1 }}
                exit={{ rotate: 90, opacity: 0 }}
              >
                <X className="size-7" />
              </motion.div>
            ) : (
              <motion.div
                key="whatsapp"
                initial={{ rotate: 90, opacity: 0 }}
                animate={{ rotate: 0, opacity: 1 }}
                exit={{ rotate: -90, opacity: 0 }}
              >
                <MessageCircle className="size-7" />
              </motion.div>
            )}
          </AnimatePresence>

          {/* Notification Badge */}
          {!isOpen && (
            <motion.div
              animate={{
                scale: [1, 1.2, 1],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
              }}
              className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full size-6 flex items-center justify-center"
            >
              2
            </motion.div>
          )}
        </motion.button>
      </motion.div>
    </>
  );
}
