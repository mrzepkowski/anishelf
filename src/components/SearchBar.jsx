export default function SearchBar({ value, onChange }) {
    return (
        <input 
            className="search-field"
            type="search"
            placeholder="Title" 
            value={value} 
            onChange={(e) => onChange(e.target.value)} 
        />
    );
}