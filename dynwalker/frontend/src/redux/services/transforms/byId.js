export default function (array) {
    return array.reduce(element => ({
        [element.id]: element
    }), {});
}
