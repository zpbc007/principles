# Principles

A documentation site built with VitePress to explore and document important principles and concepts.

## Project Structure

```
principles/
├── docs/
│   ├── .vitepress/
│   │   └── config.js
│   ├── guide/
│   │   ├── index.md
│   │   └── getting-started.md
│   └── index.md
├── package.json
└── README.md
```

## Getting Started

### Prerequisites

- Node.js (version 16 or higher)
- npm or yarn

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/zpbc007/principles.git
   cd principles
   ```

2. Install dependencies:
   ```bash
   npm install
   # or
   yarn install
   ```

### Development

To start the development server:

```bash
npm run docs:dev
# or
yarn docs:dev
```

This will start a local development server at `http://localhost:5173`. The site will automatically reload if you make changes to the content.

### Build

To build the site for production:

```bash
npm run docs:build
# or
yarn docs:build
```

This will generate static files in the `docs/.vitepress/dist` directory.

### Preview

To preview the production build locally:

```bash
npm run docs:preview
# or
yarn docs:preview
```

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is licensed under the ISC License - see the LICENSE file for details.
