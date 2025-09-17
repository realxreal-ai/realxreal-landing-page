# realxreal.ai — Landing Page

This repository contains the initial landing page for **realxreal.ai**, a pre-MVP website designed to introduce the innovative **Doppelganger Protocol** and build anticipation for the upcoming mobile application.

The landing page communicates our mission to revolutionize digital communication by using **shared human memory as the root of trust**, addressing the growing challenge of **digital impersonation and deepfakes**.

Built with **modern web technologies**, the site is sleek, lightweight, fully responsive, and designed with a professional aesthetic aligned with our core values of **trust, security, and transparency**.

---

## Features

* **Responsive Design**
  Optimized for desktop, tablet, and mobile with a clean, modern layout.

* **Light & Dark Mode**
  Theme toggle with user preference stored in local storage.

* **Smooth Animations**
  Includes scroll-triggered effects, typing animation for the hero title, and subtle parallax floating elements.

* **Interactive UI**
  Hover effects, glitch animation on the logo, and smooth scrolling navigation.

* **Structured Sections**

  * **Hero**: Introduction & early access CTA
  * **Problem**: The identity crisis in digital communication
  * **Solution**: Human-first Doppelganger Protocol
  * **Features**: Key app functionalities
  * **Metrics**: Verification layers explained
  * **Open Source**: Commitment to transparency & collaboration
  * **CTA**: Join the early access program
  * **Footer**: Contact info & GitHub link

---

## Tech Stack

* **HTML5, CSS3, Vanilla JavaScript**
* **JetBrains Mono** font for a tech-forward look
* **CSS custom properties** for theming
* **No external frameworks** → lightweight and fast

---

## Getting Started

### Installation

Clone the repository:

```bash
git clone https://github.com/realxreal-ai/realxreal-landing-page.git
cd realxreal-landing-page
```

### Serve the Page

This is a static HTML site. You can run it with any local server, for example using Python:

```bash
python -m http.server 8000
```

Or simply open `index.html` in a browser (note: some features like local storage may require a server).

### Access the Site

Visit:

```
http://localhost:8000
```

---

## Usage

* **Navigation** → Use the top navbar to jump to sections. Clicking the logo scrolls back to the top.
* **Theme Toggle** → Switch between light/dark with the (◐/◑) button.
* **Early Access** → "Join Early Access" buttons link to [Typeform signup](https://form.typeform.com/to/nZ5XOQqm).
* **GitHub** → Contribute at [realxreal-ai GitHub](https://github.com/realxreal-ai).

---

## File Structure

```
realxreal-landing-page/
├── images/
│   └── realxreal-dark-logo.png
├── index.html
└── README.md
```

* `images/` → Logo assets
* `index.html` → Main HTML with embedded CSS/JS
* `README.md` → Documentation

---

## Customization

* **Logo** → Replace `images/realxreal-dark-logo.png` (40×40px nav, 270×270px hero, 50×50px footer).
* **Colors** → Update CSS variables in `:root` and `[data-theme="dark"]`.
* **Content** → Edit section text directly in `index.html`.
* **Links** → Update Typeform or GitHub URLs as needed.

---

## Contact

For questions, feedback, or collaboration:
**[info@realxreal.ai](mailto:info@realxreal.ai)**

GitHub → [realxreal-ai](https://github.com/realxreal-ai)

---

## License

This project is licensed under the **MIT License**. See the [LICENSE](LICENSE) file for details.

---

## Acknowledgments

* Inspired by modern web design trends with a focus on **accessibility** and **performance**
* Thanks to the **open-source community** for tools and resources
