import { WithId } from "./index";

export default function allIds<T>(array: WithId<T>[]): number[] {
    return array.map(element => element.id);
}
