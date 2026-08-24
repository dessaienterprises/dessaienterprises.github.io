const form = document.getElementById("quoteForm");
form.addEventListener("submit", (event) => {
  event.preventDefault();
  const name = document.getElementById("name").value.trim();
  const phone = document.getElementById("phone").value.trim();
  const service = document.getElementById("service").value;
  const message = document.getElementById("message").value.trim();

  const text =
    `Hello Dessai Enterprises,%0A%0A` +
    `I would like a quotation.%0A%0A` +
    `Name: ${encodeURIComponent(name)}%0A` +
    `Phone: ${encodeURIComponent(phone)}%0A` +
    `Service: ${encodeURIComponent(service)}%0A` +
    `Requirement: ${encodeURIComponent(message || "Not provided")}`;

  window.open(`https://wa.me/919764170176?text=${text}`, "_blank");
});
