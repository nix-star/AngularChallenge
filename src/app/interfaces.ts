export interface Token {
    token: string;
}

export interface Credentials {
    email: string;
    password: string;
}

export interface Hero {
    id: number;
    name: string;
    fullName: string;
    alias: string[];
    image: string;
    workplace: string;
    height: string,
    weight: string,
    eyesColor: string;
    hairColor: string;
    powerstats: {
        intelligence: number|null,
        strength: number|null,
        speed: number|null,
        durability: number|null,
        power: number|null,
        combat: number|null
    }
}