import { createJapaneseTime } from "../src/function";

const date = "2024-09-07 17:08:09.936"
console.log(new createJapaneseTime().convertForeignTimeToJapanese(date))