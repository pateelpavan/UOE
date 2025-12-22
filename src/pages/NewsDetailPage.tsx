import { useParams, useNavigate } from "react-router-dom";
import { motion } from "motion/react";
import { Calendar, Tag, Download, ArrowLeft, Share2 } from "lucide-react";
import { newsData } from "../data/newsData";
import { ImageWithFallback } from "../components/figma/ImageWithFallback";

const imageMap: Record<string, string> = {
  "education-policy": "https://images.unsplash.com/photo-1604758571514-49b1ac668d60?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlZHVjYXRpb24lMjBwb2xpY3l8ZW58MXx8fHwxNzY1Mzg0NjE1fDA&ixlib=rb-4.1.0&q=80&w=1080",
  "university-campus": "https://images.unsplash.com/photo-1576495199011-eb94736d05d6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx1bml2ZXJzaXR5JTIwY2FtcHVzfGVufDF8fHx8MTc2NTMyNzIxNnww&ixlib=rb-4.1.0&q=80&w=1080",
  "students-learning": "https://images.unsplash.com/photo-1509062522246-3755977927d7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzdHVkZW50cyUyMGxlYXJuaW5nfGVufDF8fHx8MTc2NTI4MzMxNXww&ixlib=rb-4.1.0&q=80&w=1080",
  "online-learning": "https://images.unsplash.com/photo-1610484826967-09c5720778c7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxvbmxpbmUlMjBsZWFybmluZ3xlbnwxfHx8fDE3NjUzNTQyMTV8MA&ixlib=rb-4.1.0&q=80&w=1080",
  "science-lab": "https://images.unsplash.com/photo-1602052577122-f73b9710adba?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzY2llbmNlJTIwbGFifGVufDF8fHx8MTc2NTM0ODgzMnww&ixlib=rb-4.1.0&q=80&w=1080",
  "teacher-training": "https://images.unsplash.com/photo-1503428593586-e225b39bddfe?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0ZWFjaGVyJTIwdHJhaW5pbmd8ZW58MXx8fHwxNzY1Mzg0NjE2fDA&ixlib=rb-4.1.0&q=80&w=1080"
};

export function NewsDetailPage() {
  const { id } = useParams();
  const navigate = useNavigate();

  const news = newsData.find((item) => item.id === id);

  if (!news) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-3xl text-gray-800 dark:text-white mb-4">News Not Found</h2>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => navigate("/")}
            className="bg-gradient-to-r from-blue-500 to-purple-500 text-white px-6 py-3 rounded-xl"
          >
            Go Back Home
          </motion.button>
        </div>
      </div>
    );
  }

  const handleDownloadPDF = () => {
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

  const handleShare = async () => {
    if (navigator.share) {
      try {
        await navigator.share({
          title: news.title,
          text: news.content,
          url: window.location.href,
        });
      } catch (err) {
        console.log("Share cancelled");
      }
    } else {
      // Fallback: copy to clipboard
      navigator.clipboard.writeText(window.location.href);
      alert("Link copied to clipboard!");
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 transition-colors duration-300">
      <div className="container mx-auto px-4 py-8">
        {/* Back Button */}
        <motion.button
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          whileHover={{ scale: 1.05, x: -5 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => navigate("/")}
          className="flex items-center gap-2 text-purple-600 dark:text-purple-400 hover:text-purple-700 dark:hover:text-purple-300 mb-6"
        >
          <ArrowLeft className="size-5" />
          <span>Back to News</span>
        </motion.button>

        {/* Article Container */}
        <motion.article
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-white dark:bg-gray-800 rounded-2xl shadow-2xl overflow-hidden"
        >
          {/* Hero Image */}
          <div className="relative h-96 overflow-hidden">
            <motion.div
              initial={{ scale: 1.2 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.5 }}
            >
              <ImageWithFallback
                src={imageMap[news.image]}
                alt={news.title}
                className="size-full object-cover"
              />
            </motion.div>
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
            <div className="absolute bottom-8 left-8 right-8">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
              >
                <span className="inline-block bg-gradient-to-r from-purple-500 to-pink-500 text-white px-4 py-2 rounded-full text-sm mb-4">
                  {news.category}
                </span>
                <h1 className="text-4xl text-white">{news.title}</h1>
              </motion.div>
            </div>
          </div>

          {/* Article Content */}
          <div className="p-8 md:p-12">
            {/* Meta Information */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
              className="flex flex-wrap items-center gap-6 mb-8 pb-6 border-b-2 border-gray-200 dark:border-gray-700"
            >
              <div className="flex items-center gap-2 text-gray-600 dark:text-gray-400">
                <Calendar className="size-5" />
                <span>{new Date(news.date).toLocaleDateString("en-US", { 
                  year: "numeric", 
                  month: "long", 
                  day: "numeric" 
                })}</span>
              </div>
              <div className="flex items-center gap-2 text-gray-600 dark:text-gray-400">
                <Tag className="size-5" />
                <span>{news.category}</span>
              </div>
            </motion.div>

            {/* Main Content */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
              className="prose prose-lg dark:prose-invert max-w-none mb-8"
            >
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed whitespace-pre-wrap">
                {news.content}
              </p>
            </motion.div>

            {/* Action Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="flex flex-wrap gap-4 pt-6 border-t-2 border-gray-200 dark:border-gray-700"
            >
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={handleDownloadPDF}
                className="flex-1 min-w-[200px] bg-gradient-to-r from-blue-500 to-purple-500 text-white px-6 py-3 rounded-xl hover:shadow-lg transition-shadow flex items-center justify-center gap-2"
              >
                <Download className="size-5" />
                <span>Download PDF</span>
              </motion.button>

              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={handleShare}
                className="flex-1 min-w-[200px] bg-gradient-to-r from-pink-500 to-orange-500 text-white px-6 py-3 rounded-xl hover:shadow-lg transition-shadow flex items-center justify-center gap-2"
              >
                <Share2 className="size-5" />
                <span>Share Article</span>
              </motion.button>
            </motion.div>
          </div>
        </motion.article>

        {/* Related News Section */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
          className="mt-12"
        >
          <h2 className="text-3xl text-gray-800 dark:text-white mb-6">
            More from {news.category}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {newsData
              .filter((item) => item.category === news.category && item.id !== news.id)
              .slice(0, 3)
              .map((relatedNews, index) => (
                <motion.div
                  key={relatedNews.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.7 + index * 0.1 }}
                  whileHover={{ y: -5 }}
                  onClick={() => navigate(`/news/${relatedNews.id}`)}
                  className="bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden cursor-pointer hover:shadow-xl transition-shadow"
                >
                  <div className="h-40 overflow-hidden">
                    <ImageWithFallback
                      src={imageMap[relatedNews.image]}
                      alt={relatedNews.title}
                      className="size-full object-cover"
                    />
                  </div>
                  <div className="p-4">
                    <h3 className="text-gray-900 dark:text-white mb-2 line-clamp-2">
                      {relatedNews.title}
                    </h3>
                    <p className="text-sm text-gray-600 dark:text-gray-400">
                      {new Date(relatedNews.date).toLocaleDateString()}
                    </p>
                  </div>
                </motion.div>
              ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
}
