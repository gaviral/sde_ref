# 🎯 SDE Reference

A comprehensive Software Development Engineer (SDE) reference platform built with React, TypeScript, and Vite. This project provides interactive documentation and examples for essential development tools and libraries.

## 🌟 Features

- **Monaco Editor Reference**: Complete guide with 21+ interactive examples covering all Monaco Editor properties and configurations
- **Interactive Code Examples**: Live, editable code samples with real-time preview
- **Modern UI**: Clean, responsive design with smooth animations and hover effects
- **TypeScript Support**: Full type safety and IntelliSense support
- **Fast Development**: Powered by Vite for lightning-fast hot module replacement

## 🚀 Live Demo

Visit the live application: [https://gaviral.github.io/sde_ref/](https://gaviral.github.io/sde_ref/)

## 📋 Table of Contents

- [🎯 SDE Reference](#-sde-reference)
  - [🌟 Features](#-features)
  - [🚀 Live Demo](#-live-demo)
  - [📋 Table of Contents](#-table-of-contents)
  - [🛠️ Installation](#️-installation)
  - [💻 Development](#-development)
    - [Available Scripts](#available-scripts)
  - [🏗️ Building](#️-building)
  - [📁 Project Structure](#-project-structure)
  - [📚 Available References](#-available-references)
    - [🎯 Monaco Editor Reference](#-monaco-editor-reference)
  - [🤝 Contributing](#-contributing)
    - [Development Guidelines](#development-guidelines)
  - [🛠️ Technologies Used](#️-technologies-used)
  - [🎨 Design Philosophy](#-design-philosophy)
  - [📈 Future Enhancements](#-future-enhancements)
  - [📄 License](#-license)
  - [🙏 Acknowledgments](#-acknowledgments)

## 🛠️ Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/gaviral/sde_ref.git
   cd sde_ref
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

## 💻 Development

Start the development server:

```bash
npm run dev
```

The application will be available at `http://localhost:5173`

### Available Scripts

- `npm run dev` - Start development server with hot reload
- `npm run build` - Build for production
- `npm run lint` - Run ESLint for code quality checks
- `npm run preview` - Preview production build locally

## 🏗️ Building

Build the project for production:

```bash
npm run build
```

The built files will be in the `dist/` directory.

## 📁 Project Structure

```
sde_ref/
├── public/                 # Static assets
├── src/
│   ├── components/         # React components
│   │   ├── CodeEditor.tsx          # Monaco Editor wrapper component
│   │   ├── MonacoEditorReference.tsx # Comprehensive Monaco Editor guide
│   │   └── SDEReference.tsx        # Main reference list page
│   ├── assets/            # Project assets
│   ├── App.tsx            # Main application component
│   ├── main.tsx           # Application entry point
│   └── index.css          # Global styles
├── .github/workflows/     # GitHub Actions CI/CD
├── dist/                  # Production build output
└── README.md             # This file
```

## 📚 Available References

### 🎯 Monaco Editor Reference

A comprehensive guide covering:

- **Basic Configuration**: Default values, language settings, themes
- **Editor Options**: Line numbers, minimap, word wrap, font settings
- **Advanced Features**: Auto-completion, syntax highlighting, error handling
- **Event Handling**: onChange, onMount, beforeMount events
- **Customization**: Custom themes, keyboard shortcuts, context menus
- **Performance**: Loading states, lazy loading, optimization tips

**Interactive Examples Include:**
- Basic text editor setup
- Multiple language support (JavaScript, TypeScript, Python, JSON, etc.)
- Custom themes (VS Dark, Light, High Contrast)
- Advanced editor options and configurations
- Real-time value changes and event handling
- Error handling and validation
- Performance optimization techniques

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

### Development Guidelines

- Follow TypeScript best practices
- Maintain consistent code formatting
- Add comprehensive examples for new references
- Update documentation for any new features
- Ensure all tests pass before submitting

## 🛠️ Technologies Used

- **Frontend Framework**: React 19.1.0
- **Language**: TypeScript 5.8.3
- **Build Tool**: Vite 6.3.5
- **Routing**: React Router DOM 7.6.0
- **Code Editor**: Monaco Editor React 4.7.0
- **Linting**: ESLint 9.25.0
- **CI/CD**: GitHub Actions
- **Deployment**: GitHub Pages

## 🎨 Design Philosophy

This project follows modern web development principles:

- **Component-Based Architecture**: Modular, reusable React components
- **Type Safety**: Full TypeScript integration for better developer experience
- **Performance First**: Optimized builds and lazy loading where appropriate
- **Accessibility**: Semantic HTML and keyboard navigation support
- **Responsive Design**: Mobile-first approach with fluid layouts

## 📈 Future Enhancements

- Additional reference guides for popular development tools
- Search functionality across all references
- Dark/light theme toggle
- Code snippet export functionality
- Community-contributed examples
- Integration with more code editors and IDEs

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🙏 Acknowledgments

- Monaco Editor team for the excellent code editor
- React and Vite communities for the amazing development tools
- All contributors who help improve this reference platform

---

**Made with ❤️ for the developer community**
