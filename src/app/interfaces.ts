export interface Token {
    token: string;
}

export interface Credentials {
    email: string;
    password: string;
}

export interface Hero {
    response: string,
    id: number,
    name: string,
    powerstats: {
        "intelligence": number|string,
        "strength": number|string,
        "speed": number|string,
        "durability": number,
        "power": number,
        "combat": number
    },
    biography: {
        "full-name": string,
        "alter-egos": string,
        "aliases": string[],
        "place-of-birth": string,
        "first-appearance": string,
        "publisher": string,
        "alignment": string
    },
    appearance: {
        "gender": string,
        "race": string|null,
        "height": string[],
        "weight": string[],
        "eye-color": string,
        "hair-color": string
    },
    work: {
        "occupation": string,
        "base": string
    },
    connections: {
        "group-affiliation": string,
        "relatives": string
    },
    image: {
        "url": "https://www.superherodb.com/pictures2/portraits/10/100/1340.jpg"
    }
}