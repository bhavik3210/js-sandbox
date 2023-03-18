export const log = (output) => {
  console.log(`%c${output} \n`, "color:white");
};

export const h1 = (h1) => {
  console.log("\n");
  console.log(`%c${"=".repeat(20)} ${h1} ${"=".repeat(20)}`, "color:red");
};

export const h2 = (h2) => {
  console.log(`%c${"-".repeat(5)} ${h2}  ${"-".repeat(5)}`, "color:yellow");
};
