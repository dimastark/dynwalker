import allIds from './allIds';
import byId from './byId';
import byIdMerge from './byIdMerge';

export type WithId<T> = { id: number } & T;

export interface ByIdDictionary<T> {
    [id: number]: WithId<T>
}

export default {
    allIds,
    byId,
    byIdMerge
}
