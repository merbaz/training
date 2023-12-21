
export type address = {
    "street": string;
    "suite": string,
    "city": string,
    "zipcode": number,
    "geo": {
        "lat": number,
        "lng": number
    }
} | null

export type company = {
    "name": "Romaguera-Crona",
    "catchPhrase": "Multi-layered client-server neural-net",
    "bs": "harness real-time e-markets"
} | null;