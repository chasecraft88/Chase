// filepath: /azerothcore-ui/azerothcore-ui/src/types/core.ts

export interface ServerConfig {
    host: string;
    port: number;
    username: string;
    password: string;
}

export interface User {
    id: number;
    username: string;
    role: string;
}

export interface GameObject {
    id: number;
    name: string;
    type: string;
    position: {
        x: number;
        y: number;
        z: number;
    };
}

export interface Mod {
    id: number;
    name: string;
    description: string;
    author: string;
    version: string;
}

export interface ConnectionStatus {
    isConnected: boolean;
    lastError?: string;
}