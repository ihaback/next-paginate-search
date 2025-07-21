# User Search & Pagination Demo

This repository is a Next.js application demonstrating accessible user search and pagination features. It uses TypeScript, modular SCSS, and modern React best practices.

## Features

- Paginated user table with 140 realistic sample users
- Search users by name or email (case-insensitive)
- Accessible search input with screen reader support
- Pagination controls that preserve search queries
- Responsive and semantic markup
- Clean, maintainable code structure
- Edit functionality is shown in the UI but not implemented

## Tech Stack

- Next.js (App Router)
- TypeScript
- SCSS modules

## Usage

1. Install dependencies:
   ```bash
   npm install
   ```
2. Run the development server:
   ```bash
   npm run dev
   ```
3. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Accessibility

- Search input uses proper labels, roles, and instructions for screen readers
- Table markup uses semantic elements and captions
- Keyboard navigation is supported for search and pagination

## Customization

- Add more users in `src/utils/users.ts`
- Adjust styles in `src/sass/`

## CSS Methodology

This project uses the BEM (Block Element Modifier) naming convention for CSS classes, making styles predictable, maintainable, and scalable. See the SCSS files for examples.
