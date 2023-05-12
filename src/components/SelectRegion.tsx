import { MouseEvent, useEffect, useState } from "react";
import { IoIosArrowDown } from "react-icons/io";
import "./SelectRegion.scss";
import { Region } from "../helpers/Interfaces";

interface SelectRegionProps {
    selectOptions: Region[];
    onChange: (newValue: Region) => void;
}

export default function SelectRegion({ selectOptions, onChange }: SelectRegionProps) {
    const [hidden, setHidden] = useState<boolean>(false);
    const [selected, setSelected] = useState<Region>("");

    useEffect(() => {
        if (!hidden) window.addEventListener("click", hideMenu);
        else window.removeEventListener("click", hideMenu);
    }, [hidden]);

    function handleClick(e: MouseEvent<HTMLDivElement>) {
        const selected: Region = (e.target as HTMLDivElement).innerText as Region;
        setSelected(selected);
        onChange(selected);
    }

    const toggleHidden = (e: MouseEvent<HTMLDivElement>) => {
        e.stopPropagation();
        setHidden(!hidden);
    };
    const hideMenu = () => setHidden(false);
    const deleteSelection = () => {
        setSelected("");
        onChange("");
    };

    return (
        <div className="dropdown-container">
            <div className="select-region" onClick={toggleHidden}>
                <div>{selected ? selected : "Filter by Region..."}</div>
                <IoIosArrowDown color="#fff" />
            </div>
            {hidden && (
                <div className="select-options">
                    <div
                        className={"option " + (selected === "" ? "selected" : "")}
                        onClick={deleteSelection}
                    >
                        Filter by region...
                    </div>
                    {selectOptions.map((value) => (
                        <div
                            key={value}
                            onClick={handleClick}
                            className={"option " + (selected === value ? "selected" : "")}
                        >
                            {value}
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
}
