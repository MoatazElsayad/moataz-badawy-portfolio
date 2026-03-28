# 🔗 Quick Update Reference

A quick checklist of all files and locations where you need to add your personal information.

## 📍 Files to Update

### 1. **src/components/Hero.jsx**
- [ ] Line: Change "Moataz Badawy" to your name
- [ ] Line: Change "Computer Engineering Student" to your title
- [ ] Line: Update typing phrases array
- [ ] Line: Update hero subtitle/tagline
- [ ] Line: Update GitHub link
- [ ] Line: Update LinkedIn link
- [ ] Line: Update email link

### 2. **src/components/About.jsx**
- [ ] Replace all bio paragraphs with your story
- [ ] Update highlight items (education, goal, passion, vision)
- [ ] Update emoji in highlights (optional)

### 3. **src/components/Skills.jsx**
- [ ] Update skill categories
- [ ] Update skills in each category
- [ ] Update proficiency levels (0-100)
- [ ] Update icons/emojis

### 4. **src/components/Projects.jsx**
- [ ] Add your actual projects (update all fields):
  - `title`: Project name
  - `description`: What it does
  - `image`: Emoji or image
  - `technologies`: Tech stack
  - `github`: Your GitHub link
  - `live`: Live demo URL (if available)
  - `category`: Project category

### 5. **src/components/Experience.jsx**
- [ ] Update education entry (university, dates, etc.)
- [ ] Update experience entries (if any)
- [ ] Update achievements/highlights
- [ ] Update CV download link

### 6. **src/components/Contact.jsx**
- [ ] Update email address
- [ ] Update social media links
- [ ] Update location

### 7. **src/components/Footer.jsx**
- [ ] Update GitHub link
- [ ] Update LinkedIn link
- [ ] Update email link
- [ ] Update location (if different)

### 8. **src/components/Navbar.jsx**
- [ ] Keep "MB" or change to your initials
- [ ] Update GitHub link (in navbar social)
- [ ] Update LinkedIn link (in navbar social)

### 9. **src/index.css** (Colors)
- [ ] Update `--primary-color`
- [ ] Update `--secondary-color`
- [ ] Update `--accent-color`
- [ ] Update other color variables as desired

### 10. **index.html** (Meta Tags)
- [ ] Update `<title>` 
- [ ] Update `<meta name="description">`
- [ ] Update `<meta name="author">`

### 11. **public/** (Files)
- [ ] Add your profile image (optional)
- [ ] Add your CV file (cv.pdf)
- [ ] Add favicon (optional)

## 🔍 Find & Replace Quick Reference

### Find all instances of:
- "Moataz Badawy" → Your name
- "moataz" → your name (lowercase)
- "moataz@example.com" → Your email
- "Computer Engineering Student" → Your title
- "https://github.com" → Your GitHub profile
- "https://linkedin.com" → Your LinkedIn profile
- "Cairo, Egypt" → Your location (in Contact.jsx and Footer.jsx)

## 📧 Contact Information to Update

Your email appears in:
- Hero.jsx (social link)
- Contact.jsx (info and form)
- Footer.jsx (social link)

Your GitHub appears in:
- Hero.jsx (social link)
- Contact.jsx (info)
- Footer.jsx (social link)

Your LinkedIn appears in:
- Hero.jsx (social link)
- Contact.jsx (info)
- Footer.jsx (social link)

## 🎨 Color Variables (in src/index.css)

```css
:root {
  --primary-color: #0066ff;        /* Main brand color */
  --secondary-color: #00d4ff;      /* Accent color */
  --accent-color: #5b21b6;         /* Alternative accent */
  --dark-bg: #0a0e27;              /* Dark mode background */
  --light-bg: #ffffff;             /* Light mode background */
  --dark-text: #1a1a1a;            /* Dark text color */
  --light-text: #f0f0f0;           /* Light text color */
  --dark-card: #1a1f3a;            /* Dark mode cards */
  --light-card: #f5f5f5;           /* Light mode cards */
  --border-color: #e0e0e0;         /* Light borders */
  --dark-border: #2a3f5f;          /* Dark borders */
}
```

## 📱 Social Links Format

| Platform | URL Format | Example |
|----------|-----------|---------|
| GitHub | https://github.com/username | https://github.com/moataz |
| LinkedIn | https://linkedin.com/in/username | https://linkedin.com/in/moatazalam |
| Email | mailto:email@domain.com | mailto:moataz@gmail.com |

## 🎯 Priority Updates (Must Do)

1. ✅ Update name in Hero.jsx
2. ✅ Update email in Contact.jsx and Footer.jsx
3. ✅ Update GitHub URL in all components
4. ✅ Update LinkedIn URL in all components
5. ✅ Update About Me section
6. ✅ Add 4-6 real projects
7. ✅ Update experience/education

## ✨ Nice to Have (Recommended)

1. 📸 Add profile picture to About section
2. 🎨 Customize color scheme for personal brand
3. 📄 Add CV download link
4. 📧 Connect email form to EmailJS or Formspree
5. 🎬 Record screen/GIF of projects
6. 🏆 Add certifications or achievements
7. 📊 Add GitHub stats or contribution graph

## 🚀 Deployment URLs to Update (After Deploy)

Once deployed, update any hardcoded URLs:

- Portfolio URL in resume/LinkedIn
- Social media links (if portfolio URL included)
- Email signature (if applicable)

## 💡 Quick Tips

- **Save backup** of originals before major changes
- **Test locally** with `npm run dev` after changes
- **Clear cache** in browser (Ctrl+Shift+Del) if changes don't show
- **Use Ctrl+F** in files to find text to replace
- **Commit to git** after major changes
- **Check styling** on mobile (DevTools → Toggle device toolbar)

---

**Remember**: After changing content, always test with `npm run dev` to see changes immediately!
