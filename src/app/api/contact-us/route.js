import { mailOptions, transporter } from "../../../service/client";
import { replaceMergeTags, stripHTMLTags } from "../../../service/helper";

import { NextResponse } from "next/server";
import fs from "fs";
import path from "path";

export async function POST(request) {
  const data = await request.json();
  console.log("SERVER", data);

  // get html template
  const htmlFilePath = path.join(
    process.cwd(),
    "src/service",
    "contact-form.html"
  );

  let htmlContent = fs.readFileSync(
    htmlFilePath,
    "utf8",
    (err, htmlContent) => {
      if (err) {
        console.error("Error reading HTML file: ", err);
        return;
      }
    }
  );

  // replace merge tags with values
  htmlContent = replaceMergeTags(data, htmlContent);
  const plainTextContent = stripHTMLTags(htmlContent);

  try {
    await transporter.sendMail({
      ...mailOptions,
      subject: `New Contact Form Inquiry`,
      text: plainTextContent,
      html: htmlContent,
    });

    return NextResponse.json({ success: true });
  } catch (err) {
    console.error(err);
    return NextResponse.json({ error: err.message }, { status: err.status });
  }
}
