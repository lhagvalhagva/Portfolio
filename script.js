
  const form = document.querySelector(".contact-form");
  const toast = document.getElementById("toast");

  form.addEventListener("submit", async function (e) {
    e.preventDefault(); // хуудсыг дахин ачааллуулахгүй

    const formData = new FormData(form);

    try {
      const response = await fetch("https://formsubmit.co/ajax/lhagvabatulzii@gmail.com", {
        method: "POST",
        headers: {
          "Accept": "application/json"
        },
        body: formData
      });

      if (response.ok) {
        form.reset(); // формыг цэвэрлэнэ
        toast.classList.add("show");
        setTimeout(() => toast.classList.remove("show"), 3000);
      } else {
        alert("Something went wrong. Please try again.");
      }
    } catch (error) {
      alert("Failed to send. Please check your internet connection.");
    }
  });

