import { MouseEvent, useEffect, useState } from "react";
import { IoIosArrowDown } from "react-icons/io";
import "./SelectRegion.scss";

interface SelectRegionProps {
    selectOptions: string[];
    onChange: (newValue: string) => void;
}

export default function SelectRegion({ selectOptions, onChange }: SelectRegionProps) {
    const [hidden, setHidden] = useState<boolean>(false);
    const [selected, setSelected] = useState<string | null>(null);

    useEffect(() => {
        if (!hidden) window.addEventListener("click", hideMenu);
        else window.removeEventListener("click", hideMenu);
    }, [hidden]);

    function handleClick(e: MouseEvent<HTMLDivElement>) {
        const selected = (e.target as HTMLDivElement).innerText;
        setSelected(selected);
        onChange(selected);
    }

    const toggleHidden = (e: MouseEvent<HTMLDivElement>) => {
        e.stopPropagation();
        console.log("CLick");
        console.log(hidden);
        setHidden(!hidden);
        console.log(hidden);
    };
    const hideMenu = () => setHidden(false);
    const deleteSelection = () => setSelected(null);

    return (
        <div className="dropdown-container">
            <div className="select-region" onClick={toggleHidden}>
                <div>{selected ? selected : "Filter by Region..."}</div>
                <IoIosArrowDown color="#fff" />
            </div>
            {hidden && (
                <div className="select-options">
                    <div className={ "option " + ( (selected === null ? "selected" : "" ) ) }
                    onClick={deleteSelection}>
                        Filter by region...
                    </div>
                    {selectOptions.map((value) => (
                        <div
                            key={value}
                            onClick={handleClick}
                            className={ "option " + ( (selected === value) ? "selected" : "" )}
                        >
                            {value}
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
}
