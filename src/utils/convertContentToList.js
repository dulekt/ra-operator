export function convertContentToList(content) {
    return content
        .map(item => [...new Array(item.ammount)
        .fill(item.text)
        .filter(Boolean)])
        .filter(item => item.length)
        .flat()
}