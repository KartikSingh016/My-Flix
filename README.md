# My-Flix

My-Flix is a Netflix-inspired personal portfolio web app built to present projects, profile details, education, and documents in a familiar streaming-style interface. It is designed for hiring managers and guests to browse in read-only mode while the owner can unlock a private Studio mode to customize content locally.

## Features

- Netflix-style viewer selection with Owner, HR, and Guest modes
- Read-only browsing for HR and Guest
- Password-protected owner access for editing
- Project, Profile, and Education sections
- Large rotating  showcase for up to six featured items
- Smooth page transitions and carousel animation
- Project cards with GitHub, live project, and document links
- Recently Added tags for items added within the last 30 days
- Local Studio editor for updating titles, descriptions, links, images, and documents
- Local image/document upload support for quick previewing

## Tech Stack

- HTML
- CSS
- JavaScript
- Local browser storage
- Static deployment ready for GitHub Pages, Vercel, Netlify, or any static host

## Project Structure

```text
.
├── assets/              # Public image assets used by the portfolio
├── app.js               # Main app logic, data model, editor, carousel, and navigation
├── demo.html            # Local demo project pages
├── index.html           # App entry point
├── styles.css           # Full visual design and responsive layout
├── .gitignore           # Keeps private local files out of Git
└── private-config.js    # Local-only owner password config, ignored by Git
```

## Security Notes

`private-config.js` is intentionally ignored by Git and should not be uploaded to GitHub. It can hold local password configuration for owner access while keeping sensitive values out of the public repository.

Content added through the in-app editor is saved in the browser's local storage. That is useful for testing, but it does not automatically create GitHub commits or upload files to the deployed site.

For public deployment, add permanent files directly to the project folder:

```text
assets/my-project-image.png
documents/resume.pdf
```

Then reference those paths inside My-Flix Studio and commit the files to GitHub.

## Running Locally

From the project folder:

```bash
python -m http.server 8000 --bind 127.0.0.1
```

Then open:

```text
http://127.0.0.1:8000/
```

## Deployment

This is a static site. After pushing to GitHub, it can be deployed with Vercel:

1. Import the GitHub repository in Vercel.
2. Use the default static site settings.
3. Deploy.

Future commits pushed to GitHub can trigger automatic redeploys on Vercel.

## Customization

Open the app locally, choose the owner profile, unlock Studio, and update:

- Projects
- Profile items
- Education items
- GitHub repo links
- Live project links
- Document links
- Card images
- Hero images
- Featured top carousel items

For public sharing, make sure permanent assets and documents are committed to the repository.
