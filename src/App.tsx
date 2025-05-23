import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import SDEReference from './components/SDEReference';
import MonacoEditorReference from './components/MonacoEditorReference';
import './App.css'

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<SDEReference />} />
          <Route path="/monaco-editor" element={<MonacoEditorReference />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
