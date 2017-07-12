export default function filterBySize(filterSize) {
  return function (element) {
    return element.size.indexOf(filterSize) !== -1;
  };
}
