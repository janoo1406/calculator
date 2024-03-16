const collectButton = document.getElementById('sample-button');
collectButton.addEventListener('click', async (event) => {
  let txtField = document.getElementById("sample-text");
  txtField.value = "Updated content!";
});