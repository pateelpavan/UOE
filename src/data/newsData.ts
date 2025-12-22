// ADMIN SECTION: Edit this file to add/update news
// Add new news items to this array

export interface NewsItem {
  id: string;
  title: string;
  category: string;
  date: string;
  content: string;
  image: string;
  pdfUrl?: string;
}

export const newsData: NewsItem[] = [
  {
    id: "1",
    title: "New Education Policy 2024 - Major Changes Announced",
    category: "Policy",
    date: "2024-12-08",
    content: "The Ministry of Education has announced significant changes to the education policy, focusing on digital learning and skill development. The new policy emphasizes practical knowledge and industry-relevant skills.",
    image: "education-policy",
    pdfUrl: "#" // Add actual PDF URL here
  },
  {
    id: "2",
    title: "Top 10 Universities Open Admissions for Spring 2025",
    category: "Admissions",
    date: "2024-12-07",
    content: "Leading universities across the country have opened their admission portals for the Spring 2025 semester. Students can now apply online through the unified admission system.",
    image: "university-campus",
    pdfUrl: "#"
  },
  {
    id: "3",
    title: "Scholarship Program Launched for Underprivileged Students",
    category: "Scholarships",
    date: "2024-12-06",
    content: "A new scholarship initiative worth $10 million has been launched to support students from economically disadvantaged backgrounds. The program covers tuition, books, and living expenses.",
    image: "students-learning",
    pdfUrl: "#"
  },
  {
    id: "4",
    title: "Online Learning Platforms See 300% Growth in 2024",
    category: "Technology",
    date: "2024-12-05",
    content: "Digital education platforms have experienced unprecedented growth this year, with millions of students enrolling in online courses. The trend shows a shift towards flexible learning options.",
    image: "online-learning",
    pdfUrl: "#"
  },
  {
    id: "5",
    title: "STEM Education Initiative: New Labs in 500 Schools",
    category: "Infrastructure",
    date: "2024-12-04",
    content: "Government announces installation of modern STEM laboratories in 500 schools nationwide. The initiative aims to enhance practical science education and foster innovation among students.",
    image: "science-lab",
    pdfUrl: "#"
  },
  {
    id: "6",
    title: "Teacher Training Program Focuses on Digital Skills",
    category: "Professional Development",
    date: "2024-12-03",
    content: "A comprehensive training program has been launched to equip teachers with digital teaching skills. Over 50,000 educators are expected to participate in the 6-month intensive program.",
    image: "teacher-training",
    pdfUrl: "#"
  }
];

// Chatbot Q&A Database - Admin can add more questions and answers here
export interface ChatbotQA {
  keywords: string[];
  answer: string;
}

export const chatbotDatabase: ChatbotQA[] = [
  {
    keywords: ["hello", "hi", "hey", "greetings"],
    answer: "Hello! Welcome to Update On Education. I'm here to help you with education-related queries. How can I assist you today?"
  },
  {
    keywords: ["admission", "admissions", "apply", "application"],
    answer: "For admission-related information, please check our latest news on university admissions. Most universities have opened their portals for Spring 2025. You can also visit the official university websites for detailed admission procedures."
  },
  {
    keywords: ["scholarship", "scholarships", "financial aid", "funding"],
    answer: "We regularly update information about scholarships and financial aid programs. Currently, there's a new $10 million scholarship program for underprivileged students. Check our news section for more details and application procedures."
  },
  {
    keywords: ["policy", "education policy", "new policy"],
    answer: "The New Education Policy 2024 has introduced major changes focusing on digital learning and skill development. For detailed information, please check our latest policy updates in the news section."
  },
  {
    keywords: ["online", "online learning", "digital", "e-learning"],
    answer: "Online learning has grown significantly! We cover the latest trends in digital education. Check out our technology category for updates on online learning platforms and digital education initiatives."
  },
  {
    keywords: ["stem", "science", "technology", "lab"],
    answer: "The government has announced a STEM education initiative with new laboratories being installed in 500 schools. This will enhance practical science education nationwide."
  },
  {
    keywords: ["teacher", "training", "educator"],
    answer: "A comprehensive teacher training program focusing on digital skills is currently underway. Over 50,000 educators are expected to participate. Check our news for more details."
  },
  {
    keywords: ["pdf", "download", "document"],
    answer: "You can download PDF versions of our news articles by clicking the download button on each news card. This allows you to read and share the information offline."
  },
  {
    keywords: ["contact", "reach", "email"],
    answer: "You can reach us through our About page. We're always here to help with your education-related queries!"
  },
  {
    keywords: ["help", "support", "assist"],
    answer: "I'm here to help! You can ask me about admissions, scholarships, education policies, online learning, STEM programs, teacher training, and more. What would you like to know?"
  }
];

export const defaultChatbotResponse = "Thank you for your question! While I don't have specific information about that right now, please check our news section for the latest updates on education. You can also explore different categories to find relevant information.";
