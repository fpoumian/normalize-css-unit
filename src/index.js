import isNumber from 'lodash.isnumber';
import isString from 'lodash.isstring';

export default function normalizeCSSUnit(unitValue) {
  if (!isNumber(unitValue) && !isString(unitValue)) {
    throw new TypeError(
      `You need to pass a number or a string as an argument. ${unitValue
        .constructor.name} provided.`
    );
  }
  return isNumber(unitValue) ? `${unitValue}px` : unitValue.trim();
}
