const devideBtn = document.getElementById("devide-click");
devideBtn.addEventListener("click", () => {
  const firstNumber = document.getElementById("first-number").value;
  const secondNumber = document.getElementById("second-number").value;
  try {
    let result = devide(Number(firstNumber), Number(secondNumber));
    document.getElementById("result").innerHTML = result;
  } catch (error) {
    alert("Error: " + error);
  }
  console.log("hello world !");
});
