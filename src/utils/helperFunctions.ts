import { ArrestData } from "../pages/interfaces/interfaces";

export function valueCount(
  arrestData: ArrestData[],
  type: keyof ArrestData
): { [key: string]: number } {
  const types: { [key: string]: number } = {};

  for (let i = 0; i < arrestData.length; i++) {
    const record: string = String(arrestData[i][type]);
    if (!types[record]) {
      types[record] = 1;
    } else {
      types[record] += 1;
    }
  }
  return types;
}
