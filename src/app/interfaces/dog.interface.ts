export interface IDog {
    id: string;
    name: string;
    ownerID: string;
    age: number;
    ageGroup: number;
    createdAt: Date;
    updatedAt: Date;
    picture?: string;
    size: string;
}