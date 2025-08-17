# CV File Setup

To enable CV download functionality:

1. **Add your CV file** to the `public/` folder with the name `cv.pdf`
2. **Alternative naming**: You can use any name, just update the filename in the `Home.tsx` component
3. **File format**: PDF is recommended for professional documents

## Current Setup

The download button in the Home page is configured to download `/cv.pdf` from the public folder.

## To Update

In `src/pages/Home.tsx`, find the `handleDownloadCV` function and update the filename:

```javascript
const handleDownloadCV = () => {
  const link = document.createElement("a");
  link.href = "/your-cv-filename.pdf"; // Update this line
  link.download = "Your_Name_CV.pdf"; // Update download name
  link.click();
};
```

## File Size Recommendations

- Keep CV file size under 2MB for faster downloads
- Ensure the PDF is optimized and searchable
- Include contact information and recent projects
