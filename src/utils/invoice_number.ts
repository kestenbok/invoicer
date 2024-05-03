import data from "../data/data.json" with { type: "json" };

export function getInvoiceNumber() {
  return data.lastInvoiceNumber + 1;
}

export function formatInvoiceNumber(invoiceNumber: number) {
  // Bulgarian invoice #s need to be 10 digits long
  const digitsToFill = 10 - invoiceNumber.toString().length;
  return "0".repeat(digitsToFill) + `${invoiceNumber}`;
}

export function setInvoiceNumber(invoiceNumber: number) {
  Deno.writeTextFileSync(
    "./src/data/data.json",
    JSON.stringify({ ...data, lastInvoiceNumber: invoiceNumber }, null, 2),
  );
}
