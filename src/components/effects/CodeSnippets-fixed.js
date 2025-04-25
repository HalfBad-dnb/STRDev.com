import React from 'react';
import './CodeSnippets.css';

// Code snippets data with pre-rendered HTML highlighting
const codeSnippetsData = [
  {
    id: 1,
    language: 'javascript',
    position: { top: '8%', left: '12%' },
    code: `<span class="keyword">const</span> <span class="function">renderComponent</span> = (<span class="variable">props</span>) => {
  <span class="keyword">const</span> { <span class="variable">data</span>, <span class="variable">isLoading</span>, <span class="variable">error</span> } = <span class="function">useQuery</span>(<span class="string">"fetchData"</span>);
  
  <span class="keyword">if</span> (<span class="variable">isLoading</span>) <span class="keyword">return</span> <<span class="class">Spinner</span> <span class="variable">size</span>=<span class="string">"lg"</span> />;
  <span class="keyword">if</span> (<span class="variable">error</span>) <span class="keyword">return</span> <<span class="class">ErrorMessage</span> <span class="variable">message</span>={<span class="variable">error</span>.<span class="property">message</span>} />;
  
  <span class="keyword">return</span> (
    <<span class="variable">div</span> <span class="variable">className</span>=<span class="string">"container"</span>>
      {<span class="variable">data</span>.<span class="function">map</span>(<span class="variable">item</span> => (
        <<span class="class">Card</span> <span class="variable">key</span>={<span class="variable">item</span>.<span class="property">id</span>}>
          <<span class="class">CardHeader</span>>{<span class="variable">item</span>.<span class="property">title</span>}</<span class="class">CardHeader</span>>
          <<span class="class">CardBody</span>>{<span class="variable">item</span>.<span class="property">description</span>}</<span class="class">CardBody</span>>
          <<span class="class">CardFooter</span>>
            <<span class="class">Button</span> <span class="variable">variant</span>=<span class="string">"primary"</span> <span class="variable">onClick</span>={() => <span class="function">handleAction</span>(<span class="variable">item</span>.<span class="property">id</span>)}>
              <span class="variable">View</span> <span class="variable">Details</span>
            </<span class="class">Button</span>>
          </<span class="class">CardFooter</span>>
        </<span class="class">Card</span>>
      ))}
    </<span class="variable">div</span>>
  );
};`
  },
  {
    id: 2,
    language: 'css',
    position: { top: '15%', right: '10%' },
    code: `<span class="selector">.dashboard-container</span> {
  <span class="property">display</span>: <span class="value">grid</span>;
  <span class="property">grid-template-columns</span>: <span class="function">repeat</span>(<span class="value">auto-fill</span>, <span class="function">minmax</span>(<span class="number">280px</span>, <span class="number">1fr</span>));
  <span class="property">gap</span>: <span class="number">1.5rem</span>;
  <span class="property">padding</span>: <span class="number">1rem</span>;
  <span class="property">max-width</span>: <span class="number">1200px</span>;
  <span class="property">margin</span>: <span class="number">0</span> <span class="value">auto</span>;
}

<span class="selector">.stat-card</span> {
  <span class="property">background</span>: <span class="function">linear-gradient</span>(<span class="number">135deg</span>, <span class="color">#1f2937</span>, <span class="color">#111827</span>);
  <span class="property">border-radius</span>: <span class="number">0.5rem</span>;
  <span class="property">padding</span>: <span class="number">1.25rem</span>;
  <span class="property">box-shadow</span>: <span class="number">0</span> <span class="number">4px</span> <span class="number">6px</span> <span class="function">rgba</span>(<span class="number">0</span>, <span class="number">0</span>, <span class="number">0</span>, <span class="number">0.1</span>);
  <span class="property">transition</span>: <span class="value">transform</span> <span class="number">0.3s</span> <span class="value">ease</span>;
  <span class="property">border</span>: <span class="number">1px</span> <span class="value">solid</span> <span class="function">rgba</span>(<span class="number">255</span>, <span class="number">255</span>, <span class="number">255</span>, <span class="number">0.1</span>);
}

<span class="selector">.stat-card:hover</span> {
  <span class="property">transform</span>: <span class="function">translateY</span>(-<span class="number">5px</span>);
  <span class="property">box-shadow</span>: <span class="number">0</span> <span class="number">10px</span> <span class="number">15px</span> <span class="function">rgba</span>(<span class="number">0</span>, <span class="number">0</span>, <span class="number">0</span>, <span class="number">0.2</span>);
  <span class="property">border-color</span>: <span class="function">rgba</span>(<span class="number">99</span>, <span class="number">102</span>, <span class="number">241</span>, <span class="number">0.4</span>);
}`
  },
  {
    id: 3,
    language: 'python',
    position: { bottom: '18%', right: '8%' },
    code: `<span class="keyword">import</span> <span class="module">pandas</span> <span class="keyword">as</span> <span class="variable">pd</span>
<span class="keyword">import</span> <span class="module">numpy</span> <span class="keyword">as</span> <span class="variable">np</span>
<span class="keyword">from</span> <span class="module">sklearn.model_selection</span> <span class="keyword">import</span> <span class="function">train_test_split</span>
<span class="keyword">from</span> <span class="module">sklearn.ensemble</span> <span class="keyword">import</span> <span class="class">RandomForestClassifier</span>

<span class="comment"># Load and prepare dataset</span>
<span class="keyword">def</span> <span class="function">prepare_data</span>(<span class="parameter">filepath</span>, <span class="parameter">test_size</span>=<span class="number">0.2</span>):
    <span class="string">"""
    Load data from CSV and prepare train/test splits
    """</span>
    <span class="variable">df</span> = <span class="variable">pd</span>.<span class="function">read_csv</span>(<span class="parameter">filepath</span>)
    
    <span class="comment"># Clean missing values</span>
    <span class="variable">df</span> = <span class="variable">df</span>.<span class="function">dropna</span>()
    
    <span class="comment"># Extract features and target</span>
    <span class="variable">X</span> = <span class="variable">df</span>.<span class="function">drop</span>(<span class="string">'target'</span>, <span class="parameter">axis</span>=<span class="number">1</span>)
    <span class="variable">y</span> = <span class="variable">df</span>[<span class="string">'target'</span>]
    
    <span class="comment"># Split data</span>
    <span class="keyword">return</span> <span class="function">train_test_split</span>(<span class="variable">X</span>, <span class="variable">y</span>, <span class="parameter">test_size</span>=<span class="parameter">test_size</span>)
`
  },
  {
    id: 4,
    language: 'typescript',
    position: { top: '40%', left: '25%' },
    code: `<span class="comment">// TypeScript interfaces for app</span>
<span class="keyword">export</span> <span class="keyword">interface</span> <span class="interface">User</span> {
  <span class="property">id</span>: <span class="type">string</span>;
  <span class="property">username</span>: <span class="type">string</span>;
  <span class="property">email</span>: <span class="type">string</span>;
  <span class="property">firstName</span>?: <span class="type">string</span>;
  <span class="property">lastName</span>?: <span class="type">string</span>;
  <span class="property">role</span>: <span class="type">'admin'</span> | <span class="type">'user'</span> | <span class="type">'guest'</span>;
  <span class="property">createdAt</span>: <span class="type">Date</span>;
  <span class="property">preferences</span>: <span class="interface">UserPreferences</span>;
}

<span class="keyword">export</span> <span class="keyword">interface</span> <span class="interface">Task</span> {
  <span class="property">id</span>: <span class="type">string</span>;
  <span class="property">title</span>: <span class="type">string</span>;
  <span class="property">status</span>: <span class="enum">TaskStatus</span>;
  <span class="property">priority</span>: <span class="enum">TaskPriority</span>;
  <span class="property">dueDate</span>?: <span class="type">Date</span>;
  <span class="property">assigneeId</span>?: <span class="type">string</span>;
  <span class="property">tags</span>: <span class="type">string</span>[];
}

<span class="keyword">export</span> <span class="keyword">enum</span> <span class="enum">TaskStatus</span> {
  <span class="property">BACKLOG</span> = <span class="string">'backlog'</span>,
  <span class="property">TODO</span> = <span class="string">'todo'</span>,
  <span class="property">IN_PROGRESS</span> = <span class="string">'in-progress'</span>,
  <span class="property">DONE</span> = <span class="string">'done'</span>
}`
  },
  {
    id: 5,
    language: 'sql',
    position: { top: '60%', right: '20%' },
    code: `<span class="comment">-- SQL database schema for an e-commerce platform</span>
<span class="keyword">CREATE TABLE</span> <span class="table">users</span> (
    <span class="column">user_id</span> <span class="type">UUID</span> <span class="keyword">PRIMARY KEY</span>,
    <span class="column">username</span> <span class="type">VARCHAR</span>(<span class="number">50</span>) <span class="keyword">NOT NULL</span> <span class="keyword">UNIQUE</span>,
    <span class="column">email</span> <span class="type">VARCHAR</span>(<span class="number">100</span>) <span class="keyword">NOT NULL</span> <span class="keyword">UNIQUE</span>,
    <span class="column">password_hash</span> <span class="type">VARCHAR</span>(<span class="number">255</span>) <span class="keyword">NOT NULL</span>,
    <span class="column">is_admin</span> <span class="type">BOOLEAN</span> <span class="keyword">DEFAULT</span> <span class="boolean">FALSE</span>
);

<span class="keyword">CREATE TABLE</span> <span class="table">products</span> (
    <span class="column">product_id</span> <span class="type">UUID</span> <span class="keyword">PRIMARY KEY</span>,
    <span class="column">name</span> <span class="type">VARCHAR</span>(<span class="number">100</span>) <span class="keyword">NOT NULL</span>,
    <span class="column">price</span> <span class="type">DECIMAL</span>(<span class="number">10</span>, <span class="number">2</span>) <span class="keyword">NOT NULL</span>,
    <span class="column">category_id</span> <span class="type">UUID</span> <span class="keyword">REFERENCES</span> <span class="table">categories</span>(<span class="column">category_id</span>)
);

<span class="keyword">SELECT</span> 
    <span class="column">p.name</span>, 
    <span class="column">p.price</span>, 
    <span class="column">c.name</span> <span class="keyword">AS</span> <span class="alias">category</span>,
    <span class="function">COUNT</span>(<span class="column">oi.order_item_id</span>) <span class="keyword">AS</span> <span class="alias">times_ordered</span>
<span class="keyword">FROM</span> <span class="table">products</span> <span class="alias">p</span>
<span class="keyword">JOIN</span> <span class="table">categories</span> <span class="alias">c</span> <span class="keyword">ON</span> <span class="column">p.category_id</span> = <span class="column">c.category_id</span>
<span class="keyword">GROUP BY</span> <span class="column">p.product_id</span>, <span class="column">c.name</span>
<span class="keyword">ORDER BY</span> <span class="alias">times_ordered</span> <span class="keyword">DESC</span>
<span class="keyword">LIMIT</span> <span class="number">10</span>;`
  },
  {
    id: 6,
    language: 'json',
    position: { bottom: '40%', left: '15%' },
    code: `{
  <span class="key">"name"</span>: <span class="string">"portfolio-website"</span>,
  <span class="key">"version"</span>: <span class="string">"1.2.0"</span>,
  <span class="key">"scripts"</span>: {
    <span class="key">"start"</span>: <span class="string">"react-scripts start"</span>,
    <span class="key">"build"</span>: <span class="string">"react-scripts build"</span>,
    <span class="key">"test"</span>: <span class="string">"react-scripts test"</span>,
    <span class="key">"deploy"</span>: <span class="string">"npm run build && firebase deploy"</span>
  },
  <span class="key">"dependencies"</span>: {
    <span class="key">"react"</span>: <span class="string">"^18.2.0"</span>,
    <span class="key">"react-dom"</span>: <span class="string">"^18.2.0"</span>,
    <span class="key">"react-icons"</span>: <span class="string">"^4.8.0"</span>,
    <span class="key">"framer-motion"</span>: <span class="string">"^10.1.0"</span>,
    <span class="key">"firebase"</span>: <span class="string">"^9.17.2"</span>
  },
  <span class="key">"browserslist"</span>: {
    <span class="key">"production"</span>: [<span class="string">">0.2%"</span>, <span class="string">"not dead"</span>],
    <span class="key">"development"</span>: [<span class="string">"last 1 chrome version"</span>]
  }
}`
  },
  {
    id: 7,
    language: 'go',
    position: { bottom: '10%', left: '30%' },
    code: `<span class="keyword">package</span> <span class="package">main</span>

<span class="keyword">import</span> (
	<span class="string">"context"</span>
	<span class="string">"log"</span>
	<span class="string">"net/http"</span>
	<span class="string">"os"</span>
	<span class="string">"time"</span>

	<span class="string">"github.com/gin-gonic/gin"</span>
)

<span class="keyword">type</span> <span class="type">User</span> <span class="keyword">struct</span> {
	<span class="field">Username</span> <span class="type">string</span> <span class="tag">\`json:"username" binding:"required"\`</span>
	<span class="field">Email</span>    <span class="type">string</span> <span class="tag">\`json:"email" binding:"required,email"\`</span>
	<span class="field">Role</span>     <span class="type">string</span> <span class="tag">\`json:"role" gorm:"default:'user'"\`</span>
}

<span class="keyword">func</span> <span class="function">main</span>() {
	<span class="comment">// Set up Gin router</span>
	<span class="variable">router</span> := <span class="variable">gin</span>.<span class="function">Default</span>()

	<span class="comment">// Routes</span>
	<span class="variable">apiV1</span> := <span class="variable">router</span>.<span class="function">Group</span>(<span class="string">"/api/v1"</span>)
	{
		<span class="variable">users</span> := <span class="variable">apiV1</span>.<span class="function">Group</span>(<span class="string">"/users"</span>)
		{
			<span class="variable">users</span>.<span class="function">GET</span>(<span class="string">"/"</span>, <span class="function">getAllUsers</span>)
			<span class="variable">users</span>.<span class="function">GET</span>(<span class="string">"/:id"</span>, <span class="function">getUserByID</span>)
		}
	}
}`
  },
  {
    id: 8,
    language: 'rust',
    position: { top: '65%', right: '35%' },
    code: `<span class="keyword">use</span> <span class="module">std::sync::Arc</span>;
<span class="keyword">use</span> <span class="module">tokio::sync::Mutex</span>;
<span class="keyword">use</span> <span class="module">serde::{Deserialize, Serialize}</span>;

<span class="attribute">#[derive(Debug, Clone, Serialize, Deserialize)]</span>
<span class="keyword">struct</span> <span class="type">Task</span> {
    <span class="field">id</span>: <span class="type">u64</span>,
    <span class="field">priority</span>: <span class="type">u8</span>,
    <span class="field">description</span>: <span class="type">String</span>,
    <span class="field">completed</span>: <span class="type">bool</span>,
}

<span class="attribute">#[derive(Debug)]</span>
<span class="keyword">struct</span> <span class="type">TaskQueue</span> {
    <span class="field">tasks</span>: <span class="type">Vec<Task></span>,
    <span class="field">max_size</span>: <span class="type">usize</span>,
}

<span class="keyword">impl</span> <span class="type">TaskQueue</span> {
    <span class="keyword">fn</span> <span class="function">new</span>(<span class="parameter">max_size</span>: <span class="type">usize</span>) -> <span class="type">Self</span> {
        <span class="type">Self</span> {
            <span class="field">tasks</span>: <span class="function">Vec::with_capacity</span>(<span class="parameter">max_size</span>),
            <span class="field">max_size</span>,
        }
    }
}`
  },
  {
    id: 9,
    language: 'css',
    position: { bottom: '35%', right: '25%' },
    code: `<span class="comment">/* Animations and keyframes for UI elements */</span>
<span class="selector">:root</span> {
  <span class="property">--primary</span>: <span class="color">#6366f1</span>;
  <span class="property">--glow</span>: <span class="function">rgba</span>(<span class="number">99</span>, <span class="number">102</span>, <span class="number">241</span>, <span class="number">0.6</span>);
  <span class="property">--background</span>: <span class="color">#0f172a</span>;
  <span class="property">--text</span>: <span class="color">#e2e8f0</span>;
}

<span class="selector">.button</span> {
  <span class="property">position</span>: <span class="value">relative</span>;
  <span class="property">padding</span>: <span class="number">0.75rem</span> <span class="number">1.5rem</span>;
  <span class="property">border-radius</span>: <span class="number">0.5rem</span>;
  <span class="property">background</span>: <span class="keyword">var</span>(<span class="variable">--primary</span>);
  <span class="property">color</span>: <span class="color">white</span>;
  <span class="property">overflow</span>: <span class="value">hidden</span>;
  <span class="property">z-index</span>: <span class="number">1</span>;
}

<span class="at-rule">@keyframes</span> <span class="keyframes">pulse</span> {
  <span class="number">0%</span>, <span class="number">100%</span> {
    <span class="property">box-shadow</span>: <span class="number">0</span> <span class="number">0</span> <span class="number">0</span> <span class="number">0</span> <span class="keyword">var</span>(<span class="variable">--glow</span>);
    <span class="property">transform</span>: <span class="function">scale</span>(<span class="number">1</span>);
  }
  <span class="number">50%</span> {
    <span class="property">box-shadow</span>: <span class="number">0</span> <span class="number">0</span> <span class="number">20px</span> <span class="number">5px</span> <span class="keyword">var</span>(<span class="variable">--glow</span>);
    <span class="property">transform</span>: <span class="function">scale</span>(<span class="number">1.03</span>);
  }
}`
  },
  {
    id: 10,
    language: 'cpp',
    position: { top: '20%', left: '40%' },
    code: `<span class="comment">// Data structures implementation in C++</span>
<span class="keyword">template</span><<span class="type">typename</span> <span class="type">T</span>>
<span class="keyword">class</span> <span class="class">Graph</span> {
<span class="access">private</span>:
    <span class="keyword">struct</span> <span class="type">Edge</span> {
        <span class="type">size_t</span> <span class="variable">dest</span>;
        <span class="type">T</span> <span class="variable">weight</span>;
        
        <span class="function">Edge</span>(<span class="type">size_t</span> <span class="parameter">d</span>, <span class="type">T</span> <span class="parameter">w</span>) : <span class="variable">dest</span>(<span class="parameter">d</span>), <span class="variable">weight</span>(<span class="parameter">w</span>) {}
        
        <span class="type">bool</span> <span class="keyword">operator</span>>(<span class="keyword">const</span> <span class="type">Edge</span>& <span class="parameter">other</span>) <span class="keyword">const</span> {
            <span class="keyword">return</span> <span class="variable">weight</span> > <span class="parameter">other</span>.<span class="variable">weight</span>;
        }
    };
    
    <span class="type">std::vector</span><<span class="type">std::vector</span><<span class="type">Edge</span>>> <span class="variable">adjacency_list</span>;
    <span class="type">size_t</span> <span class="variable">num_vertices</span>;

<span class="access">public</span>:
    <span class="function">Graph</span>(<span class="type">size_t</span> <span class="parameter">vertices</span>) 
        : <span class="variable">num_vertices</span>(<span class="parameter">vertices</span>) {
        <span class="variable">adjacency_list</span>.<span class="function">resize</span>(<span class="parameter">vertices</span>);
    }
    
    <span class="type">void</span> <span class="function">add_edge</span>(<span class="type">size_t</span> <span class="parameter">source</span>, <span class="type">size_t</span> <span class="parameter">dest</span>, <span class="type">T</span> <span class="parameter">weight</span>) {
        <span class="variable">adjacency_list</span>[<span class="parameter">source</span>].<span class="function">emplace_back</span>(<span class="parameter">dest</span>, <span class="parameter">weight</span>);
    }
};`
  }
];

const CodeSnippets = () => {
  return (
    <div className="code-snippets-container">
      {codeSnippetsData.map(snippet => {
        // Apply appropriate theme based on language
        const themeClass = snippet.language ? `${snippet.language}-theme` : '';
        
        // Apply different size classes for visual variety
        const sizeClass = snippet.id % 3 === 0 ? 'large' : 
                         snippet.id % 3 === 1 ? 'medium' : 'small';
        
        // Apply different opacity levels
        const opacityClass = snippet.id % 3 === 0 ? 'high-opacity' : 
                            snippet.id % 3 === 1 ? 'medium-opacity' : 'low-opacity';
        
        // Apply different border radius options
        const roundedClass = snippet.id % 5 === 0 ? 'very-rounded' : 
                            snippet.id % 2 === 0 ? 'rounded' : '';
                            
        // Apply different blur effects
        const blurClass = snippet.id % 2 === 0 ? 'more-blur' : 'less-blur';
        
        return (
          <div 
            key={snippet.id}
            className={`code-snippet ${themeClass} ${sizeClass} ${opacityClass} ${roundedClass} ${blurClass}`}
            style={{
              ...snippet.position,
              // Add subtle random rotation
              transform: `rotate(${(Math.random() * 6 - 3).toFixed(2)}deg)`,
              // Randomize dimensions slightly
              width: `${320 + (snippet.id * 10) % 80}px`,
              maxHeight: `${200 + (snippet.id * 15) % 100}px`,
              // Add z-index variation
              zIndex: -1 - (snippet.id % 3),
            }}
          >
            <pre dangerouslySetInnerHTML={{ __html: snippet.code }} />
          </div>
        );
      })}
    </div>
  );
};

export default CodeSnippets;
