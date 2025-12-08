# Installation & Setup Guide

## Prerequisites

Before you begin, ensure you have the following installed:

- **Node.js** 18.0 or higher
- **npm** 9.0 or higher (comes with Node.js)

## Installation Steps

### 1. Install Dependencies

Open your terminal in the project directory and run:

```bash
npm install
```

This will install all required packages including:

- Next.js 14
- React 18
- TypeScript
- Tailwind CSS
- Lucide React (icons)

### 2. Start Development Server

```bash
npm run dev
```

The site will be available at [http://localhost:3000](http://localhost:3000)

### 3. Build for Production

```bash
npm run build
```

### 4. Start Production Server

```bash
npm start
```

## TypeScript Errors

**Note**: You will see TypeScript errors in the IDE until you run `npm install`. This is expected behavior. All errors will resolve once dependencies are installed.

The errors you're seeing (like "Cannot find module 'next'") are because:

- TypeScript is trying to check the code
- The node_modules folder doesn't exist yet
- Once you run `npm install`, all type definitions will be available

## Project Structure After Installation

```
johnbarrettleadership/
├── node_modules/          # Installed dependencies (created after npm install)
├── .next/                 # Next.js build output (created after npm run dev/build)
├── app/                   # Application pages and routes
├── components/            # Reusable React components
├── lib/                   # Utility functions
├── public/                # Static assets
└── Configuration files
```

## Environment Variables (Optional)

If you need to add environment variables:

1. Create `.env.local` file in root directory
2. Add your variables:

```env
# Example
NEXT_PUBLIC_SITE_URL=https://johnbarrettleadership.com
NEXT_PUBLIC_GA_ID=your-google-analytics-id
```

## Troubleshooting

### Port Already in Use

If port 3000 is already in use:

```bash
npm run dev -- -p 3001
```

### Clear Cache

If you encounter build issues:

```bash
# Remove build artifacts
rm -rf .next
rm -rf node_modules

# Reinstall
npm install
npm run dev
```

### TypeScript Errors Persist

If errors persist after installation:

```bash
# Restart your IDE/editor
# Or restart TypeScript server in VS Code: Cmd/Ctrl + Shift + P > "TypeScript: Restart TS Server"
```

## Next Steps

1. **Replace Placeholder Images**: Update image URLs in components
2. **Add Real Content**: Replace sample testimonials and copy
3. **Configure Contact Form**: Connect form to email service or CRM
4. **Set Up Analytics**: Add Google Analytics or other tracking
5. **Test Thoroughly**: Check all pages and forms
6. **Deploy**: Choose hosting platform (Vercel, Netlify, etc.)

## Deployment

### Vercel (Recommended)

```bash
npm i -g vercel
vercel
```

### Netlify

```bash
npm run build
# Upload 'out' folder to Netlify
```

### Other Platforms

The site can be deployed to any platform supporting Next.js:

- AWS Amplify
- Digital Ocean
- Railway
- Render

## Support

For technical issues:

- Check the README.md
- Review SITE_DOCUMENTATION.md
- Consult Next.js documentation: https://nextjs.org/docs

---

**Ready to launch!** 🚀
