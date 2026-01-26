# Quick Start Guide - Freelance Portfolio Site

## 🚀 Get Your Portfolio Live in 5 Minutes

### Step 1: Start the Development Server
```bash
cd /path/to/your/project
pnpm install  # if not already installed
pnpm dev
```
Visit: **http://localhost:3000**

### Step 2: Toggle Dark/Light Theme
Click the theme toggle button in the top-right of the header to switch between dark and light modes.

### Step 3: Update Your Information

#### Change Your Name & Headline
📄 **File**: `src/components/Home/Hero/index.tsx` (Line 24)
```tsx
<h1 className='text-5xl md:text-6xl font-bold text-white dark:text-white mb-6 leading-tight'>
  Your Name Here - Your Title
</h1>
```

#### Update Your Bio
📄 **File**: `src/components/Home/Hero/index.tsx` (Line 27)
```tsx
<p className='text-xl text-gray-300 dark:text-gray-400 leading-8 mb-8 max-w-2xl'>
  Your professional bio here. Describe what you do and what makes you unique.
</p>
```

#### Customize Tech Stack
📄 **File**: `src/components/Home/Hero/index.tsx` (Line 65-67)
```tsx
{['React', 'Next.js', 'TypeScript', 'Tailwind CSS', 'Node.js'].map((tech) => (
  // Replace with your actual tech stack
))}
```

#### Update Your Logo
📄 **File**: `src/components/Layout/Header/index.tsx` (Line 34)
```tsx
// Replace the logo image path
src={getImgPath('/images/logo/your-logo.png')}
```

### Step 4: Add Your Contact Information
📄 **File**: `src/components/Layout/Footer/index.tsx` (Lines 18-21)

Update the social links:
```tsx
<Link href="https://github.com/your-username" aria-label="GitHub">
  // GitHub link
</Link>
```

### Step 5: Customize Colors (Optional)

#### Dark Theme Colors
📄 **File**: `tailwind.config.ts` (Lines 113-117)
```typescript
'dark-bg': '#0f172a',              // Main background
'dark-accent': '#00d9ff',          // Button accent (cyan)
'dark-text-primary': '#f1f5f9',    // Main text
'dark-text-secondary': '#cbd5e1',  // Secondary text
```

---

## 📝 Quick Text Updates

### Hero Section CTA Buttons
- Line 35-38: Change button text and links

### Contact Form Fields
- Line 14: Change "Let's Work Together" headline
- Line 15: Update description text

### Footer Links
- Lines 45-75: Update service links, quick links, and social media

---

## 🎨 Key Color Palette

### Dark Theme (Default)
- **Background**: Slate 900 (`#0f172a`)
- **Cards**: Slate 800 (`#1a202c`)
- **Accent**: Cyan (`#00d9ff`)
- **Text**: White/Light Gray

### Light Theme
- **Background**: White
- **Accent**: Blue (`#1358D8`)
- **Secondary**: Light Orange (`#F9C78F`)

---

## 🔌 Connect Contact Form

### Option 1: Formspree (Easiest)
1. Go to [formspree.io](https://formspree.io)
2. Create an account and form
3. Update form action in `src/components/Contact/Form/index.tsx`

### Option 2: SendGrid
1. Sign up at [sendgrid.com](https://sendgrid.com)
2. Get API key
3. Create backend API route in `src/app/api/contact.ts`

### Option 3: Custom Email
Create API route:
```typescript
// src/app/api/contact/route.ts
export async function POST(request: Request) {
  const data = await request.json()
  // Send email logic here
}
```

---

## 📱 Test Responsive Design

1. Open DevTools: `F12` or `Cmd+Option+I`
2. Toggle Device Toolbar: `Ctrl+Shift+M` or `Cmd+Shift+M`
3. Test on different screen sizes:
   - Mobile: 375px
   - Tablet: 768px
   - Desktop: 1920px

---

## 🚀 Deploy to Production

### Deploy to Vercel (Recommended - Free)
```bash
npm install -g vercel
vercel
```

### Deploy to Netlify
1. Push code to GitHub
2. Connect repo to Netlify
3. Deploy automatically on push

### Deploy Anywhere
```bash
pnpm build
pnpm start
```

---

## 🎯 Important Files to Know

| File | Purpose |
|------|---------|
| `src/components/Home/Hero/index.tsx` | Main hero section with your intro |
| `src/components/Layout/Header/index.tsx` | Navigation and header |
| `src/components/Layout/Footer/index.tsx` | Footer with social links |
| `src/components/Contact/Form/index.tsx` | Contact form |
| `tailwind.config.ts` | Colors and styling config |
| `src/app/globals.css` | Global styles |

---

## ⚡ Performance Tips

1. **Compress Images**: Use [tinypng.com](https://tinypng.com)
2. **Optimize Fonts**: Only load necessary font weights
3. **Lazy Load**: Images load on scroll
4. **Minify Code**: Automatic in production build

---

## 🐛 Common Customizations

### Change Primary Color
Edit `tailwind.config.ts` colors object

### Add New Navigation Links
Edit `src/components/Layout/Header/Navigation/menuData.ts`

### Update Page Content
Each page is in `src/app/(site)/[page]/page.tsx`

### Add New Sections
Create new components in `src/components/`

---

## 📞 Need Help?

### Check These Resources
1. **Next.js Docs**: https://nextjs.org/docs
2. **Tailwind CSS**: https://tailwindcss.com/docs
3. **Project README**: See `PORTFOLIO_GUIDE.md`
4. **Changes Made**: See `CHANGES_SUMMARY.md`

---

## ✅ Pre-Launch Checklist

- [ ] Updated your name and headline
- [ ] Added professional bio
- [ ] Updated logo/avatar
- [ ] Changed tech stack to yours
- [ ] Updated social media links
- [ ] Set up contact form
- [ ] Added portfolio projects
- [ ] Tested on mobile
- [ ] Tested light/dark theme toggle
- [ ] Ready to deploy!

---

## 🎉 You're All Set!

Your freelance portfolio is ready to showcase your work and attract clients. 

**Next steps:**
1. Customize the content above
2. Add your portfolio projects
3. Deploy to the web
4. Share your portfolio link
5. Start getting client inquiries!

---

**Happy showcasing!** 🚀
