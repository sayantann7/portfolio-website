# Portfolio Website

This is the source code for my personal portfolio website. It showcases my projects, skills, and contact information.

## Table of Contents

- [Features](#features)
- [Technologies Used](#technologies-used)
- [Installation](#installation)
- [Usage](#usage)
- [Project Structure](#project-structure)

## Features

- Responsive design
- Dark mode support
- 3D hero section
- Smooth scrolling
- Project showcase
- Social media links

## Technologies Used

- React
- Tailwind CSS
- Framer Motion
- Three.js
- Vite

## Installation

1. Clone the repository:
    ```sh
    git clone https://github.com/sayantann7/portfolio-website.git
    ```
2. Navigate to the project directory:
    ```sh
    cd portfolio
    ```
3. Install the dependencies:
    ```sh
    npm install
    ```

## Usage

To start the development server, run:
```sh
npm run dev
```

To build the project for production, run:
```sh
npm run build
```

To preview the production build, run:
```sh
npm run preview
```

## Project Structure

```
portfolio/
├── public/
│   └── profile.jpg
├── src/
│   ├── components/
│   │   ├── Hero3D.jsx
│   │   ├── Navbar.jsx
│   │   ├── ProjectCard.jsx
│   │   ├── ScrollToTop.jsx
│   │   └── SocialLinks.jsx
│   ├── data/
│   │   └── projects.js
│   ├── App.jsx
│   ├── index.css
│   └── main.jsx
├── .gitignore
├── index.html
├── package.json
├── postcss.config.js
├── tailwind.config.js
├── vite.config.js
└── README.md
```