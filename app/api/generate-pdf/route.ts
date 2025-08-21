import { NextRequest, NextResponse } from "next/server";
import puppeteer from "puppeteer";

export async function POST(req: NextRequest) {
  const { html } = await req.json();

  try {
    const googleFontCss = `
      <style>
        @import url('https://fonts.googleapis.com/css2?family=Tiro+Bangla:ital@0;1&display=swap');
        body, p, div, span, table, td {
          font-family: 'Tiro Bangla', serif;
          font-size: 14px;
          line-height: 1.8;
          margin: 0;
          padding: 5mm;
          background: #fff;
        }
      </style>
    `;

    const finalHtml = html.replace(/<head>/i, `<head>${googleFontCss}`);

    const browser = await puppeteer.launch({
      headless: true,
      args: [
        "--no-sandbox",
        "--disable-setuid-sandbox",
        "--font-render-hinting=none",
        "--enable-font-antialiasing",
      ],
    });

    const page = await browser.newPage();
    await page.setContent(finalHtml, { waitUntil: "networkidle0" });

    await page.evaluate(() => document.fonts.ready);
    await new Promise((r) => setTimeout(r, 1000));

    const size = await page.evaluate(() => {
      const width = document.querySelector('meta[name="pdf:width"]')?.getAttribute("content");
      const height = document.querySelector('meta[name="pdf:height"]')?.getAttribute("content");
      return { width, height };
    });

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const pdfOptions: any = {
      printBackground: true,
      margin: { top: "10mm", bottom: "10mm", left: "10mm", right: "10mm" },
    };

    if (size?.width && size?.height) {
      pdfOptions.width = size.width;
      pdfOptions.height = size.height;
    } else {
      pdfOptions.format = "A4";
    }

    const pdfBuffer = await page.pdf(pdfOptions);
    await browser.close();

    // ✅ TypeScript-safe Uint8Array conversion
    const pdfArray = new Uint8Array(pdfBuffer);

    return new NextResponse(pdfArray, {
      status: 200,
      headers: {
        "Content-Type": "application/pdf",
        "Content-Disposition": "inline; filename=document.pdf",
      },
    });
  } catch (err) {
    console.error("❌ PDF Generation Error:", err);
    return NextResponse.json({ error: "PDF generation failed" }, { status: 500 });
  }
}
