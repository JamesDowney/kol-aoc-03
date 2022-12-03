import { bufferToFile, fileToBuffer, print } from "kolmafia";

export default function main(): void {
  const input = fileToBuffer("input.txt").trim().split(/\n/g);

  let count1 = 0;
  input
    .map((element) => [element.slice(0, element.length / 2), element.slice(element.length / 2)])
    .forEach((element) => {
      let found = "";
      let i = element[0].length;
      while (found === "" && i--) {
        if (element[1].includes(element[0][i])) {
          found = element[0][i];
        }
      }
      if (found.charCodeAt(0) < 97) {
        count1 += found.charCodeAt(0) - 38;
      } else {
        count1 += found.charCodeAt(0) - 96;
      }
    });

  let count2 = 0;
  for (let i = 0; i < input.length; i += 3) {
    let found = "";
    let j = input[i].length - 1;
    while (found === "" && j--) {
      if (input[i + 1].includes(input[i][j]) && input[i + 2].includes(input[i][j])) {
        found = input[i][j];
      }
    }
    if (found.charCodeAt(0) < 97) {
      count2 += found.charCodeAt(0) - 38;
    } else {
      count2 += found.charCodeAt(0) - 96;
    }
  }

  print("solution 1 is: " + count1);
  print("solution 2 is: " + count2);
}
