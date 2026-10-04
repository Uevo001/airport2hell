import { defineConfig } from "cf/config";
import * as entrypoint from "./_worker.js" with { type: "cf-worker" };

export default defineConfig({
	worker: {
		name: "airport2hell",
		compatibilityDate: "2026-09-25",
		entrypoint,
	},
});
