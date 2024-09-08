import { dateManager } from "../src/function/dateManager";
import dayjs from "dayjs";

const format = "YYYY-MM-DD HH:mm:ss"

const convert = () => {
  const unix = 1725770310
  console.log(new dateManager().unixToDbDate(unix))
}

convert()
