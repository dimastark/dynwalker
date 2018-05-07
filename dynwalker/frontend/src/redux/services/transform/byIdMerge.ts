import { ByIdDictionary, WithId } from './index';

export default function byIdMerge<T>(base: ByIdDictionary<T>, array: WithId<T>[]): ByIdDictionary<T> {
    const result = { ...base };

    array.forEach(element => {
        result[element.id] = element;
    });

    return result;
}
