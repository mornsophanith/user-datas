function validateInputNumber(value: string) : string {
    return value.replace(/[^A-Za-z@\s]/g, "");
}

function formatNumberToK(number: number = 0, decimalPlaces: number = 1): string {
    if (number < 1000) {
      return number.toString();
    } else {
      const formattedNumber: string = (number / 1000).toFixed(decimalPlaces);
      return `${formattedNumber}K`;
    }
}


export { validateInputNumber, formatNumberToK}