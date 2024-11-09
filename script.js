import $ from "jquery";
import { getH, getM, getS } from "./helpers";

$(window).on("load", () => {
  const clock = $("#clock");

  setInterval(() => {
    const now = new Date();
    const h = getH(now);
    const m = getM(now);
    const s = getS(now);
    const time = `${h}:${m}:${s}`;
    clock.text(time);
  }, 1000);
});
