import initModule from "./arithmetic.js";

let wasmModule;

const initializeWasm = async () => {
  const wasm = await initModule();
  wasmModule = wasm;
};

initializeWasm();

const calculate = (operation) => {
  const num1 = parseInt(document.getElementById("num1").value);
  const num2 = parseInt(document.getElementById("num2").value);
  let result;

  switch (operation) {
    case "add":
      result = wasmModule._add(num1, num2);
      break;
    case "subtract":
      result = wasmModule._subtract(num1, num2);
      break;
    case "multiply":
      result = wasmModule._multiply(num1, num2);
      break;
    case "divide":
      result = wasmModule._divide(num1, num2);
      break;
  }
  document.getElementById("result").textContent = `Result: ${result}`;
};

// Attach calculate function to the window object to make it globally accessible:
window.calculate = calculate;
