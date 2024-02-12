#!/usr/bin/env node
"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const rbx = __importStar(require("noblox.js"));
const args = process.argv.slice(2);
const generate = (length, amount) => {
    if ((length < 3) || (length > 20)) {
        return new Array(0);
    }
    const characters = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890_";
    const result = new Array();
    for (let i = 0; i < amount; i++) {
        let text = "";
        for (let j = 0; j < length; j++) {
            const char = characters.charAt(Math.floor(Math.random() * characters.length));
            if (j === 0 && char === "_") {
                j--;
                continue;
            }
            text += char;
        }
        result.push(text);
    }
    return result;
};
setTimeout(() => __awaiter(void 0, void 0, void 0, function* () {
    const filtered = new Array();
    while (filtered.length === 0) {
        const unfiltered = generate(parseInt(args[0]), parseInt(args[1]));
        //console.log(unfiltered);
        const ids = yield rbx.getIdFromUsername(unfiltered);
        //console.log(ids);
        unfiltered.map((name) => __awaiter(void 0, void 0, void 0, function* () {
            const id = ids[unfiltered.indexOf(name)];
            if (id)
                return;
            filtered.push(name);
        }));
    }
    console.log(filtered);
}), 5000);
