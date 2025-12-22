import { Download, Calendar, Tag } from "lucide-react";
import { NewsItem } from "../data/newsData";
import { motion } from "motion/react";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { useNavigate } from "react-router-dom";

interface NewsCardProps {
  news: NewsItem;
  index: number;
}

const imageMap: Record<string, string> = {
  "education-policy": "https://images.unsplash.com/photo-1604758571514-49b1ac668d60?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlZHVjYXRpb24lMjBwb2xpY3l8ZW58MXx8fHwxNzY1Mzg0NjE1fDA&ixlib=rb-4.1.0&q=80&w=1080",
  "university-campus": "https://images.unsplash.com/photo-1576495199011-eb94736d05d6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx1bml2ZXJzaXR5JTIwY2FtcHVzfGVufDF8fHx8MTc2NTMyNzIxNnww&ixlib=rb-4.1.0&q=80&w=1080",
  "students-learning": "https://images.unsplash.com/photo-1509062522246-3755977927d7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzdHVkZW50cyUyMGxlYXJuaW5nfGVufDF8fHx8MTc2NTI4MzMxNXww&ixlib=rb-4.1.0&q=80&w=1080",
  "online-learning": "https://images.unsplash.com/photo-1610484826967-09c5720778c7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxvbmxpbmUlMjBsZWFybmluZ3xlbnwxfHx8fDE3NjUzNTQyMTV8MA&ixlib=rb-4.1.0&q=80&w=1080",
  "science-lab": "https://images.unsplash.com/photo-1602052577122-f73b9710adba?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzY2llbmNlJTIwbGFifGVufDF8fHx8MTc2NTM0ODgzMnww&ixlib=rb-4.1.0&q=80&w=1080",
  "teacher-training": "https://images.unsplash.com/photo-1503428593586-e225b39bddfe?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0ZWFjaGVyJTIwdHJhaW5pbmd8ZW58MXx8fHwxNzY1Mzg0NjE2fDA&ixlib=rb-4.1.0&q=80&w=1080"
};

export function NewsCard({ news, index }: NewsCardProps) {
  const navigate = useNavigate();

  const handleDownloadPDF = (e: React.MouseEvent) => {
    e.stopPropagation();
    // Create a simple PDF-like text file with news content
    const content = `
Update On Education - News Article
==================================

Title: ${news.title}
Category: ${news.category}
Date: ${new Date(news.date).toLocaleDateString()}

Content:
${news.content}

---
Downloaded from Update On Education
Your Education News Hub
    `;

    const blob = new Blob([content], { type: "text/plain" });
    const url = window.URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = url;
    link.download = `${news.title.replace(/[^a-z0-9]/gi, "_").toLowerCase()}.txt`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    window.URL.revokeObjectURL(url);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      whileHover={{ y: -8, scale: 1.02 }}
      onClick={() => navigate(`/news/${news.id}`)}
      className="bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden border-2 border-transparent hover:border-purple-400 dark:hover:border-purple-500 transition-all duration-300 cursor-pointer"
    >
      <div className="relative h-48 overflow-hidden">
        <motion.div
          whileHover={{ scale: 1.1 }}
          transition={{ duration: 0.3 }}
          className="size-full"
        >
          <ImageWithFallback
            src={imageMap[news.image]}
            alt={news.title}
            className="size-full object-cover"
          />
        </motion.div>
        <div className="absolute top-4 right-4">
          <span className="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-3 py-1 rounded-full text-sm">
            {news.category}
          </span>
        </div>
      </div>

      <div className="p-6">
        <div className="flex items-center gap-4 mb-3 text-gray-600 dark:text-gray-400 text-sm">
          <div className="flex items-center gap-1">
            <Calendar className="size-4" />
            <span>{new Date(news.date).toLocaleDateString()}</span>
          </div>
          <div className="flex items-center gap-1">
            <Tag className="size-4" />
            <span>{news.category}</span>
          </div>
        </div>

        <h3 className="text-gray-900 dark:text-white mb-3">{news.title}</h3>

        <p className="text-gray-600 dark:text-gray-400 mb-4 line-clamp-3">{news.content}</p>

        <div className="flex gap-3">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => navigate(`/news/${news.id}`)}
            className="flex-1 bg-gradient-to-r from-blue-500 to-purple-500 text-white px-4 py-2 rounded-lg hover:shadow-lg transition-shadow"
          >
            Read More
          </motion.button>
          <motion.button
            whileHover={{ scale: 1.05, rotate: 5 }}
            whileTap={{ scale: 0.95 }}
            onClick={handleDownloadPDF}
            className="bg-gradient-to-r from-pink-500 to-orange-500 text-white px-4 py-2 rounded-lg hover:shadow-lg transition-shadow flex items-center gap-2"
          >
            <Download className="size-5" />
            <span>PDF</span>
          </motion.button>
        </div>
      </div>
    </motion.div>
  );
}