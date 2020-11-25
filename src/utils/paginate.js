import _ from 'lodash'; // for pagination

export function paginate(items, pageNumber, pageSize) {
  // pagination on client side
  const startIndex = (pageNumber - 1) * pageSize;

  return _(items).slice(startIndex).take(pageSize).value();
}
