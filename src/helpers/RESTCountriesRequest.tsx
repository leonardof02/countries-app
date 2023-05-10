export interface Country {
    name: CountryName,
    flags: CountryFlag
    population: number,
    capital: Capital
    region: Region;
}

export interface CountryName {
    common: string,
    official: string,
    nativeName: {
        [id: string]: nameInfo;
    }
}

export interface CountryFlag {
    png: string,
    svg: string,
    alt: string
}

export interface nameInfo {
    official: string,
    common: string,
}

export type Region = "" | "Africa" | "Europe" | "Asia" | "Americas" | "Oceania";
export type Capital = string[];

export async function getAllCountries() {
    try {
        const response = await fetch("https://restcountries.com/v3.1/all?fields=name,population,region,capital,flags");
        const countries: Country[] = await response.json();
        return countries;
    } catch( error ) {
        console.log( error );
    }
}