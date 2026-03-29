# 📄 Public Folder

This folder contains files that are **directly accessible** via URL.

## 🎯 What Goes Here

### 1. 📄 CV / Resume (MOST IMPORTANT)
**Your CV must be in this folder**

Example:
```
/public/Moataz_Badawy_CV.pdf
```

### Usage:
```html
<!-- Simple link -->
<a href="/Moataz_Badawy_CV.pdf" download>
  Download CV
</a>

<!-- Or in React -->
<a href="/Moataz_Badawy_CV.pdf" download className="btn">
  Download CV
</a>
```

### ⚡ Why `/public`?

✅ Files are directly accessible via URL
✅ No import needed
✅ URL structure: `yourdomain.com/Moataz_Badawy_CV.pdf`
✅ Search engines can find it
✅ Works perfectly after deployment

---

## 📁 Other Public Files

- `robots.txt` - For SEO (search engines)
- `sitemap.xml` - SEO (list of pages)
- `favicon.ico` - Browser tab icon
- `manifest.json` - PWA configuration (if needed)

---

## 🔥 Pro Tips for Your CV

1. **Naming Convention**
   ```
   ✅ Moataz_Badawy_CV.pdf
   ✅ Moataz_Resume_2024.pdf
   ❌ CV.pdf
   ❌ resume.pdf
   ❌ MyCV.docx (use PDF!)
   ```

2. **Always use PDF**
   - Consistent across devices
   - Professional appearance
   - Can't accidentally edit
   - 95% of recruiters expect PDF

3. **Keep it Updated**
   - Update CV before job hunting
   - Version control (e.g., CV_v2, CV_v3)
   - Or just update same file monthly

4. **File Size**
   - Target: < 2MB
   - Ideal: < 500KB
   - Use PDF compression tools if needed

---

## 🚀 Quick Implementation

Add this to your **Experience.jsx** or create a dedicated button:

```javascript
<a 
  href="/Moataz_Badawy_CV.pdf" 
  download 
  className="btn btn-primary"
  target="_blank"
  rel="noopener noreferrer"
>
  Download CV
</a>
```

---

## 📋 Checklist

- [ ] CV placed in `/public/`
- [ ] Named with your full name
- [ ] Is a PDF file
- [ ] File size < 2MB
- [ ] Download link working
- [ ] Link opens/downloads in browser
