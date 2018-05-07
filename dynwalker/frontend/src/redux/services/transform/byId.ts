import { ByIdDictionary, WithId } from './';

export default function byId<T>(array: WithId<T>[]): ByIdDictionary<T> {
    const result = {};

    array.forEach(element => {
        result[element.id] = element;
    });

    return result;
}
