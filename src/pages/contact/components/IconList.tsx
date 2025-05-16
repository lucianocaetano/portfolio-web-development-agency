const IconList: React.FC = () => {
    return (
      <div className="flex flex-col items-start gap-4 mt-4">
        {/* Primer SVG con enlace */}
        <a href="https://example.com" target="_blank" rel="noopener noreferrer">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 28.314 28.323"
            className="w-6 h-6 fill-current text-orange-400 hover:text-white transition-colors duration-300"
            stroke="currentColor"
            strokeWidth="2"
          >
            <path d="M27.728 20.384..." />
          </svg>
        </a>
  
        {/* Segundo SVG */}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 200 200"
          className="w-11 h-11 fill-current text-orange-400 hover:text-white transition-colors duration-300"
          stroke="currentColor"
          strokeWidth="2"
        >
          <path d="M138.832 137.698..." />
        </svg>
  
        {/* Tercer SVG */}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 200 200"
          className="w-12 h-12 fill-current text-orange-400 hover:text-white transition-colors duration-300"
          stroke="currentColor"
          strokeWidth="2"
        >
          <path d="M100.232 149.198..." />
        </svg>
      </div>
    );
  };
  
  export default IconList;
  