export interface Country {
    name: CountryName,
    flags: CountryFlag
    population: number,
    capital: Capital
    region: Region;
    subregion: string,
    tld: string[],
    currencies: Currencies,
    borders: string[]
    languages: Languages
}

export interface Currencies {
    [id: string]: {
        name: string,
        symbol: string
    }
}

export interface Languages {
    [id: string]: string
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