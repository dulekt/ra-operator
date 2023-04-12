export function convertContentToList(user, content) {
    const contentArray = [`${user}`];
    content.forEach(item => {
        for (let i = 0; i < item.ammount; i++) {
            contentArray.push(item.text);
        }
    });

    console.log('Content array::');

    console.log(contentArray);

    return contentArray;
}
