import { StringifyOptions } from "querystring";

// As well as the interface we export a class which matches the interface – this allows us to more easily populate Firestore

export interface ICar {
    make: string; 
    model: string; 
    year: string; 
    imageURL: string; 
}

export class Car{
    make: string; 
    model: string; 
    year: string; 
    imageURL: string; 

    constructor(make: string, model: string, year: string, imageURL: string) {
        this.make = make; 
        this.model = model; 
        this.year = year; 
        this.imageURL = imageURL; 
    }
}