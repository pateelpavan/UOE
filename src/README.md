# Update On Education - News Channel Web App

A modern, animated news channel web application for education updates, featuring news display, PDF downloads, and an intelligent chatbot.

## 🚀 Features

- **Latest News Display**: Browse education news with beautiful animations
- **News Detail Pages**: Click any news to read the full article on a dedicated page
- **PDF Downloads**: Download news articles as text files for offline reading
- **UOE Bot**: Interactive chatbot to answer education-related questions
- **Channels Page**: Join our community on WhatsApp, Telegram, YouTube, Instagram, Twitter, and Facebook
- **Dark/Light Mode**: Animated theme toggle to protect your eyes with smooth transitions
- **WhatsApp Contact**: Floating WhatsApp button with Admin and Helpline support
- **Search & Filter**: Find news by keywords and categories
- **Responsive Design**: Works perfectly on desktop and mobile devices
- **Mobile App Ready**: Channel links open directly in mobile apps (WhatsApp, Telegram, etc.)
- **Colorful UI**: Engaging gradient designs and smooth animations

## 🌙 Dark Mode

The app features an animated dark/light mode toggle in the header:
- Click the sun/moon switch to toggle between themes
- Theme preference is saved in local storage
- Smooth transitions across all pages
- Eye-friendly dark mode for comfortable reading

## 📱 Pages

- **Home** (`/`): Display all news with search and filter
- **News Detail** (`/news/:id`): Full article view with share and download options
- **Channels** (`/channels`): Join our channels on various platforms
- **About** (`/about`): Information about Update On Education
- **Ask UOE Bot** (`/chatbot`): Interactive chatbot for Q&A

## 🎨 Technologies Used

- **React** - UI framework
- **TypeScript** - Type safety
- **Tailwind CSS** - Styling
- **Motion (Framer Motion)** - Animations
- **React Router** - Navigation
- **Lucide React** - Icons
- **Vite** - Build tool

## 📄 License

This project is open source and available for educational purposes.

## 💡 Tips

- Keep news content concise and informative
- Update chatbot Q&A regularly based on user queries
- Use descriptive categories for better organization
- Test PDF downloads before deploying updates

---

Built with ❤️ for the education community

## 🤖 How to Update Chatbot Q&A

To add or edit chatbot responses, open `/data/newsData.ts` and edit the `chatbotDatabase` array:

```typescript
{
  keywords: ["keyword1", "keyword2"], // Trigger words
  answer: "Your bot response here..."
}
```

## 📡 How to Update Channel Links

To update your social media channel links, open `/pages/ChannelsPage.tsx` and modify the `link` property in the `channels` array:

```typescript
{
  name: "WhatsApp Channel",
  link: "https://whatsapp.com/channel/YOUR_CHANNEL_ID", // Replace with your actual channel
  // ... other properties
}
```

**Supported Channels:**
- WhatsApp
- Telegram
- YouTube
- Instagram
- Twitter/X
- Facebook

**Mobile App Compatibility:**
When users click channel links on mobile devices, they will automatically open in the respective mobile apps if installed.

## 📝 Admin Workflow - How to Post News

As an admin, you manually edit and deploy news through GitHub. Follow these steps:

### Step 1: Add/Edit News Content

1. Open `/data/newsData.ts` in your code editor
2. Add a new news item to the `newsData` array:

```typescript
{
  id: "unique-id-here",
  title: "Your News Title",
  content: "Your news content here...",
  date: "2024-12-12",
  category: "Policy Updates", // or any category
  image: "education-policy" // choose from available images
}
```

### Step 2: Commit and Push to GitHub

```bash
git add .
git commit -m "Add new news: Your News Title"
git push origin main
```

### Step 3: Netlify Auto-Deploy

Once you push to GitHub, Netlify will automatically:
- Detect the changes
- Build your app
- Deploy the updated version
- Your news will be live in ~1-2 minutes!

### Available Image Keys:
- `education-policy`
- `university-campus`
- `students-learning`
- `online-learning`
- `science-lab`
- `teacher-training`

### Available Categories:
You can use any category name. Common ones:
- Policy Updates
- Admissions
- Scholarships
- Technology
- Exams
- Results

## 💬 WhatsApp Contact Support

The app includes a floating WhatsApp contact button (bottom-right corner) with two support options:

- **Admin Support**: +91 7416472177
- **Helpline**: +91 9391978393

### How to Update WhatsApp Numbers:

Edit `/components/WhatsAppContact.tsx` and modify the `contacts` array:

```typescript
{
  name: "Admin Support",
  number: "7416472177", // Your admin number
  // ...
},
{
  name: "Helpline",
  number: "9391978393", // Your helpline number
  // ...
}
```

**Features:**
- Floating button appears on all pages
- Pre-filled greeting message
- Opens WhatsApp directly on mobile/desktop
- Beautiful animated UI with pulsing effect
- Shows both admin and helpline contacts