import { rollupOptions } from "./tools/rollup_options.js";

export default [
  rollupOptions({}),
  rollupOptions({ suffix: ".min", extraPlugins: [] }),
];
