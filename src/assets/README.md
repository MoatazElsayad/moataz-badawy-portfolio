# 📁 Assets Folder

This folder contains all media files for your portfolio.

## 📸 `/images`
**Profile pictures, team photos, personal branding images**

Example:
- `profile.jpg` - Your professional headshot
- `banner.png` - Header/hero banner
- `avatar.svg` - Profile avatar

Usage in React:
```javascript
import profileImg from "../assets/images/profile.jpg";

<img src={profileImg} alt="Moataz Badawy" />
```

---

## 🖼️ `/projects`
**Project screenshots, demos, and previews**

Example:
- `ai-finance-tracker.jpg` - Screenshot of finance app
- `iot-monitor.png` - IoT dashboard screenshot
- `robotics-demo.gif` - Robot in action

Usage in React:
```javascript
import projectImage from "../assets/projects/ai-finance-tracker.jpg";

<img src={projectImage} alt="AI Finance Tracker" />
```

---

## 💡 Pro Tips

1. **Compress images before adding**
   - Use: TinyPNG, ImageOptim, or Squoosh
   - Smaller files = Faster website = Better for recruiters

2. **Use descriptive names**
   - ✅ `ai-finance-tracker.jpg`
   - ❌ `project1.jpg`

3. **Organize by project**
   - Create subfolders if needed:
     ```
     /projects
       /finance-tracker
         screenshot1.jpg
         screenshot2.jpg
       /iot-monitor
         dashboard.jpg
     ```

4. **Format recommendations**
   - PNG: logos, icons, graphics
   - JPG: photos, screenshots
   - SVG: vector icons, logos
   - GIF: short animations/demos
