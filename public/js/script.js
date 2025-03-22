document.getElementById("carForm").addEventListener("submit", async (e) => {
  e.preventDefault();

  const fileInput = document.getElementById("carImage");
  const image = fileInput.files[0];

  if (!image) {
    alert("Încarcă o poză cu mașina!");
    return;
  }

  const formData = new FormData();
  formData.append("image", image);

  document.getElementById("emptyState").classList.add("hidden");
  document.getElementById("resultContent").classList.add("hidden");
  document.getElementById("loadingState").classList.remove("hidden");

  try {
    const response = await fetch("/analyze", {
      method: "POST",
      body: formData,
    });

    const data = await response.json();

    if (data.description) {
      document.getElementById("adTitle").textContent = "ANUNȚ GENERAT";
      document.getElementById("adText").textContent = data.description;

      document.getElementById("loadingState").classList.add("hidden");
      document.getElementById("resultContent").classList.remove("hidden");
    } else {
      throw new Error("Fără descriere returnată!");
    }
  } catch (error) {
    document.getElementById("loadingState").classList.add("hidden");
    alert("Eroare la generarea anunțului! Verifică consola pentru detalii.");
    console.error(error);
  }
});

// Optional: preview image
document.getElementById("carImage").addEventListener("change", function () {
  const file = this.files[0];
  const preview = document.getElementById("previewImg");
  const container = document.getElementById("imagePreview");
  const placeholder = document.getElementById("uploadPlaceholder");

  if (file) {
    preview.src = URL.createObjectURL(file);
    container.classList.remove("hidden");
    placeholder.classList.add("hidden");
  }
});

document.getElementById("removeImage").addEventListener("click", () => {
  const input = document.getElementById("carImage");
  input.value = "";
  document.getElementById("imagePreview").classList.add("hidden");
  document.getElementById("uploadPlaceholder").classList.remove("hidden");
});
