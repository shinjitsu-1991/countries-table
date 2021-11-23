export interface Country extends CountryBase {
    continentName?: string
    continent: {
        name: string
    };
}

interface CountryBase {
    name: String
    code: string
    emojiU: string
}

export default interface CountryData {
    countries: Country[];
}