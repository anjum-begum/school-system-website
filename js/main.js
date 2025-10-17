document.getElementById("admissionForm").addEventListener("submit", function(e) {
  e.preventDefault();
  alert("Thank you for applying. Please prepare for your admission test. You will receive further information via email.");
  this.reset();
});
