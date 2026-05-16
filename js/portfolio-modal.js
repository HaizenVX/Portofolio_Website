const modal = document.getElementById("portfolioModal");
const modalBody = document.getElementById("modalBody");
const modalClose = document.getElementById("modalClose");
const clickablePortfolioCards = document.querySelectorAll(".portfolio-card");

const amvVideos = [
  "assets/videos/amv-1.mp4",
  "assets/videos/amv-2.mp4",
  "assets/videos/amv-3.mp4"
];

let currentVideo = 0;

clickablePortfolioCards.forEach((card) => {
  card.addEventListener("click", () => {
    const action = card.dataset.action;

    if (action === "youtube") {
      window.open("https://youtu.be/jUFKlzO6R9Q?si=KUBl08vADYYobCuI", "_blank");
    }

    if (action === "tiktok") {
      window.open("https://www.tiktok.com/@siralt/video/7492813296987393298", "_blank");
    }

    if (action === "web") {
      window.location.href = "#home";
    }

    if (action === "video-editing") {
      currentVideo = 0;
      openVideoModal();
    }

    if (action === "thumbnail") {
      openImageModal("Thumbnail Design", [
        "assets/images/thumbnail-1.jpg",
        "assets/images/thumbnail-2.jpg"
      ]);
    }

    if (action === "poster") {
      openImageModal("Poster Design", [
        "assets/images/poster-1.jpeg"
      ]);
    }
  });
});

function openVideoModal() {
  modalBody.innerHTML = `
    <h2>Video Editing</h2>

    <video controls autoplay class="modal-video">
      <source src="${amvVideos[currentVideo]}" type="video/mp4">
      Browser kamu tidak mendukung video.
    </video>

    <button class="btn btn-primary" id="nextVideo">Next Video</button>
  `;

  modal.classList.add("show");

  document.getElementById("nextVideo").addEventListener("click", () => {
    currentVideo = (currentVideo + 1) % amvVideos.length;
    openVideoModal();
  });
}

function openImageModal(title, images) {
  const galleryItems = images
    .map((image) => `<img src="${image}" alt="${title}">`)
    .join("");

  modalBody.innerHTML = `
    <h2>${title}</h2>
    <div class="modal-gallery">
      ${galleryItems}
    </div>
  `;

  modal.classList.add("show");
}

modalClose?.addEventListener("click", closeModal);

modal?.addEventListener("click", (event) => {
  if (event.target === modal) {
    closeModal();
  }
});

function closeModal() {
  modal.classList.remove("show");
  modalBody.innerHTML = "";
}
