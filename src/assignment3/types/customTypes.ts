
export type address = {
    street: string;
    suite: string,
    city: string,
    zipcode: number,
    geo: {
        lat: number,
        lng: number
    }
};

export type company = {
    name: string,
    catchPhrase: string,
    bs: string
};