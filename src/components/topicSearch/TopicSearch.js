import React, { useState } from 'react';
import { debounce } from '../../utils/debounce';
import Input from '../input';
import { MockExamTopics } from '../../services/mockData';

const TopicSearch = ({ onSelectTopic, placeholder, error, value}) => {
  const [query, setQuery] = useState('');
  const [suggestions, setSuggestions] = useState([]);

  const debouncedSearch = debounce((searchTerm) => {
    if (searchTerm) {
      const filteredTopics = MockExamTopics.filter((topic) =>
        topic.toLowerCase().includes(searchTerm.toLowerCase())
      );
      setSuggestions(filteredTopics.slice(0, 15));
    } else {
      setSuggestions([]);
    }
  }, 300);

  const handleInputChange = (e) => {
    const value = e.target.value;
    setQuery(value);
    debouncedSearch(value);
  };

  const handleSelection = (topic) => {
    onSelectTopic(topic);
    setSuggestions([]);
  };

  return (
    <div className="w-full relative">
        
      <Input type="text"
        value={value || query}
        onChange={handleInputChange}
        placeholder={placeholder}/>
      
      {suggestions.length > 0 && (
        <ul className="mt-2 border border-gray-300 rounded bg-white max-h-48 overflow-y-auto absolute w-full z-10 top-9">
          {suggestions.map((topic, index) => (
            <li
              key={index}
              onClick={() => handleSelection(topic)}
              className="p-2 hover:bg-gray-200 cursor-pointer"
            >
              {topic}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default TopicSearch;
