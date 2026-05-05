import { createDefaultPreset } from "ts-jest";

const tsJestTransformCfg = createDefaultPreset({ useESM: true }).transform;

/** @type {import("jest").Config} **/
export default {
    testEnvironment: "node",
    extensionsToTreatAsEsm: [".ts"],
    transform: {
        ...tsJestTransformCfg,
    },
    moduleNameMapper: {
        // Strip .js extensions from imports so Jest resolves .ts source files
        "^(\\.{1,2}/.*)\\.js$": "$1",
    },
    verbose: true,
};
