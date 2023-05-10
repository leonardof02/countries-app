import { ChangeEvent } from "react";
import { FaSearch } from "react-icons/fa";
import "./SearchBar.scss";

interface SearchBarProps {
    value: string;
    onChange: ( e: ChangeEvent<HTMLInputElement> ) => void;
}

export default function SearchBar({ value, onChange }: SearchBarProps) {

    const handleChange = ( e: ChangeEvent<HTMLInputElement> ) => onChange( e );

    return (
        <div className="search-bar">
            <FaSearch color="#fff" size={20}></FaSearch>
            <input type="text" value={ value } onChange={ handleChange } placeholder="Search for a country..."/>
        </div>
    );
}
