import { helper } from '@ember/component/helper';

export function capitalize(input) {
  let words = input.toString().split(/\s+/).map((word) => {
    return word.toLowerCase().capitalize();
  });

  return words.join(' ');
}

export default helper(capitalize);
