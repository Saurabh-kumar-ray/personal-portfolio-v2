# Customization Guide - Personal Portfolio v2

Welcome to the Personal Portfolio v2! This portfolio is designed dynamically using client-side JavaScript that loads content from structured JSON files. You do not need to write CSS or HTML to update your profile data.

---

## 📂 central Data Directory (`/data`)

All portfolio content is stored in the `data/` folder as standard JSON. To update your portfolio, modify the files listed below:

### 1. Developer Biography & Contact (`profile.json`)

Open and edit [profile.json](../data/profile.json) to configure your name, primary title, subtitles (typed dynamically in Hero), short/long bio, contact phone/email, and resume URL.

```json
{
  "name": "Your Name",
  "title": "Your Primary Title",
  "subtitles": ["Skill Subtitle A", "Skill Subtitle B"],
  "email": "hello@domain.com",
  "phone": "+1 555-019-2834",
  "location": "City, Country",
  "bioShort": "A brief overview displayed in the hero/sidebar.",
  "bioLong": "Full-length biography displayed in the About section.",
  "avatarUrl": "assets/images/profile-avatar.jpg",
  "resumeUrl": "assets/documents/Your_Resume.pdf",
  "tawkPropertyId": "YOUR_TAWK_PROPERTY_ID",
  "tawkWidgetId": "YOUR_TAWK_WIDGET_ID"
}
```

- **Live Chat**: Update `tawkPropertyId` and `tawkWidgetId` with values provided by your [Tawk.to](https://dashboard.tawk.to) dashboard script to enable live chat.

---

### 2. Work Experience Timeline (`experience.json`)

Open and edit [experience.json](../data/experience.json) to add, modify, or remove roles.

```json
{
  "role": "Role Title",
  "company": "Company Name",
  "location": "Location",
  "startDate": "Month Year",
  "endDate": "Month Year (or 'Present')",
  "current": true, // Adds a highlighted status border
  "highlights": [
    "Key achievement or project output",
    "Quantified business metrics, efficiency gains, etc."
  ],
  "technologies": ["Technology A", "Technology B"]
}
```

---

### 3. Projects Showcase (`projects.json`)

Open and edit [projects.json](../data/projects.json) to showcase your work. The project list is filterable by categories such as `Systems`, `Web Apps`, `Cloud & DevOps`, or `Open Source`.

```json
{
  "id": "unique-url-slug",
  "title": "Project Title",
  "category": "Web Apps", // Matches navigation filter tabs
  "shortDescription": "Brief card description.",
  "description": "Expanded pop-up description detailing architecture.",
  "imageUrl": "https://url-to-image.png or /assets/images/project.jpg",
  "technologies": ["React", "Go", "PostgreSQL"],
  "githubUrl": "https://github.com/username/project",
  "liveUrl": "https://project.com",
  "featured": true, // Places this card prominently
  "highlights": ["Quantified outcome A", "Cool technical feature B"]
}
```

---

### 4. Technical Skill Ratings (`skills.json`)

Open and edit [skills.json](../data/skills.json) to group skills into domains (Languages, Frontend, Backend, Tools). Skill proficiencies determine the progress bar widths in the Skills section.

```json
{
  "category": "Category Name",
  "icon": "fa-code", // Font Awesome icon class
  "skills": [
    { "name": "Python", "level": 90 } // Level out of 100
  ]
}
```

---

### 5. Academic Background (`education.json`)

Open and edit [education.json](../data/education.json) to update degrees, diplomas, and awards:

```json
{
  "degree": "Degree Title",
  "institution": "University / College",
  "location": "Location",
  "startDate": "Year",
  "endDate": "Year",
  "details": ["Major courses, GPA, teaching assignments, or relevant activities"]
}
```

---

### 6. Certifications & Credentials (`certificates.json`)

Open and edit [certificates.json](../data/certificates.json) to manage licenses:

```json
{
  "name": "Certification Name",
  "issuer": "Issuing Authority",
  "issueDate": "Month Year",
  "expiryDate": "Month Year (or 'Lifetime')",
  "credentialId": "ID-12345",
  "credentialUrl": "https://authority.com/verify/ID-12345"
}
```

---

### 7. Professional Achievements (`achievements.json`)

Open and edit [achievements.json](../data/achievements.json) to showcase hackathons, publications, and awards:

```json
{
  "title": "Achievement Title",
  "description": "Expanded details of the award or publication.",
  "date": "Month Year",
  "icon": "fa-trophy"
}
```

---

### 8. Social Platform Connections (`social-links.json`)

Open and edit [social-links.json](../data/social-links.json) to adjust platform links and ordering:

```json
{
  "platform": "Platform Name",
  "url": "https://platform.com/username",
  "icon": "fa-github", // Font Awesome icon class
  "color": "#HEX_COLOR" // Hex code for brand identity
}
```

---

## 🎨 Asset Management

- **Resume Document**: Replace the resume file at `assets/documents/Saurabh_Resume.pdf` with your actual PDF resume. If you name it differently, update the `"resumeUrl"` in `profile.json`.
- **Profile Image**: Replace `assets/images/profile-avatar.jpg` with a professional picture of yourself.
- **Project Screenshots**: Save your project images/screenshots in `assets/images/` and reference them using their file paths inside `projects.json`.
