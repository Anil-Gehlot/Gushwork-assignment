# Mangalam HDPE Pipes Landing Page (Gushwork Assignment)

A fully responsive landing page for Mangalam HDPE Pipes built using **vanilla HTML, CSS, and JavaScript** (no frameworks or libraries).

## Live Demo

You can view the live version of the project here:

🔗 Live Site: https://mangalam-hdpe.netlify.app/ 


## 1. Design & Reference

- Figma file: `https://www.figma.com/design/DOv07H7C2tA5UrVLhmfwfW/Gushwork-Assignment?node-id=490-8785&t=Z0PPuWCdxPbNLcSw-1`
- The page layout, typography, colors, spacing, and interactions are implemented to closely match the design at desktop, tablet, and mobile breakpoints.

Main sections:

- Sticky header with logo and navigation
- Hero section with product summary, certifications, pricing, CTAs, and gallery
- Technical specifications table
- Performance features grid
- FAQ with accordion and email capture CTA
- Versatile applications slider
- HDPE manufacturing process overview
- Customer testimonials
- Solutions portfolio
- Resources & Downloads
- Contact form section
- Footer with additional navigation and contact details

## 2. Tech Stack

- HTML5
- CSS3 (Flexbox, Grid, responsive design)
- JavaScript (ES6+)

No external libraries, build systems, or frameworks are used.


## 3. Project Structure

- `index.html` – main HTML document and page structure
- `styles.css` – all styling, layout, and responsive rules
- `script.js` – behavior and interactivity
- `assets/` – all images and SVG icons used in the UI (logos, product images, backgrounds, small icons, etc.)


## 4. Running the Project

- Open `index.html` directly in any modern browser, or
- Serve the `Gushwork-assignment` folder with a simple static server (for example, using a local HTTP server) and open `index.html` in a browser.

No build step is required.


## 5. Implemented Features

### Sticky Header

- Header is fixed to the top of the viewport and animates into view once the user scrolls beyond the first fold.
- The header slides back out when scrolling upwards.
- On small screens, the hamburger menu closes automatically when the user starts scrolling.

### Hero Image Carousel with Zoom

- Hero section includes a gallery with:
  - Main product image.
  - Thumbnail strip with multiple image previews.
  - Previous / next controls.
- Clicking a thumbnail or using the arrow controls updates the main image.
- On desktop, hovering over the main image shows a zoomed preview area following the cursor, giving a closer look at the product detail.

### Responsive Layout

- Layout adapts to desktop, tablet, and mobile screen sizes.
- Hero, grids, FAQ, process, solutions, resources, contact, and footer all adjust layout and spacing based on screen width.
- Background pattern from the design is applied to the main content sections as in the Figma reference.

### FAQ Accordion

- FAQ questions expand and collapse smoothly.
- Only one FAQ item is open at a time.
- An additional CTA block under the FAQ collects an email address to “email the catalogue”.

### Versatile Applications Slider

- Horizontal slider showcasing different application cards.
- Previous / next controls move the card track horizontally.
- Layout and behavior are tuned for both mobile and desktop.

### Process, Testimonials, Solutions, Resources & Contact

- Process section shows a multi-step manufacturing overview, with a step rail on larger screens and a simplified view on mobile.
- Testimonials section displays multiple cards in a horizontally scrollable strip without a visible scrollbar.
- Solutions section presents three solution cards and a call-to-action for talking to an expert.
- Resources section lists downloadable resources in a clean list format.
- Contact section includes a form with fields for name, company, email, and phone, plus explanatory text.


## 6. Code & Quality Standards

- **Structure**: Semantic HTML5 elements (header, nav, main, section, article, footer) are used throughout.
- **Styling**: Modern CSS practices with Flexbox and Grid, responsive breakpoints, and shared design tokens for colors.
- **Behavior**: JavaScript is organized into small, focused functions responsible for specific behaviors (sticky header, navigation toggle, hero carousel, zoom, sliders, FAQ, forms).
- **Cross-browser**: The implementation uses features supported across all modern browsers; custom scrollbar hiding is implemented in a cross-browser-friendly way.
- **Accessibility**: Interactive elements use proper HTML controls (buttons, links, inputs), and care is taken to keep forms and key UI pieces usable on keyboard and touch devices.

## Author

Anil Gehlot  
Frontend Developer