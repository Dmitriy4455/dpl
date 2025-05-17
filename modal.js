const modal = document.getElementById("modal");
const modalTitle = document.getElementById("modal-title");
const modalText = document.getElementById("modal-text");

const serviceInfo = {
  Leaks:
    "We detect and fix leaking pipes, taps, joints, and water tanks quickly to prevent further damage. Our services include leak detection, pipe repairs, tap replacements, joint sealing, and water tank maintenance. Fast and reliable solutions to keep your property dry and safe.",
  Plumbing:
    "We handle all general plumbing needs with expert care. Key services include tap and toilet repairs or replacements, fixing sinks, basins, baths, and showers, unblocking drains and waste pipes, repairing leaks and faulty pipe joints, and installing new plumbing fixtures. Whether it’s a small repair or a full installation, we provide reliable, high-quality work you can trust.",
  Heating:
    "We install and repair radiators, thermostatic valves, and ensure efficient heating systems. Our services cover radiator installation, relocation, valve replacement, balancing, and system maintenance to keep your home warm and comfortable.",
  Pipefitting:
    "Expert commercial and domestic pipefitting, combining precise layout planning with flawless installation. From custom pipework to replacements, delivering reliable, high-quality solutions tailored to your specific needs.",
};

function openModal(service) {
  modalTitle.innerText = service;
  modalText.innerText = serviceInfo[service];
  modal.classList.remove("hidden");
}

function closeModal() {
  modal.classList.add("hidden");
}

// Добавляем обработчики клика для карточек
document.querySelectorAll(".card").forEach((card) => {
  card.addEventListener("click", () => {
    const service = card.querySelector("h3").innerText;
    openModal(service);
  });
});
