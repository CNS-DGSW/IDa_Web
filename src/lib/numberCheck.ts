const numberCheck = (input: string, min?: number, max?: number): number => {
  let num = input || "0";
  let result = parseFloat(num);

  if (num !== "0" && !num.includes(".")) {
    num = num.replace(/^0+/, "");
    result = parseInt(num);
  } else {
    result = parseFloat(num);
  }

  if (max !== undefined && parseFloat(num) > max) {
    return max;
  }

  if (min !== undefined && parseFloat(num) < min) {
    return min;
  }

  return isNaN(result) ? min || 0 : result;
};

export default numberCheck;
