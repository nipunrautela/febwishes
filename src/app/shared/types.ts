import { Component } from "@angular/core";

export type Components = {
    [name: string]: {
        type: string;
        ngComponent: Component;
    };
};

export type Setup = {
    id: number;
    name: string;
    components: string[];
};


