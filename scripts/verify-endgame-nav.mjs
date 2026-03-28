/**
 * Headless check: prematch → auton → teleop → endgame via Next buttons.
 * Run: python3 -m http.server 8899 --bind 127.0.0.1 (from repo root)
 *      node scripts/verify-endgame-nav.mjs
 * Or:  npx -y -p playwright@1.49.1 node scripts/verify-endgame-nav.mjs
 */
import { chromium } from "playwright";

const base = process.env.SCOUT_BASE || "http://127.0.0.1:8899/index.html";

const errors = [];
const browser = await chromium.launch({ headless: true });
const page = await browser.newPage();
page.on("pageerror", (e) => errors.push(`pageerror: ${e.message}`));
page.on("console", (msg) => {
  if (msg.type() === "error") errors.push(`console: ${msg.text()}`);
});

await page.goto(base, { waitUntil: "load", timeout: 60000 });
await page.waitForFunction(() => typeof window.swipePage === "function", null, {
  timeout: 30000,
});

await page.evaluate(() => {
  document.getElementById("input_s").value = "AB";
  document.getElementById("input_m").value = "1";
  const r1 = document.querySelector('input[name="r"][value="r1"]');
  if (r1) r1.click();
  const asIn = document.getElementById("input_as");
  if (asIn) asIn.value = "[[1,1]]";
});

await page.click("#nextButton1");
await page.click("#nextButton3");
await page.click("#nextButton5");

const { endgameDisplay, slide } = await page.evaluate(() => ({
  endgameDisplay: document.getElementById("endgame")?.style?.display,
  slide: window.slide,
}));

await browser.close();

const ok = endgameDisplay === "table" && slide === 3;
console.log(
  JSON.stringify(
    {
      ok,
      endgameDisplay,
      slide,
      expectedSlide: 3,
      errors,
    },
    null,
    2,
  ),
);

process.exit(ok && errors.length === 0 ? 0 : 1);
