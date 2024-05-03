import { puppeteer } from "../../dependencies.ts";
import { ensureDir } from "../../dependencies.ts";

import config from "../config.ts";
import { getYearAndMonth } from "./date.ts";

export async function generatePdf() {
  await ensureDir(config.INVOICE_PERSIST_DIR);

  const { year: CURRENT_YEAR, month: CURRENT_MONTH } = getYearAndMonth();
  const OWN_NAME_SNAKE_CASE = config.OWN_NAME.split(" ").join("_");

  const browser = await puppeteer.launch();
  const page = await browser.newPage();

  const invoicePath = await Deno.realPath("./src/invoice/invoice.html");

  await page.goto(`file://${invoicePath}`);
  await page.pdf({
    path: `${config.INVOICE_PERSIST_DIR}/${OWN_NAME_SNAKE_CASE}_Invoice_${CURRENT_MONTH}_${CURRENT_YEAR}.pdf`,
    format: "A4",
    margin: {
      top: "20px",
      right: "20px",
      bottom: "20px",
      left: "20px",
    },
  });
  await browser.close();
}
