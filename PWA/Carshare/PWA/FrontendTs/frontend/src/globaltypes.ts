export type Car = {
    id: number;
    ownerId: User;
    maxRange: number;
    odometer: number;
    name: string;
    colour: string;
    reserved: boolean;
    type: CarTypeEnum;
    tank: number;
    users: User[];
    trips: Trip[];
    reservations: Reservation[];
    transactions: Transaction[];
    percentages: PercentageUser[]
  };

export type User = {
    id: number;
    name: string;
    colour: string;
    firebaseId: number;
};

export type Reservation = {
    id: number;
    user: User
    startDate: Date;
    endDate: Date;
}
export type Transaction = {
    id: number;
    user: User;
    liters: number;
    date: Date;
    amount: number;
}
export type Trip = {
    id: number;
    user: User
    distance: number;
    date: Date;
}

export type PercentageUser = {
    id: number;
    user: User;
    percentage: number;
}

export enum CarTypeEnum  {
    bmw2022sideview = 'bmw2022sideview',
    minicooperside = 'minicooperside',
    porschetaycan = 'porschetaycan'
    
};
export enum CarStatus {
    'Currently reserved',
    'Currently available'
}