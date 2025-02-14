import { registerEnumType } from "@nestjs/graphql";

export enum ProductType {
    Accessories = 'Accessories',
    BodyKit = 'BodyKit',
    Interior = 'Interior',
    Exterior = 'Exterior',
    Sound = 'Sound',
    Fuel = 'Fuel',
    Wheels = 'Wheels',
    Tires = 'Tires',
    Oil = 'Oil',
    Filters = 'Filters',
    Lighting = 'Lighting',
    Brake = 'Brake',
    Suspension = 'Suspension',
    Battery = 'Battery',
    Engine = 'Engine',
    Cooling = 'Cooling',
    Air = 'Air',
    Transmission = 'Transmission',
    Care = 'Care',
    Electronics = 'Electronics',
    Navigation = 'Navigation',
    Seat = 'Seat',
    Floor = 'Floor',
    Roof = 'Roof',
    Towing = 'Towing',
    Performance = 'Performance',
    Tools = 'Tools',
    Safety = 'Safety',
    Stickers = 'Stickers',
    Other = 'Other',

}
registerEnumType(ProductType, {
    name: 'ProductType',
});

export enum ProductStatus {
    ACTIVE = 'ACTIVE',
    SOLD = 'SOLD',
    DELETE = 'DELETE',
}
registerEnumType(ProductStatus, {
    name: 'ProductStatus',
});