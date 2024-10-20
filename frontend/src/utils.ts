export async function quickSort<T>(
  arr: T[],
  compare: (a: T, b: T) => Promise<boolean>
): Promise<T[]> {
  if (arr.length <= 1) {
    return arr;
  }

  const pivot = arr[Math.floor(arr.length / 2)];
  const left = [];
  const right = [];

  for (let i = 0; i < arr.length; i++) {
    if (i === Math.floor(arr.length / 2)) continue;
    if (await compare(arr[i], pivot)) {
      left.push(arr[i]);
    } else {
      right.push(arr[i]);
    }
  }

  return [
    ...(await quickSort(left, compare)),
    pivot,
    ...(await quickSort(right, compare)),
  ];
}
