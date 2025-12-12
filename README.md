# Backend Developer Portfolio

A modern, visually stunning portfolio website showcasing all backend projects completed during the HNG Backend Internship. Built with Node.js, TypeScript, and EJS.

## 🚀 Live Demo

[View Live Portfolio](https://your-portfolio.railway.app)

## ✨ Features

- **Beautiful Modern Design**: Dark theme with gradient accents and smooth animations
- **Responsive Layout**: Works perfectly on desktop, tablet, and mobile devices
- **Project Showcase**: Detailed pages for each project with technologies, features, and learnings
- **RESTful API**: JSON endpoints for programmatic access to project data
- **Fast & Efficient**: Built with performance in mind
- **Easy to Deploy**: Ready for deployment on Railway, Heroku, or any Node.js hosting

## 📁 Project Structure

```
backend-portfolio/
├── src/
│   ├── config/          # Configuration files
│   ├── data/
│   │   └── projects.ts  # Project data
│   ├── routes/
│   │   └── projects.ts  # Route handlers
│   ├── views/
│   │   ├── index.ejs           # Homepage
│   │   ├── project-detail.ejs  # Project detail page
│   │   └── about.ejs           # About page
│   ├── public/
│   │   ├── css/
│   │   │   └── styles.css      # Styles
│   │   └── js/
│   │       └── main.js         # JavaScript
│   └── app.ts           # Main application
├── .env.example         # Environment variables template
├── package.json         # Dependencies
├── tsconfig.json        # TypeScript config
└── README.md           # This file
```

## 🛠️ Technologies Used

- **Runtime**: Node.js
- **Language**: TypeScript
- **Framework**: Express.js
- **Template Engine**: EJS
- **Security**: Helmet, CORS
- **Rate Limiting**: express-rate-limit
- **Compression**: compression
- **Logging**: Morgan

## 📦 Installation

### Prerequisites

- Node.js (v16 or higher)
- npm or yarn

### Step-by-Step Setup

1. **Clone the repository**

```bash
git clone https://github.com/yourusername/backend-portfolio.git
cd backend-portfolio
```

2. **Install dependencies**

```bash
npm install
```

3. **Create environment file**

```bash
cp .env.example .env
```

Edit `.env` and add your configuration:

```env
PORT=3000
NODE_ENV=development
```

4. **Run in development mode**

```bash
npm run dev
```

The server will start at `http://localhost:3000`

## 🚢 Deployment

### Railway Deployment

1. Install Railway CLI:
```bash
npm install -g @railway/cli
```

2. Login and deploy:
```bash
railway login
railway init
railway up
```

### Heroku Deployment

1. Install Heroku CLI and login:
```bash
heroku login
```

2. Create and deploy:
```bash
heroku create your-portfolio
git push heroku main
```

### Manual Deployment

1. Build the project:
```bash
npm run build
```

2. Start the server:
```bash
npm start
```

## 📝 Scripts

- `npm run dev` - Start development server with auto-reload
- `npm run build` - Compile TypeScript to JavaScript
- `npm start` - Run production server
- `npm run watch` - Watch mode for TypeScript compilation

## 🎨 Customization

### Adding New Projects

Edit `src/data/projects.ts` and add your project:

```typescript
{
  id: 'unique-id',
  title: 'Project Title',
  stage: 'Stage X',
  description: 'Project description',
  technologies: ['Node.js', 'TypeScript'],
  features: ['Feature 1', 'Feature 2'],
  githubUrl: 'https://github.com/...',
  liveUrl: 'https://...',
  challenges: ['Challenge 1'],
  learnings: ['Learning 1'],
  keyEndpoints: ['GET /endpoint']
}
```

### Modifying Styles

Edit `src/public/css/styles.css`. Color variables are defined at the top:

```css
:root {
    --primary: #6366f1;
    --secondary: #8b5cf6;
    --accent: #ec4899;
    /* ... more variables */
}
```

### Updating Contact Information

Edit the contact section in `src/views/index.ejs`:

```html
<a href="mailto:your.email@example.com" class="contact-btn">Email</a>
<a href="https://github.com/yourusername" class="contact-btn">GitHub</a>
```

## 🔌 API Endpoints

### Get All Projects

```http
GET /api/projects
```

**Query Parameters:**
- `stage` - Filter by stage (e.g., "Stage 1")
- `technology` - Filter by technology (e.g., "Node.js")

**Response:**
```json
{
  "success": true,
  "count": 7,
  "data": [...]
}
```

### Get Single Project

```http
GET /api/projects/:id
```

**Response:**
```json
{
  "success": true,
  "data": {
    "id": "stage-0-profile",
    "title": "Dynamic Profile API",
    ...
  }
}
```

### Health Check

```http
GET /health
```

**Response:**
```json
{
  "status": "success",
  "message": "Portfolio API is running",
  "timestamp": "2025-12-12T10:30:00.000Z"
}
```

## 🎯 Featured Projects

This portfolio showcases the following projects:

1. **Stage 0** - Dynamic Profile API with Cat Facts
2. **Stage 1** - String Analyzer Service
3. **Stage 2** - Country Currency & Exchange API
4. **Stage 3** - Holiday Reminder AI Agent
5. **Stage 4** - Distributed Notification System
6. **Stage 7** - Authentication & API Key System
7. **Stage 8** - Wallet Service with Paystack

## 🤝 Contributing

Contributions are welcome! Feel free to:

1. Fork the repository
2. Create a feature branch
3. Commit your changes
4. Push to the branch
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the LICENSE file for details.

## 👤 Author

**Your Name**

- GitHub: [@yourusername](https://github.com/yourusername)
- LinkedIn: [Your Name](https://linkedin.com/in/yourusername)
- Email: your.email@example.com

## 🙏 Acknowledgments

- HNG Backend Internship for the amazing learning experience
- All the mentors and team members who supported throughout the journey

## 📞 Support

If you have any questions or need help, feel free to:

- Open an issue on GitHub
- Contact me via email
- Connect on LinkedIn

---

**Made with ❤️ and TypeScript**