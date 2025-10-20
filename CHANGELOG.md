# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [Unreleased]

## [v0.2.0] - 2024-07-28

### Added (v0.2.0)

- **feat(styling)**: Integrated the Svelte theme store with Tailwind CSS.
  - Created a `tailwind.config.ts` that uses HSL-based CSS variables for all colors.
  - Refactored the theme store to provide colors as HSL strings.
  - Added a global `app.css` to define base styles and variables.
  - Added `tailwindcss-animate` plugin for future animations.

### Added (v0.1.0)

- **feat(theming)**: Implemented a reactive and extensible theming system.
  - Includes 5 base themes: Dark, Light, High Contrast, Monokai, and Solarized.
  - Persists the selected theme in `localStorage`.
  - Automatically detects user's OS preference (`prefers-color-scheme`).
  - Provides an `addTheme` utility for dynamic theme registration.
  - Applies theme colors as global CSS variables (e.g., `var(--theme-background)`).
