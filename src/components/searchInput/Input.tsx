import React,{ChangeEvent} from "react";
import './Style.css';
import { validateInputNumber } from "../../helper/helpers";

interface SearchInputProps {
  onSearch: (query: string) => void;
}
const SearchInput: React.FC<SearchInputProps> = ({onSearch} : SearchInputProps) => {
  const [queryString, setQueryString] = React.useState<string>(""); 

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const value: string = validateInputNumber(e.target.value);
    setQueryString(value)
    onSearch(value)
  }

  return(
        <div className="search-container">
          <i className="fa-solid fa-magnifying-glass"></i>
          <input 
          type="text" 
          placeholder="Search name or company ..." 
          value={queryString}
          onChange={handleChange}
          />
        </div>
    )
}

export default SearchInput;