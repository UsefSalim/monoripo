import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import checker from 'vite-plugin-checker';
import tsConfigPaths from 'vite-tsconfig-paths';
// https://vite.dev/config/
export default defineConfig({
    plugins: [
        react(),
        checker({
            typescript: true,
        }),
        tsConfigPaths(),
    ],
});
