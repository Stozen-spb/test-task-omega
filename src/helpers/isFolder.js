export default function (object) {
    if (Array.isArray(object) || (typeof object == 'object' && object !== null))
        return true;
    return false;
}
