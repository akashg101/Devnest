# 🎨 Freelance Portfolio - Dark Theme Visual Guide

## Color System

### Primary Colors

#### Dark Mode (Default)
```
Dark Background:    #0f172a (Slate 900)
Dark Light:         #1a202c (Slate 800)  
Dark Lighter:       #2d3748 (Slate 700)
Dark Accent:        #00d9ff (Cyan - PRIMARY CTA)
Dark Accent Hover:  #00b8d4 (Cyan Dark)
Dark Text Primary:  #f1f5f9 (Almost White)
Dark Text Secondary:#cbd5e1 (Light Gray)
```

#### Light Mode
```
Primary:            #1358D8 (Blue)
Secondary:          #102C46 (Dark Blue)
Accent:             #F9C78F (Light Apricot)
Border:             #CCD7E1 (Light Gray)
Text:               #102C46 (Dark)
Background:         #FFFFFF (White)
```

---

## Typography

### Headings
- **H1**: 48-60px, Bold, Leading-tight
  - Usage: Main hero headline, page titles
  - Color: Dark: White | Light: Dark Blue

- **H2**: 36px, Bold, Leading-[2.25rem]
  - Usage: Section headers
  - Color: Dark: White | Light: Secondary

- **H3**: 28px, Bold, Leading-[2rem]
  - Usage: Subsection headers
  - Color: Dark: White | Light: Secondary

### Body Text
- **Large**: 20px, Regular, Leading-[2rem]
  - Usage: Introductions, taglines
  - Color: Dark: Light Gray | Light: Slate Blue

- **Normal**: 16px, Regular, Leading-7
  - Usage: Regular content
  - Color: Dark: Gray-400 | Light: Slate Blue

- **Small**: 14px, Regular, Leading-6
  - Usage: Captions, metadata
  - Color: Dark: Gray-500 | Light: Slate Blue

---

## Button Styles

### Primary Button (Main CTA)
```
Dark Mode:
  Background: #00d9ff (Cyan)
  Text: #0f172a (Dark)
  Hover: #00b8d4 (Darker Cyan)
  Padding: py-4 px-8
  Border Radius: rounded-lg
  Font: Bold

Light Mode:
  Background: #1358D8 (Blue)
  Text: White
  Hover: #054ac8 (Darker Blue)
```

### Secondary Button (Outline)
```
Dark Mode:
  Border: 2px solid #00d9ff
  Text: #00d9ff
  Background: Transparent
  Hover: Background becomes #00d9ff, Text becomes #0f172a

Light Mode:
  Border: 2px solid #1358D8
  Text: #1358D8
  Background: Transparent
  Hover: Inverse colors
```

### Tertiary Button (Apricot)
```
Background: #F9C78F
Text: #102C46 (Dark)
Hover: rgba(249, 199, 143, 0.8)
```

---

## Component Layouts

### Hero Section
```
Layout: 2-column grid (66% | 33%)
Background: Gradient (slate-900 → slate-800)
Content:
  - Badge: Small cyan accent label
  - H1: Main headline
  - Paragraph: Tagline/description
  - CTAs: Primary + Secondary buttons
  - Features: 3-column feature list
  - Tech Stack: Horizontal tag list
Right Side:
  - Card: "Ready to Start?" component
  - Gradient: Background accent
```

### Header/Navigation
```
Height: 6rem (h-24)
Position: Sticky top
Background: White (light) | Slate-900 (dark)
Layout: Flex, space-between
Components:
  - Logo: Left
  - Nav Links: Center
  - Theme Toggle: Right
  - Contact Button: Right
Mobile: Hamburger menu (slide-in from right)
```

### Footer
```
Layout: 4-column grid + footer bar
Background: Slate-800 (dark) | Light gray (light)
Sections:
  1. Company Info: Logo + description
  2. Services: Web Dev, Design, Mobile
  3. Quick Links: About, Blog, Contact
  4. Connect: Social media icons
Bottom Bar: Copyright + Policy links
```

### Contact Form
```
Layout: 2-column (form left | empty right)
Background: White (light) | Slate-900 (dark)
Fields:
  - Input: Full width, rounded, bordered
  - Label: Above, gray text
  - Placeholder: Subtle, gray
  - Focus: Border becomes primary color
Submit Button: Full width, primary color
```

---

## Spacing System

### Padding
- **xs**: 0.25rem (1px)
- **sm**: 0.5rem (2px)
- **base**: 1rem (4px)
- **md**: 1.5rem (6px)
- **lg**: 2rem (8px)
- **xl**: 2.5rem (10px)
- **2xl**: 3rem (12px)

### Margins
- **Section Gap**: 2rem (md) → 4rem (lg)
- **Element Gap**: 1rem → 2rem
- **Padding Inside Cards**: 2rem

---

## Border Radius

```
sm: 0.375rem (6px)
base: 0.5rem (8px)
md: 0.75rem (12px)
lg: 1rem (16px)
xl: 1.5rem (24px)
2xl: 2rem (32px)
3xl: 2.5rem (40px)
full: 9999px (circles)
```

---

## Shadow System

### Light Shadow (Cards)
```
box-shadow: 0px 4px 17px rgba(0, 0, 0, 0.06)
```

### Dark Shadow
```
box-shadow: rgba(145, 158, 171, 0.2) 0px 0px 2px 0px,
            rgba(145, 158, 171, 0.12) 0px 12px 24px -4px
```

### Portfolio Box Shadow
```
box-shadow: 0px 20px 80px rgba(104, 117, 141, 0.15)
```

---

## Responsive Breakpoints

```
Mobile:  < 640px  (sm)
Tablet:  640px+   (md)
Desktop: 768px+   (lg)
Large:   1024px+  (xl)
XL:      1280px+  (2xl)
```

### Typography Scaling
- **H1**: 40px (mobile) → 56px (tablet) → 60px (desktop)
- **H2**: 28px (mobile) → 36px (desktop)
- **Body**: 16px (consistent)

### Layout Changes
- **Hero**: Stack (mobile) → 2-column (desktop)
- **Cards**: 1-col (mobile) → 2-col (tablet) → 4-col (desktop)
- **Menu**: Hamburger (mobile) → Horizontal (desktop)

---

## Interactive States

### Hover Effects
```
Buttons:
  - Brightness: +10%
  - Scale: 1.05 (on main CTA)
  - Shadow: Increase depth

Links:
  - Color: Change to primary
  - Underline: Appear/thicken
  - Transition: 200-300ms

Forms:
  - Border: Change to primary
  - Shadow: Add subtle glow
  - Background: Slight highlight
```

### Focus States
```
Inputs:
  - Outline: None (we use border)
  - Border Color: Primary color
  - Ring: Subtle shadow

Buttons:
  - Focus Ring: Subtle outline
  - Background: Slightly brighter
```

### Active States
```
Navigation Links:
  - Text Color: Primary color
  - Underline: Visible
  - Font: Bold or weighted

Buttons:
  - Background: Darker shade
  - Transform: Slight press effect (scale: 0.98)
```

---

## Animations

### Fade In
```css
animation: fadeIn 0.6s ease-in-out
```

### Slide Up
```css
animation: slideUp 0.6s ease-out
@keyframes slideUp {
  from { opacity: 0; transform: translateY(20px); }
  to { opacity: 1; transform: translateY(0); }
}
```

### Scale
```css
transition: transform 0.3s ease-out
hover:scale-105
```

### Transitions
```
Duration: 200ms (fast), 300ms (medium), 500ms (slow)
Timing: ease-in-out, ease-out
Properties: color, background, border, transform, opacity
```

---

## Dark Mode Specific

### Dark Mode Indicators
```
dark:bg-slate-900        # Darkest background
dark:bg-slate-800        # Card background
dark:text-white          # Primary text
dark:text-gray-400       # Secondary text
dark:border-slate-700    # Borders
```

### Brightness Adjustments
```
Logo: dark:brightness-0 dark:invert
Images: May need filter adjustments
Icons: Use currentColor for auto-switching
```

### Contrast Ratios
```
Text on Dark: 
  - White text on #0f172a: 16:1 (AAA)
  - Gray-400 on #0f172a: 7:1 (AA)

Buttons:
  - Cyan on Dark: 9:1 (AAA)
  - White on Blue: 8:1 (AAA)
```

---

## Accessibility

### Color Contrast
- **WCAG AAA**: 7:1+ for normal text
- **WCAG AA**: 4.5:1+ for normal text
- **All CTAs**: 7:1+ contrast ratio

### Focus States
- All interactive elements have visible focus
- Focus outline: 2-3px solid, high contrast
- Focus visible only on keyboard navigation

### Semantic HTML
- Proper heading hierarchy (H1 → H2 → H3)
- List items use `<ul>`, `<ol>`, `<li>`
- Buttons use `<button>`, links use `<a>`
- Form labels associated with inputs

---

## File Locations

```
Color Configuration:
  └── tailwind.config.ts (line 113-130)
  └── src/app/globals.css (line 15-34)

Component Styles:
  └── src/components/Home/Hero/index.tsx
  └── src/components/Layout/Header/index.tsx
  └── src/components/Layout/Footer/index.tsx
  └── src/components/Contact/Form/index.tsx

Global Utilities:
  └── src/app/globals.css (@layer utilities)
```

---

## Design Tokens Summary

| Token | Value | Usage |
|-------|-------|-------|
| `dark-bg` | #0f172a | Page background |
| `dark-accent` | #00d9ff | Primary buttons |
| `dark-text-primary` | #f1f5f9 | Main text |
| `primary` | #1358D8 | Light mode primary |
| `LightApricot` | #F9C78F | Accent buttons |
| `border-radius` | 0.875rem | Cards, inputs |
| `shadow-dark` | Custom | Dark mode shadows |

---

**This visual guide helps maintain design consistency across your freelance portfolio!** 🎨
