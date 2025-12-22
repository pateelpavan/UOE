import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Header } from "./components/Header";
import { Footer } from "./components/Footer";
import { HomePage } from "./pages/HomePage";
import { AboutPage } from "./pages/AboutPage";
import { ChatbotPage } from "./pages/ChatbotPage";
import { ChannelsPage } from "./pages/ChannelsPage";
import { NewsDetailPage } from "./pages/NewsDetailPage";
import { ThemeProvider } from "./context/ThemeContext";
import { WhatsAppContact } from "./components/WhatsAppContact";

export default function App() {
  return (
    <ThemeProvider>
      <Router>
        <div className="min-h-screen flex flex-col">
          <Header />
          <main className="flex-1">
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/news/:id" element={<NewsDetailPage />} />
              <Route path="/channels" element={<ChannelsPage />} />
              <Route path="/about" element={<AboutPage />} />
              <Route path="/chatbot" element={<ChatbotPage />} />
            </Routes>
          </main>
          <Footer />
          <WhatsAppContact />
        </div>
      </Router>
    </ThemeProvider>
  );
}