// This file exports TypeScript types and interfaces used throughout the application.

export interface Config {
    key: string;
    value: string;
}

export interface Log {
    timestamp: string;
    message: string;
}

export interface Table {
    name: string;
    data: any[];
}

export interface UserCredentials {
    username: string;
    password: string;
}