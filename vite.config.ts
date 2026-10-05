import tailwindcss from "@tailwindcss/vite";
import { devtools } from "@tanstack/devtools-vite";
import { tanstackStart } from "@tanstack/react-start/plugin/vite";
import viteReact from "@vitejs/plugin-react";
import { nitro } from "nitro/vite";
import { createLogger, defineConfig } from "vite";

const logger = createLogger();
const originalWarn = logger.warn;

const ignorePatterns = ["[MODULE_LEVEL_DIRECTIVE]", "codeSplitting.groups"];

logger.warn = (msg, options) => {
	if (ignorePatterns.some((pattern) => msg.includes(pattern))) return;
	originalWarn(msg, options);
};

export default defineConfig({
	resolve: { tsconfigPaths: true },
	plugins: [devtools(), nitro(), tailwindcss(), tanstackStart(), viteReact()],
	customLogger: logger,
});
