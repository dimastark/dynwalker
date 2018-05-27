export default function (valueString: string, max: number, min: number) {
    max = max ? max : Number.MAX_VALUE;
    min = min ? min : Number.MIN_VALUE;

    const valueIsNatural = /^\+?(0|[1-9]\d*)$/.test(valueString);
    const valueInt = parseInt(valueString);

    return valueIsNatural && valueInt <= max && valueInt >= min;
};