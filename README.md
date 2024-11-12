# DocuMind - Intelligent Document Management System

A modern, secure document management system with natural language processing capabilities, built with React and TypeScript.

![DocuMind](https://images.unsplash.com/photo-1512758017271-d7b84c2113f1?auto=format&fit=crop&q=80&w=1920)

## Features

- 📄 **Document Management**
  - Upload and store multiple document formats (PDF, PPT, CSV)
  - Real-time document processing status
  - Secure document storage and management
  - Easy document deletion and preview

- 💬 **Intelligent Chat**
  - Natural language querying of document contents
  - Context-aware responses
  - Real-time chat interface
  - Message history tracking

- 🔒 **Security**
  - User authentication
  - Secure document storage
  - Protected routes
  - Session management

## Tech Stack

- **Frontend**
  - React 18
  - TypeScript
  - React Router DOM
  - Zustand (State Management)
  - Tailwind CSS
  - Lucide React (Icons)
  - React Dropzone

## Getting Started

### Prerequisites

- Node.js (v18 or higher)
- npm or yarn

### Installation

1. Clone the repository:
git clone https://github.com/yourusername/documind.git
cd documind

2. Install dependencies:
npm install

3. Start the development server:
npm run dev

The application will be available at `http://localhost:5173`

### Building for Production

To create a production build:

npm run build

The built files will be in the `dist` directory.

## Project Structure

src/
├── components/          # Reusable UI components
│   ├── Chat.tsx        # Chat interface component
│   ├── DocumentList.tsx # Document listing component
│   ├── DocumentUpload.tsx # File upload component
│   └── Navbar.tsx      # Navigation component
├── pages/              # Page components
│   ├── Home.tsx        # Landing page
│   └── Documents.tsx   # Documents management page
├── store/              # State management
│   └── useStore.ts     # Zustand store configuration
├── types/              # TypeScript type definitions
│   └── index.ts
├── App.tsx             # Main application component
└── main.tsx           # Application entry point


## Features in Detail

### Document Upload
- Drag and drop interface
- Support for multiple file formats
- Progress tracking
- File validation
- Status updates

### Document Management
- List view of all documents
- File metadata display
- Download/preview options
- Delete functionality
- Status indicators

### Chat Interface
- Real-time messaging
- Context-aware responses
- Message history
- Timestamp display
- User-friendly interface

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Acknowledgments

- Icons by [Lucide](https://lucide.dev/)
- UI components styled with [Tailwind CSS](https://tailwindcss.com/)
