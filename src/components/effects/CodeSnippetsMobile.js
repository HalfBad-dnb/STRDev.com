import React from 'react';
import './CodeSnippetsMobile.css';

// Function to generate random positions for code snippets
const getRandomPosition = (index, total) => {
  // Distribute more snippets towards the center
  const vertical = 5 + (Math.random() * 80);
  const horizontal = (index % 2 === 0) ? 
    (5 + (Math.random() * 40)) : // Left side
    (55 + (Math.random() * 40));  // Right side
    
  return { 
    top: `${vertical}%`, 
    left: `${horizontal}%`,
    transform: `rotate(${(Math.random() * 8 - 4).toFixed(2)}deg)`
  };
};

// Code snippets data with pre-rendered HTML highlighting
const snippets = [
  {
    id: 1,
    language: 'javascript',
    code: `const fetchData = async () => {
  try {
    const response = await fetch('/api/data');
    return response.json();
  } catch (error) {
    console.error('Error:', error);
  }
};`
  },
  {
    id: 2,
    language: 'javascript',
    code: `// Sort array of objects by date
const sortByDate = (array, key) => {
  return array.sort((a, b) => 
    new Date(b[key]) - new Date(a[key])
  );
};`
  },
  {
    id: 3,
    language: 'css',
    code: `.card {
  background: linear-gradient(45deg, #1a1a2e, #16213e);
  border-radius: 12px;
  padding: 1.5rem;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.2);
  transition: transform 0.3s ease;
}`
  },
  {
    id: 4,
    language: 'html',
    code: `<div class="mobile-nav">
  <button class="hamburger">
    <span></span>
    <span></span>
    <span></span>
  </button>
  <nav class="nav-links">
    <a href="#home">Home</a>
    <a href="#about">About</a>
    <a href="#work">Work</a>
    <a href="#contact">Contact</a>
  </nav>
</div>`
  },
  {
    id: 5,
    language: 'javascript',
    code: `// Debounce function
const debounce = (func, wait = 300) => {
  let timeout;
  return function(...args) {
    clearTimeout(timeout);
    timeout = setTimeout(() => 
      func.apply(this, args), 
      wait
    );
  };
};`
  },
  {
    id: 6,
    language: 'css',
    code: `@media (max-width: 768px) {
  .container {
    grid-template-columns: 1fr;
    padding: 1rem;
  }
  
  .card {
    margin-bottom: 1rem;
  }
}`
  },
  {
    id: 7,
    language: 'javascript',
    code: `// Format date to relative time
const formatRelativeTime = dateString => {
  const now = new Date();
  const date = new Date(dateString);
  const seconds = Math.floor((now - date) / 1000);
  
  if (seconds < 60) return 'just now';
  
  const intervals = {
    year: 31536000,
    month: 2592000,
    week: 604800,
    day: 86400,
    hour: 3600,
    minute: 60
  };
  
  for (let unit in intervals) {
    const interval = Math.floor(seconds / intervals[unit]);
    if (interval >= 1) {
      return interval + ' ' + unit + (interval === 1 ? '' : 's') + ' ago';
    }
  }
};`
  },
  {
    id: 8,
    language: 'html',
    code: `<form class="contact-form">
  <div class="form-group">
    <label for="name">Name</label>
    <input type="text" id="name" required />
  </div>
  
  <div class="form-group">
    <label for="email">Email</label>
    <input type="email" id="email" required />
  </div>
  
  <button type="submit">Send Message</button>
</form>`
  },
  {
    id: 9,
    language: 'css',
    code: `.gradient-text {
  background: linear-gradient(90deg, #6366f1, #8b5cf6);
  -webkit-background-clip: text;
  background-clip: text;
  color: transparent;
  font-weight: bold;
}

.card-hover {
  transition: all 0.3s ease;
}

.card-hover:hover {
  transform: translateY(-5px);
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.1);
}`
  },
  {
    id: 10,
    language: 'javascript',
    code: `// Custom hook for fetching data
const useFetch = (url, options = {}) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const response = await fetch(url, options);
        const json = await response.json();
        setData(json);
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [url]);

  return { data, loading, error };
};`
  }
];

// Add random positions to each snippet
const codeSnippetsData = snippets.map((snippet, index, arr) => ({
  ...snippet,
  position: getRandomPosition(index, arr.length)
}));

const CodeSnippetsMobile = () => {
  return (
    <div className="code-snippets-mobile-container">
      {codeSnippetsData.map(snippet => {
        const themeClass = snippet.language ? `${snippet.language}-theme` : '';
        
        return (
          <div 
            key={snippet.id}
            className={`code-snippet-mobile ${themeClass}`}
            style={snippet.position}
          >
            <pre>
              <code dangerouslySetInnerHTML={{ __html: snippet.code }} />
            </pre>
          </div>
        );
      })}
    </div>
  );
};

export default CodeSnippetsMobile;
