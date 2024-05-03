import { Handlebars } from "../../dependencies.ts";

import config from "../config.ts";
import { formatDate, getLastDayOfMonth, getMiddleOfNextMonth } from "./date.ts";

export function generateInvoice(daysWorked: number, invoiceNumber: string) {
  const handlebars = new Handlebars();

  const billedDate = formatDate(getLastDayOfMonth());
  const dueDate = formatDate(getMiddleOfNextMonth());

  return handlebars.render("./src/invoice/invoice.hbs", {
    invoiceNumber,
    billedDate,
    dueDate,
    clientCompanyName: config.CLIENT_COMPANY_NAME,
    clientName: config.CLIENT_NAME,
    clientStreet: config.CLIENT_STREET,
    clientAddress: config.CLIENT_ADDRESS,
    ownName: config.OWN_NAME,
    UIC: config.UIC,
    IBAN: config.IBAN,
    BIC: config.BIC,
    bankName: config.BANK_NAME,
    total: daysWorked * config.DAILY_RATE,
    daysWorked,
    dailyRate: config.DAILY_RATE,
  });
}
