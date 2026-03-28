# 🎯 START HERE

**Quick-start guide to get your portfolio running in 5 minutes!**

## ⚡ The 5-Minute Quick Start

### 1. Open Terminal in Portfolio Folder

```bash
cd /path/to/portfolio
```

### 2. Install Dependencies

```bash
npm install
```
*(Takes 1-2 minutes)*

### 3. Start Development Server

```bash
npm run dev
```

### 4. Open Your Portfolio

Visit: http://localhost:5173

✅ **Your portfolio is now live on your computer!**

---

## 📝 First Customizations (Next 10 Minutes)

Open `src/components/Hero.jsx` and change:

```jsx
// Line 1: Change your name
<h1 className="hero-name">Your Name Here</h1>

// Line 2: Change your title  
<h2 className="hero-title">Your Title Here</h2>

// Line 3: Update typing phrases
const phrases = [
  'Your Phrase 1',
  'Your Phrase 2',
  'Your Phrase 3'
]
```

**Changes will appear instantly in your browser!** ✨

---

## 🎨 Customization Roadmap

### Must Do (15 minutes)
1. Update name in `Hero.jsx`
2. Update title in `Hero.jsx`
3. Update About text in `About.jsx`
4. Update projects in `Projects.jsx`
5. Update social links (GitHub, LinkedIn, Email)

### Should Do (30 minutes)
1. Update skills in `Skills.jsx`
2. Update experience in `Experience.jsx`
3. Customize colors in `src/index.css`
4. Update contact info in `Contact.jsx`

### Nice to Have (Optional)
1. Add profile image
2. Change fonts
3. Connect contact form to email service
4. Add more animations

---

## 📁 Key Files to Edit

| File | What to Change | Why |
|------|----------------|-----|
| `src/components/Hero.jsx` | Name, title, phrases, links | First impression |
| `src/components/About.jsx` | Your bio | Tell your story |
| `src/components/Skills.jsx` | Your skills & levels | Show expertise |
| `src/components/Projects.jsx` | Your projects | Showcase work |
| `src/components/Experience.jsx` | Education & experience | Build credibility |
| `src/components/Contact.jsx` | Contact info | Make it easy to reach you |
| `src/index.css` | Colors (CSS variables) | Brand identity |

---

## 🚀 Deploy in 5 Minutes (After Customizing)

### Option A: Vercel (Easiest)

```bash
npm run build
npm i -g vercel
vercel
```

Your portfolio is now live! 🎉

### Option B: Netlify

```bash
npm run build
```

Drag `dist/` folder to [netlify.com](https://netlify.com)

Your portfolio is now live! 🎉

### Option C: GitHub Pages

Push to GitHub and enable Pages in settings.

---

## 🐛 Common Issues & Solutions

### Q: Port 5173 already in use
```bash
npm run dev -- --port 3000
```

### Q: Page not updating after changes
1. Save the file (Ctrl+S)
2. Check the terminal for errors
3. Hard refresh browser (Ctrl+Shift+R)
4. Clear browser cache if needed

### Q: Images not showing
- Make sure image is in `public/` folder
- Use correct path: `/image-name.jpg`
- Check browser console for errors (F12)

### Q: Styling looks broken
- Clear browser cache
- Hard refresh (Ctrl+Shift+R)
- Check that CSS files are imported

---

## 📚 Detailed Guides

After you get it running, read these for deeper customization:

1. **[SETUP_AND_CUSTOMIZATION.md](SETUP_AND_CUSTOMIZATION.md)** - Complete walkthrough
2. **[ARCHITECTURE.md](ARCHITECTURE.md)** - How everything works
3. **[QUICK_REFERENCE.md](QUICK_REFERENCE.md)** - All files that need updates
4. **[README.md](README.md)** - Full documentation

---

## 💡 Pro Tips

1. **Make small changes**: Edit one thing, save, check result
2. **Keep original**: Backup original files before major changes
3. **Test often**: Use `npm run dev` to see changes immediately
4. **Use browser DevTools**: F12 to debug styling issues
5. **Commit to git**: `git add . && git commit -m "Update portfolio"` after changes

---

## 🎯 Your Next Steps

- [ ] Run `npm install`
- [ ] Run `npm run dev`
- [ ] Visit http://localhost:5173
- [ ] Open `src/components/Hero.jsx`
- [ ] Change name and title
- [ ] See changes in browser
- [ ] Update About section
- [ ] Add your projects
- [ ] Update skills
- [ ] Update contact info
- [ ] Run `npm run build`
- [ ] Deploy to Vercel/Netlify
- [ ] Share your portfolio! 🚀

---

## ❓ Need Help?

### Error in Terminal?
1. Look at the error message
2. Check if all dependencies installed: `npm install`
3. Restart server: Stop (Ctrl+C) → `npm run dev`

### Website Looks Wrong?
1. Hard refresh: Ctrl+Shift+R (or Cmd+Shift+R on Mac)
2. Clear cache: DevTools → Application → Clear Storage
3. Check CSS files imported correctly

### Want to Learn More?
- Check [React docs](https://react.dev)
- Review component comments in code
- Look at similar components for patterns

---

## 🎉 Congratulations!

You now have a **professional, modern, fully responsive portfolio website**!

### What You've Got:
✅ Modern design with smooth animations
✅ Fully responsive (mobile, tablet, desktop)
✅ Dark mode toggle
✅ Contact form with validation
✅ Project showcase with filtering
✅ Professional layout
✅ Fast performance
✅ Easy to customize
✅ Ready to deploy
✅ No coding experience needed to customize!

### Now Go Build Your Future! 🚀

---

**Questions? Problem? Check the detailed guides above or review the code comments in the components.**
