let items = [];

export const update = function Items(item, i) {
  if (i === 0 && item !== undefined) {
    console.log(i, "hi");
    items.push(item);
  } else if (i === 1) {
    const main = [];
    console.log(main);

    items.map((data) => {
      if (item !== data) {
        console.log(data);
        main.push(data);
      }
    });
    items = main;
    console.log(items);
  }

  return items;
};
