import { registerEnumType } from '@nestjs/graphql';

export enum CarStatus {
    ACTIVE = 'ACTIVE',
    SOLD = 'SOLD',
    DELETE = 'DELETE',
}
registerEnumType(CarStatus, {
    name: 'CarStatus',
});

export enum CarType {
    NEW = 'NEW',
    USED = 'USED',
}
registerEnumType(CarType, {
    name: 'CarType',
});

export enum CarColor {
    Black = 'Black',
    White = 'White',
    Silver = 'Silver',
    Gray = 'Gray',
    Green = 'Green',
    Red = 'Red',
    Blue = 'Blue',
    Gold = 'Gold',
    Yellow = 'Yellow',
    Burgundy = 'Burgundy',
    Beige = 'Beige',
    Bronze = 'Bronze',
    Other = 'Other',

}
registerEnumType(CarColor, {
    name: 'CarColor',
});

export enum CarTuningType {
    Exterior = 'Exterior',
    Performance = 'Performance',
    Suspension = 'Suspension',
    Interior = 'Interior',
    Safety = 'Safety',
    Personalization = 'Personalization',
    Utility = 'Utility',

}
registerEnumType(CarTuningType, {
    name: 'CarTuningType',
});

export enum CarSort {
    Electric = 'Electric',
    Fuel = 'Fuel',
    Hybrid = 'Hybrid',
}
registerEnumType(CarSort, {
    name: 'CarSort',
});

export enum CarFuelType {
    Gasoline = 'Gasoline',
    Diesel = 'Diesel',
    Electric = 'Electric',
    Hybrid = 'Hybrid',
    CNG = 'CNG',
    LPG = 'LPG',
}
registerEnumType(CarFuelType, {
    name: 'CarFuelType',
})

export enum CarTransmission {
    Manual = 'Manual',
    Automatic = 'Automatic',
    CVT = 'CVT',
    Dual_Clutch = 'Dual_Clutch',
    Semi_Automatic = 'Semi_Automatic',
}
registerEnumType(CarTransmission, {
    name: 'CarTransmission',
});

export enum CarDriveType {
    FWD = 'FWD',
    RWD = 'RWD',
    AWD = 'AWD',
    FOURWD = 'FOURWD',
}
registerEnumType(CarDriveType, {
    name: 'CarDriveType',
});

export enum CarBody {
    Micro = 'Micro',
    Hatchback = 'Hatchback',
    Crossover = 'Crossover',
    Sedan = 'Sedan',
    Coupe = 'Coupe',
    Coupe_SUV = 'Coupe_SUV',
    SUV = 'SUV',
    Off_Roader = 'Off_Roader',
    Pick_up = 'Pick_up',
    MUV = 'MUV',
    Wagon = 'Wagon',
    VAN = 'VAN',
    Sport = 'Sport',
    Cabriolet = 'Cabriolet',
    Roadster = 'Roadster',
    Limousine = 'Limousine',
    Formula_1 = 'Formula_1',
    Muscle = 'Muscle',
    Hyper = 'Hyper',
}
registerEnumType(CarBody, {
    name: 'CarBody',
});

export enum CarMadeIn {
    USA = 'USA',
    Korea = 'Korea',
    Japan = 'Japan',
    China = 'China',
    Germany = 'Germany',
    France = 'France',
    Italy = 'Italy',
    UK = 'UK',
    Russia = 'Russia',
    Sweden = 'Sweden',
    Czechia = 'Czechia',
    Netherlands = 'Netherlands',
    Romania = 'Romania',
    Spain = 'Spain',
    Others = 'Others',
}
registerEnumType(CarMadeIn, {
    name: 'CarMadeIn',
});

export enum CarGroup {
    Luxury = 'Luxury',
    Super_Car = 'Super Car',
    Sport = 'Sport',
    Family = 'Family',
    Economy = 'Economy',
    Land_Car = 'Land_Car',
    City_Car = 'City_Car',
}
registerEnumType(CarGroup, {
    name: 'Cargroup',
});

export enum CarLocation {
    Seoul = 'Seoul',
    Busan = 'Busan',
    Incheon = 'Incheon',
    Daegu = 'Daegu',
    Daejeon = 'Daejeon',
    Gwangju = 'Gwangju',
    Ulsan = 'Ulsan',
    Suwon = 'Suwon',
    Gyeongju = 'Gyeongju',
    Jeonju = 'Jeonju',
    Jeju = 'Jeju',
    Changwon = 'Changwon',
    Pohang = 'Pohang',
    Cheonan = 'Cheonan',
    Gimhae = 'Gimhae',
    Cheongju = 'Cheongju',
    Wonju = 'Wonju',
    Iksan = 'Iksan',
    Mokpo = 'Mokpo',
    Andong = 'Andong',
    Asan = 'Asan',
    Ansan = 'Ansan',
    Pyeongtaek = 'Pyeongtaek',
    Yangsan = 'Yangsan',
    Jeonggeup = 'Jeonggeup',
    Gimpo = 'Gimpo',
    Gunsan = 'Gunsan',
    Gimcheon = 'Gimcheon',
    Gangeung = 'Gangeung',
    Uijeongbu = 'Uijeongbu',
    Icheon = 'Icheon',
    Paju = 'Paju',
    Tongyeong = 'Tongyeong',
    Chuncheon = 'Chuncheon',
    Sokcho = 'Sokcho',
    Naju = 'Naju',
    Gyeongsan = 'Gyeongsan',
    Hwaseong = 'Hwaseong',
    Yeoju = 'Yeoju',
    Seongnam = 'Seongnam',
    Other = 'Other',
}
registerEnumType(CarLocation, {
    name: 'CarLocation',
});

export enum CarBrand {
    Hyundai = 'Hyundai',
    KIA = 'KIA',
    Genesis = 'Genesis',
    SsangYong = 'SsangYong',
    Tesla = 'Tesla',
    Toyota = 'Toyota',
    BYD = 'BYD',
    Rolls_Royce = 'Rolls_Royce',
    Bentley = 'Bentley',
    Aston_Martin = 'Aston_Martin',
    Jaguar = 'Jaguar',
    Land_Rover = 'Land_Rover',
    BMW = 'BMW',
    Mercedes_Benz = 'Mercedes_Benz',
    Audi = 'Audi',
    Porsche = 'Porsche',
    Maserati = 'Maserati',
    Lexus = 'Lexus',
    Cadillac = 'Cadillac',
    Lincoln = 'Lincoln',
    Alfa_Romeo = 'Alfa_Romeo',
    Volvo = 'Volvo',
    Pagani = 'Pagani',
    Koenigsegg = 'Koenigsegg',
    McLaren = 'McLaren',
    Ferrari = 'Ferrari',
    Lamborghini = 'Lamborghini',
    Chevrolet = 'Chevrolet',
    Nissan = 'Nissan',
    Ford_Mustang = 'Ford_Mustang',
    Caterham = 'Caterham',
    Spyker = 'Spyker',
    Zagato = 'Zagato',
    Lotus = 'Lotus',
    Bugatti = 'Bugatti',
    Zenvo = 'Zenvo',
    Rimac = 'Rimac',
    Noble = 'Noble',
    NIO = 'NIO',
    XPeng = 'XPeng',
    Rivian = 'Rivian',
    Lucid = 'Lucid',
    Polestar = 'Polestar',
    Fisker = 'Fisker',
    Bollinger = 'Bollinger',
    Honda = 'Honda',
    Ford = 'Ford',
    Peugeot = 'Peugeot',
    Renault = 'Renault',
    MINI = 'MINI',
    FIAT = 'FIAT',
    Suzuki = 'Suzuki',
    Mazda = 'Mazda',
    SEAT = 'SEAT',
    Tata = 'Tata',
    Range_Rover = 'Range_Rover',
    Jeep = 'Jeep',
    RAM = 'RAM',
    GMC = 'GMC',
    Isuzu = 'Isuzu',
    Volkswagen = 'Volkswagen',
    Mitsubishi = 'Mitsubishi',
    Subaru = 'Subaru',
    Acura = 'Acura',
    Infiniti = 'Infiniti',
    Chery = 'Chery',
    Hummer = 'Hummer',
    Opel = 'Opel',
    Zeekr = 'Zeekr',
    Other = 'Other',

}
registerEnumType(CarBrand, {
    name: 'CarBrand',
});