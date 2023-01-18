/*export function convertContentToList(content) {
    return content
        .map(item => [...new Array(item.ammount)
        .fill(item.text)
        .filter(Boolean)])
        .filter(item => item.length)
        .flat()
}*/
//function takes object and returns array of strings
//
//input: [{text: 'hello', ammount: 2}, {text: 'world', ammount: 1}]
//output: ['hello', 'hello', 'world']
//

export function convertContentToList(content) {
  const contentArray = [];
  content.forEach((item) => {
    for (let i = 0; i < item.ammount; i++) {
      contentArray.push(item.text);
    }
  });
  console.log("Content array::");
  console.log(contentArray);
  return contentArray;
}
