# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [0.3.0] - 2025-10-21

### Added

- **New Application Layout**: Introduced a major UI overhaul inspired by modern code editors like VS Code. This establishes the foundational layout structure for the application, including an activity bar, sidebar, main content area, and status bar.
- **Editor Header and Menubar**: Implemented a new `EditorHeader` component with a functional menubar. Menu items are now toggleable, providing a more interactive and application-like feel.
- **Global Menu State Management**: Added a global click and keydown handler on the main page to manage menu states. Menus can now be closed by clicking away or pressing the `Escape` key, improving usability.
- **UI Enhancements**:
  - Added new CSS grid styles in `app.css` to create the VS Code-like layout (`.app-grid`).
  - Included keyframe animations for UI elements like dropdown menus to improve user experience.
- **New Dependencies**: Added `@lucide/svelte` for icons, `clsx` for conditional class names, and `tailwind-merge` to resolve Tailwind CSS class conflicts.

### Changed

- Restructured the main `+page.svelte` to use the new `EditorHeader` and application layout.

## [v0.2.0] - 2025-10-20

### Added (v0.2.0)

- **feat(styling)**: Integrated the Svelte theme store with Tailwind CSS.
  - Created a `tailwind.config.ts` that uses HSL-based CSS variables for all colors.
  - Refactored the theme store to provide colors as HSL strings.
  - Added a global `app.css` to define base styles and variables.
  - Added `tailwindcss-animate` plugin for future animations.

## [v0.1.0] - 2025-10-20

### Added (v0.1.0)

- **feat(theming)**: Implemented a reactive and extensible theming system.
  - Includes 5 base themes: Dark, Light, High Contrast, Monokai, and Solarized.
  - Persists the selected theme in `localStorage`.
  - Automatically detects user's OS preference (`prefers-color-scheme`).
  - Provides an `addTheme` utility for dynamic theme registration.
  - Applies theme colors as global CSS variables (e.g., `var(--theme-background)`).
