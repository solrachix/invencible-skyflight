import assert from "node:assert/strict";
import { readFileSync } from "node:fs";

const config = JSON.parse(
  readFileSync(new URL("../repo.config.json", import.meta.url), "utf8"),
);

assert.equal(config.project_name, "Invencible Skyflight");
assert.equal(config.type, "web");
assert.equal(
  config.template_url,
  "https://raw.githubusercontent.com/solrachix/invencible-skyflight/master/assets/screenshots/flight-sao-paulo.jpeg",
);
assert.equal(
  config.site_url,
  "https://solrachix.github.io/invencible-skyflight/?city=tk",
);
assert.match(config.description_pt, /Three\.js/i);
assert.ok(Array.isArray(config.links));
assert.ok(config.links.some((link) => link.label === "GitHub"));

console.log("Invencible repo config contract passed");
