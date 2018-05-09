import request from '../request';

import { WithId } from '../transform';

interface Entity {
    color: string
    x: number,
    y: number
}

export enum Shape {
    Circle = 'circle',
    Rectangle = 'rectangle'
}

interface Circle extends Entity {
    shape: Shape.Circle,
    radius: number
}

interface Rectangle extends Entity {
    shape: Shape.Rectangle,
    width: number,
    height: number
}

export enum Species {
    Interrupter = 'interrupter',
    Walker = 'walker'
}

interface Agent {
    type: Species
}

export type StaticEntity = Circle | Rectangle;
export type DynamicEntity = StaticEntity & WithId<Agent>;

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
