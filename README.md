# Portfolio Website

A modern, dark-themed portfolio website built with vanilla JavaScript, featuring a dynamic page system and reusable UI components.

## Features

- **Dynamic Page System**: Easily add new pages with a simple `addPage()` function
- **Responsive Design**: Works perfectly on desktop, tablet, and mobile devices
- **Dark Theme**: Modern dark theme with customizable CSS variables
- **Reusable Controls**: Comprehensive CSS controls library for buttons, forms, and more
- **Smooth Animations**: Beautiful transitions and animations throughout
- **Mobile-First**: Responsive sidebar navigation with mobile overlay

## Quick Start

1. Open `index.html` in your browser
2. Navigate through the default pages (Home, Projects, About, Contact)
3. Add your own custom pages using the `addPage()` method

## Adding Custom Pages

Use the `addPage(label, link, icon, contentGenerator)` method to add new pages:

```javascript
// Simple page with default content
app.addPage('Blog', 'blog', 'fas fa-blog');

// Custom page with your own content
app.addPage('Services', 'services', 'fas fa-cogs', () => {
    return `
        <div class="page-section">
            <h1 class="page-title">My Services</h1>
            <div class="page-subtitle">What I can do for you</div>
            <!-- Your custom content here -->
        </div>
    `;
});
```

## File Structure

```
Portfolio/
├── index.html              # Main HTML file
├── styles/
│   ├── controls.css        # Reusable UI controls and components
│   └── main.css           # Portfolio-specific styles
├── js/
│   └── app.js             # Main application logic
└── README.md              # This file
```

## CSS Variables

The controls.css file uses CSS custom properties for easy theming. You can customize the colors by modifying the `:root` variables:

```css
:root {
    --primary-color: #6366f1;      /* Main accent color */
    --bg-primary: #0f172a;         /* Main background */
    --text-primary: #f8fafc;       /* Primary text color */
    /* ... and many more */
}
```

## Controls Library

The `controls.css` file includes styled components for:

- **Buttons**: Primary, secondary, outline, ghost variants
- **Forms**: Inputs, textareas, selects with focus states
- **Checkboxes & Radio Buttons**: Custom styled form controls
- **Switches/Toggles**: Animated toggle switches
- **Scrollbars**: Custom styled scrollbars
- **Progress Bars**: Animated progress indicators
- **Sliders**: Custom range inputs
- **Cards**: Content containers with hover effects
- **Badges & Tags**: Small status indicators
- **Tooltips**: Hover information bubbles
- **Loading Spinners**: Animated loading indicators

## Browser Support

- Chrome (recommended)
- Firefox
- Safari
- Edge

## Technologies Used

- **HTML5**: Semantic markup
- **CSS3**: Custom properties, Grid, Flexbox, animations
- **JavaScript (ES6+)**: Classes, Maps, arrow functions
- **Font Awesome**: Icons
- **Google Fonts**: Inter font family

## Customization

1. **Colors**: Modify CSS variables in `controls.css`
2. **Layout**: Adjust styles in `main.css`
3. **Content**: Add pages using `app.addPage()`
4. **Styling**: Use the controls library classes for consistent UI

## License

This project is open source and available under the [MIT License](LICENSE).
