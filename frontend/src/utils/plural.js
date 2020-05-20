export default function plural(s) {
    return s.endsWith('s') ? s : s + 's'
}
