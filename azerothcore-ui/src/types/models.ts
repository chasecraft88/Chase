// filepath: /azerothcore-ui/azerothcore-ui/src/types/models.ts

export interface Model {
    id: number;
    name: string;
    filePath: string;
    animations: Animation[];
}

export interface Animation {
    id: number;
    name: string;
    duration: number;
    loop: boolean;
}

export interface ModelMetadata {
    model: Model;
    description: string;
    createdAt: Date;
    updatedAt: Date;
}