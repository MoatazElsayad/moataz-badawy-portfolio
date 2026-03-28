# 📚 Detailed Setup & Customization Guide

Complete step-by-step instructions to set up and customize your portfolio website.

## 🚀 Initial Setup

### Step 1: Install Node.js

If you haven't already:
1. Download from [nodejs.org](https://nodejs.org/)
2. Install the LTS version
3. Verify installation:
   ```bash
   node --version
   npm --version
   ```

### Step 2: Install Dependencies

In the portfolio folder:
```bash
npm install
```

This will download React, Vite, and other required packages.

### Step 3: Start Development Server

```bash
npm run dev
```

Open your browser to:
- `http://localhost:5173` (or the address shown in terminal)

You should see your portfolio website! 🎉

## 🎨 Customization Guide

### 1. Update Hero Section

**File**: `src/components/Hero.jsx`

```jsx
// Change your name
<h1 className="hero-name">Your Name Here</h1>

// Change title
<h2 className="hero-title">Your Title Here</h2>

// Change typing phrases
const phrases = [
  'Building Amazing Things',
  'Solving Problems',
  'Creating Impact'
]

// Change tagline
<p className="hero-subtitle">
  Your custom tagline here
</p>

// Update social links
<a href="https://github.com/yourprofile" target="_blank">
```

### 2. Update About Section

**File**: `src/components/About.jsx`

Replace the bio paragraphs with your own story:

```jsx
<p>
  I'm a passionate Computer Engineering student...
  [Your about text here]
</p>
```

### 3. Update Skills

**File**: `src/components/Skills.jsx`

```jsx
const skillCategories = [
  {
    name: "Your Category",
    icon: "💻",
    skills: ["Skill1", "Skill2", "Skill3"]
  },
  // Add more categories...
]

// And update proficiency bars
{[
  { name: "Your Skill", level: 90 },
  // Add more skills...
]}
```

### 4. Update Projects

**File**: `src/components/Projects.jsx`

```jsx
const projects = [
  {
    id: 1,
    title: "Your Project Name",
    description: "What it does...",
    image: "🎨",  // Use emoji or image
    technologies: ["React", "Node.js"],
    github: "https://github.com/yourproject",
    live: "https://yourproject.com",
    category: "fullstack"
  },
  // Add more projects...
]

// Add new categories as needed
const categories = ['all', 'yourcat1', 'yourcat2']
```

### 5. Update Experience

**File**: `src/components/Experience.jsx`

```jsx
const timeline = [
  {
    type: "education",  // or "experience" or "achievement"
    period: "2021 - 2025",
    title: "Your Education/Experience",
    organization: "Your Organization",
    description: "What you did...",
    achievements: ["Achievement 1", "Achievement 2"]
  },
  // Add more items...
]
```

### 6. Update Contact Info

**File**: `src/components/Contact.jsx`

```jsx
<a href="mailto:your-email@example.com">your-email@example.com</a>
// Update social links:
<a href="https://github.com/yourprofile">GitHub</a>
<a href="https://linkedin.com/in/yourprofile">LinkedIn</a>
```

**File**: `src/components/Footer.jsx`

Similar updates to social links and contact info.

### 7. Update Colors & Theme

**File**: `src/index.css`

Update the CSS variables:

```css
:root {
  --primary-color: #0066ff;        /* Change main color */
  --secondary-color: #00d4ff;      /* Change accent */
  --accent-color: #5b21b6;         /* Third color */
  --dark-bg: #0a0e27;              /* Dark mode background */
  --light-bg: #ffffff;             /* Light mode background */
  // ... update other colors ...
}
```

### 8. Update Typography

To change fonts, update in `index.html`:

```html
<!-- Google Fonts -->
<link href="https://fonts.googleapis.com/css2?family=Your+Font:wght@300;400;600;700&display=swap" rel="stylesheet">
```

Then update in `index.css`:

```css
body {
  font-family: 'Your Font', sans-serif;
}
```

## 🔧 Advanced Customization

### Add a Profile Picture

1. Place your image in `public/` folder
2. Add to About section in `About.jsx`:

```jsx
<img src="/your-image.jpg" alt="Profile" className="profile-img" />
```

3. Add CSS in `About.css`:

```css
.profile-img {
  width: 200px;
  border-radius: 50%;
  box-shadow: var(--shadow-lg);
}
```

### Add a CV Download Button

1. Place your CV in `public/cv.pdf`
2. Update in `Experience.jsx`:

```jsx
<a href="/cv.pdf" className="btn btn-primary" download>
  📄 Download My CV
</a>
```

### Connect Contact Form to Email Service

Option 1: Using **Formspree**

1. Go to [formspree.io](https://formspree.io)
2. Create account and form
3. Update Contact.jsx form action to Formspree endpoint

Option 2: Using **Netlify Forms**

If deploying on Netlify, add to form:
```jsx
<form name="contact" method="POST" netlify>
```

Option 3: Using **EmailJS**

```bash
npm install @emailjs/browser
```

Then in Contact.jsx:
```jsx
import emailjs from '@emailjs/browser';

// Initialize in useEffect
emailjs.init('YOUR_PUBLIC_KEY');

// Send email on form submit
emailjs.send('service_id', 'template_id', templateParams)
```

### Add Google Analytics

1. Go to [analytics.google.com](https://analytics.google.com)
2. Create a property and get your tracking ID
3. Add to `index.html`:

```html
<!-- Google Analytics -->
<script async src="https://www.googletagmanager.com/gtag/js?id=YOUR_ID"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'YOUR_ID');
</script>
```

### Customize Animations

Edit in component CSS files. Example from `Hero.css`:

```css
@keyframes float {
  0%, 100% {
    transform: translateY(0px);
  }
  50% {
    transform: translateY(-30px);  /* Change animation range */
  }
}

.floating-shape {
  animation: float 4s ease-in-out infinite;  /* Change speed */
}
```

## 📱 Testing Locally

### Desktop
```bash
npm run dev
```

### Mobile
1. Find your computer's local IP:
   - Windows: `ipconfig` (look for "IPv4 Address")
   - Mac/Linux: `ifconfig`

2. On mobile, visit: `http://YOUR_IP:5173`

### Test Different Screen Sizes
Use browser DevTools (F12) → Toggle device toolbar

## 🚀 Build & Deploy

### Build for Production

```bash
npm run build
```

Creates optimized `dist/` folder.

### Deploy to Vercel

```bash
npm i -g vercel
vercel
```

Follow prompts. Your site will be live!

### Deploy to Netlify

1. Create account on [netlify.com](https://netlify.com)
2. Build: `npm run build`
3. Drag `dist/` folder to Netlify
4. Done! Get a live URL

### Deploy to GitHub Pages

Update `vite.config.js`:
```js
export default defineConfig({
  base: '/portfolio/',
  plugins: [react()],
})
```

Then:
```bash
npm run build
git add dist/
git commit -m "Deploy"
git push
```

Go to GitHub Settings → Pages → select `dist/` as source.

## ⚙️ Common Customizations Checklist

- [ ] Update name in Hero
- [ ] Update title/tagline in Hero
- [ ] Update About text
- [ ] Add/remove skills
- [ ] Update projects (at least 3-4)
- [ ] Update experience/education
- [ ] Update social links (everywhere!)
- [ ] Update contact email
- [ ] Change color scheme
- [ ] Test on mobile
- [ ] Build and test: `npm run build && npm run preview`
- [ ] Deploy!

## 🐛 Troubleshooting

### Port 5173 already in use
```bash
npm run dev -- --port 3000
```

### Dependencies issues
```bash
rm -rf node_modules package-lock.json
npm install
```

### Build fails
```bash
npm run build --verbose
```

Check console for specific error messages.

### Dark mode not working
Clear browser cache and localStorage.

## 📝 Useful Resources

- [React Documentation](https://react.dev)
- [Vite Documentation](https://vitejs.dev)
- [MDN CSS Guide](https://developer.mozilla.org/en-US/docs/Web/CSS)
- [Web Design Best Practices](https://www.w3schools.com)

## 🎓 Learning Path (Optional)

To better understand and expand this portfolio:

1. **React Basics**: Components, Props, State, Hooks
2. **CSS**: Flexbox, Grid, Animations, Responsive Design
3. **JavaScript**: ES6+, async/await, DOM manipulation
4. **Web Performance**: Optimization, Lazy Loading, Code Splitting
5. **Deployment**: Vercel, Netlify, GitHub Pages

## ✨ Ideas for Enhancement

- Add a blog section
- Add testimonials from professors/employers
- Integrate with Spotify for currently playing song
- Add certificate carousel
- Add counter animations when scrolling
- Add newsletter signup
- Add multiple language support
- Add dark mode persistence (localStorage)
- Add smooth page transitions
- Add scroll progress indicator

---

**Need Help?**
- Check the main README.md
- Review component comments in code
- Test changes with `npm run dev`
- Build with `npm run build` before deploying
