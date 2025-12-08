# Logo Setup Instructions

## Save the Logo Image

You need to save the John Barrett Leadership logo to the correct location:

1. **Save the logo image** you provided as: `public/logo.png`
2. The logo should be a **PNG file with transparent background** for best results
3. Recommended dimensions: **400px width x 100px height** (or similar aspect ratio)

## Current Logo Implementation

The logo has been integrated into:

### Navbar (`components/layout/Navbar.tsx`)

- Logo displays at **200x50px** (scales to height: 40px)
- Positioned in the top-left corner
- Includes hover effect (opacity transition)
- Uses Next.js Image component for optimization

### Footer (`components/layout/Footer.tsx`)

- Logo displays at **220x55px** (scales to height: 48px)
- Uses **brightness-0 invert** filter to make it white on dark background
- Includes hover effect

## Logo Styling

The logo automatically adapts to:

- **Navbar**: Full color on scrolled state, maintains visibility on transparent header
- **Footer**: White version on dark navy background
- **Responsive**: Scales appropriately on mobile devices

## If You Need Different Versions

If you want separate logo files for light/dark backgrounds:

1. **Light background**: Save as `public/logo.png` (current implementation)
2. **Dark background**: Save as `public/logo-white.png`

Then update Footer to use:

```tsx
<Image
  src="/logo-white.png"
  alt="John Barrett Leadership"
  width={220}
  height={55}
  className="h-12 w-auto transition-opacity hover:opacity-80"
/>
```

## Next Steps

1. Save your logo file to `public/logo.png`
2. Run `npm run dev` to see it in action
3. Adjust sizing if needed by modifying the `width`, `height`, and `className` props

The logo is now ready to display throughout your website! 🎨
