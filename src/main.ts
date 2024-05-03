import { open } from "../dependencies.ts";

import { getYearAndMonth } from "./utils/date.ts";
import { generateInvoice } from "./utils/invoice.ts";
import { generatePdf } from "./utils/pdf.ts";
import {
  formatInvoiceNumber,
  getInvoiceNumber,
  setInvoiceNumber,
} from "./utils/invoice_number.ts";

const { month } = getYearAndMonth();

if (import.meta.main) {
  const DAYS_WORKED = +prompt(`Number of working days for ${month}:`)!;
  const invoiceNumber = getInvoiceNumber();

  const invoice = await generateInvoice(
    DAYS_WORKED,
    formatInvoiceNumber(invoiceNumber)
  );

  await Deno.writeTextFile("./src/invoice/invoice.html", invoice);
  await open("./src/invoice/invoice.html");

  const shouldSave = confirm("Save the invoice:");

  if (shouldSave) {
    await generatePdf();
    setInvoiceNumber(invoiceNumber);
    console.log("Invoice has been saved.");
  }

  await Deno.remove("./src/invoice/invoice.html");
}
