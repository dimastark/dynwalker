export default function (base, array) {
    return array.reduce(element => ({
        ...base[element.id],
        ...element
    }), {});
}
