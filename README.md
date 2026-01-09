#Online Resume for Omega Fullard

A polished, easy-to-host online resume / portfolio for OmegaFullard.

This repository contains the source and assets for an online resume website. It's designed to be simple to host (static HTML/CSS/JS) and easy to customize with your personal information, skills, projects, and contact details.

## Quick preview

Screenshots:

## Features

- Clean, responsive layout optimized for desktop and mobile
- Sections for profile, skills, experience, education, projects, and contact
- Easy to customize (single HTML file or simple JSON/Markdown content)
- Ready to deploy with GitHub Pages or any static host

## Structure 

If your site is static:
- index.html — main page
- site.css/ — stylesheets
- Images/ — images and screenshots
- -index.js - JSON or Markdown files for resume data

## Getting started

1. Clone the repository
   git clone https://github.com/OmegaFullard/OmegaFOnlineResume.git

2. Open the site locally
   - If there is an `index.html` file, open it in your browser.
   - Or run a simple local server:
     - Python 3: `python -m http.server 8000`
     - Node (http-server): `npx http-server . -p 8000`
   - Then open http://localhost:8000

## Customizing your resume

- Edit the text in `index.html` (or the content file in `content/`) to update:
  - Name, headline, and summary
  - Contact information (email, website, social links)
  - Skills — add/remove categories and skill levels
  - Experience and education — update job titles, companies, dates, descriptions
  - Projects — add descriptions, links, and screenshots

- Replace assets in `/Images/` with your profile photo and project images.

- If your resume data is in JSON or Markdown, update those files and the site will reflect the changes.

## Deployment

- GitHub Pages (recommended for simple hosting)
  1. Push your changes to the `master` (or `main`) branch.
  2. In repository Settings > Pages, select the branch and root folder.
  3. The site will be available under `https://<your-username>.github.io/<repo-name>/`.

- Other hosts: Netlify, Vercel, Firebase Hosting — connect the repository and configure a deploy step if needed.

## Contributing

If you want to improve the resume template:
- Fork the repo
- Create a feature branch
- Open a pull request describing your changes

Guidelines:
- Keep styles minimal and accessible
- Add tests or preview screenshots for visual changes

## License

MIT License — see `LICENSE` for details.

## Contact

OmegaFullard
