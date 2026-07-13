# Engineering Portfolio — Prakrit Ramachandran

Mechanical Engineering student at the **University of Washington**, focused on robotics,
mechanical design and motion systems.

**Live site:** https://prakrit-portfolio.vercel.app

## The design

The whole portfolio is presented as an **engineering drawing set** — every page is a
numbered sheet with a zone-ruled border, title block, revision letter and drawing number:

- **Sheet 1** — cover + drawing register (the project index)
- **Sheets 3–8** — one case-study sheet per project (`PR-001` … `PR-006`), with balloon
  callouts, design notes, spec tables, video and Onshape CAD links
- **Sheet 9** — personnel data sheet (about)
- **Sheet 10** — specification sheet (resume, inline PDF)
- **Sheet 11** — RFQ (contact)

## Featured work

| DWG NO. | Project | Category |
|---|---|---|
| PR-001 | Marble Coaster — continuous motion, custom helical lift + 3D-printed gearbox | Personal |
| PR-002 | Pen Plotter — CoreXY 2-axis motion platform, 20+ custom components | Personal |
| PR-003 | FTC 2023 Center Stage — complete robot architecture | Competition |
| PR-004 | FTC 2024 Power Play — concept → final integration | Competition |
| PR-005 | FRC Crescendo — chassis, swerve drivetrain, intake arm | Competition |
| PR-006 | FRC Charged Up — intake arm on an 800+ part robot | Competition |

## Stack

Zero-build static site — hand-written HTML/CSS with a few lines of vanilla JS
(category filter, click-to-load YouTube embeds). Images served as responsive WebP with
JPEG fallback. Deployed on **Vercel** (`cleanUrls`, immutable asset caching).

### Local development

```
npx serve .
```

### Structure

```
index.html            # Sheet 1–2: cover, drawing register, principal views
projects/<slug>.html  # Sheets 3–8: case studies (PR-001 … PR-006)
about.html            # Sheet 9
resume.html           # Sheet 10 (assets/resume.pdf inline)
contact.html          # Sheet 11
styles.css            # the "Drawing Sheet" design system
script.js             # filter + lite YouTube embed
assets/img/           # responsive WebP/JPEG renders
```

## Contact

prakrit@uw.edu · [LinkedIn](https://www.linkedin.com/in/prakrit-ramachandran-660112269/) · [Onshape CAD links on each project sheet](https://prakrit-portfolio.vercel.app)
