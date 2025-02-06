import { Component } from "@angular/core";

export type Components = {
    [name: string]: [angularComponent: Component];
};

export type Setup = {
    id: number;
    name: string;
    components: string[];
};


