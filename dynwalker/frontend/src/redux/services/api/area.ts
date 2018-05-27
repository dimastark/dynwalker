import request from '../request';

import { WithId } from '../transform';

export enum Species {
    Interrupter = 'interrupter',
    Walker = 'walker'
}

interface Agent {
    type: Species
}

export interface StaticEntity {
    x: number,
    y: number
}

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
