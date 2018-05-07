import request from '../request';

import { WithId } from '../transform';

interface Entity {
    color: string
    coordinates: [number, number]
}

export enum Shape {
    Circle = 'circle',
    Rectangle = 'rectangle'
}

interface Circle extends Entity {
    shape: Shape.Circle,
    dimensions: [number]
}

interface Rectangle extends Entity {
    shape: Shape.Rectangle,
    dimensions: [number, number]
}

export enum Species {
    Interrupter = 'interrupter',
    Walker = 'walker'
}

interface Agent {
    type: Species
}

export type StaticEntity = Circle | Rectangle;
export type DynamicEntity = WithId<Agent>;

export interface Area {
    size: {
        width: number,
        height: number
    },
    dynamics: DynamicEntity[],
    statics: StaticEntity[]
}

export default {
    get(): Promise<Area> {
        return request<Area>('area');
    }
}
