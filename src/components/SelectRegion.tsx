import { ChangeEvent } from "react";
import "./SelectRegion.scss";

interface SelectRegionProps {
    selectOptions: string[];
    onChange: (e: ChangeEvent<HTMLSelectElement>) => void;
}

export default function SelectRegion({ selectOptions, onChange }: SelectRegionProps) {
  
    function handleChange( e: ChangeEvent<HTMLSelectElement> ) {
        onChange( e );
    }
  
    return (
        <div className="select-region">
            <select onChange={ handleChange }>
                {selectOptions.map((value) => (
                    <option value={value}>{value}</option>
                ))}
            </select>
        </div>
    );
}
