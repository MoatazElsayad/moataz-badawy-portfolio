# 📊 Data Folder

This folder contains all content data separated from UI components.

## 📋 `projects.js`
**All project information in one organized place**

This file stores:
- Project titles and descriptions
- Technologies used
- Links (GitHub, live demo)
- Project images
- Categories (fullstack, embedded, systems, etc)
- Start/end dates
- Key highlights

### Benefits:
✅ Easy to update projects without touching components
✅ Can be imported anywhere in your app
✅ Scales well when you add more projects
✅ Can export to JSON for APIs later

### Usage Example:
```javascript
import projects from "../data/projects.js";

// In a component
projects.map(project => (
  <div key={project.id}>
    <h2>{project.title}</h2>
    <p>{project.description}</p>
    <img src={`/images/${project.image}`} alt={project.title} />
  </div>
))
```

---

## 🔮 Future Data Files (Optional)

You might add later:

- `experience.js` - Work history, education, certifications
- `skills.js` - Technical skills organized by category
- `testimonials.js` - Client/colleague recommendations
- `blog.js` - Blog post metadata (if you add a blog)

---

## 💡 Data Structure Best Practice

Keep your data:
- **Flat** - Easy to parse
- **Consistent** - Same format for all items
- **Documented** - Comments explaining fields
- **Separated** - Not mixed with UI code
