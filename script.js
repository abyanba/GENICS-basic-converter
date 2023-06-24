// initial reference
let decInp = document.getElementById("dec-inp");
let binInp = document.getElementById("bin-inp");
let octInp = document.getElementById("oct-inp");
let hexInp = document.getElementById("hex-inp");
let errorMsg = document.getElementById("error-msg");

// decimal to any
decInp.addEventListener("input", () => {
    let decValue = decInp.value;
    if (decValidator(decValue)) {
        binInp.value = parseInt(decValue, 10).toString(2);
        octInp.value = parseInt(decValue, 10).toString(8);
        hexInp.value = parseInt(decValue, 10).toString(16);
        errorMsg.textContent = "";
    } else if (decInp.value === "") {
        binInp.value = "";
        octInp.value = "";
        hexInp.value = "";
        errorMsg.textContent = "";
    } else {
        binInp.value = "";
        octInp.value = "";
        hexInp.value = "";
        errorMsg.textContent = "Invalid Decimal Input";
    }
  });
  
  // binary to any
  binInp.addEventListener("input", () => {
    let binValue = binInp.value;
    if (binValidator(binValue)) {
        decInp.value = parseInt(binValue, 2);
        octInp.value = parseInt(binValue, 2).toString(8);
        hexInp.value = parseInt(binValue, 2).toString(16);
        errorMsg.textContent = "";
    } else if (binInp.value === "") {
        decInp.value = "";
        octInp.value = "";
        hexInp.value = "";
        errorMsg.textContent = "";
    } else {
        decInp.value = "";
        octInp.value = "";
        hexInp.value = "";
        errorMsg.textContent = "Invalid Binary Input";
    }
  });
  
  // octal to any
  octInp.addEventListener("input", () => {
    let octValue = octInp.value;
    if (octValidator(octValue)) {
        decInp.value = parseInt(octValue, 8);
        binInp.value = parseInt(octValue, 8).toString(2);
        hexInp.value = parseInt(octValue, 8).toString(16);
        errorMsg.textContent = "";
    } else if (octInp.value === "") {
        decInp.value = "";
        binInp.value = "";
        hexInp.value = "";
        errorMsg.textContent = "";
    } else {
        decInp.value = "";
        binInp.value = "";
        hexInp.value = "";
        errorMsg.textContent = "Invalid Octal Input";
    }
  });
  
  // hex to any
  hexInp.addEventListener("input", () => {
    let hexValue = hexInp.value;
    if (hexValidator(hexValue)) {
        decInp.value = parseInt(hexValue, 16);
        binInp.value = parseInt(hexValue, 16).toString(2);
        octInp.value = parseInt(hexValue, 16).toString(8);
        errorMsg.textContent = "";
    } else if (hexInp.value === "") {
        decInp.value = "";
        binInp.value = "";
        octInp.value = "";
        errorMsg.textContent = "";
    } else {
        decInp.value = "";
        binInp.value = "";
        octInp.value = "";
        errorMsg.textContent = "Invalid Hexadecimal Input";
    }
  });
  

// check decimal input
function decValidator(num) {
    return /^-?\d*\.?\d+$/.test(num);
}

// check binary input
function binValidator(num) {
    for (let i = 0; i < num.length; i++) {
        if (num[i] != "0" && num[i] != "1") {
            return false;
        }
    }
    return true;
}

// check octal input
function octValidator(num) {
    for (let i = 0; i < num.length; i++) {
        if (!/[0-7]/.test(num[i])) {
            return false;
        }
    }
    return true;
}

// check hex input
function hexValidator(num) {
    const hexPattern = /^[0-9A-Fa-f]+$/;
    return hexPattern.test(num);
}
