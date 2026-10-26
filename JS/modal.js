(() => {
    const openModalButtons =
        document.querySelectorAll("[data-modal-open]");

    const closeModalButton =
        document.querySelector("[data-modal-close]");

    const modal =
        document.querySelector("[data-modal]");


    if (!modal) {
        return;
    }


    openModalButtons.forEach((button) => {
        button.addEventListener("click", openModal);
    });


    if (closeModalButton) {
        closeModalButton.addEventListener("click", closeModal);
    }


    modal.addEventListener("click", (event) => {

        if (event.target === modal) {
            closeModal();
        }

    });


    document.addEventListener("keydown", (event) => {

        if (event.key === "Escape") {
            closeModal();
        }

    });


    function openModal() {

        modal.classList.remove("is-hidden");

        document.body.classList.add("no-scroll");

    }


    function closeModal() {

        modal.classList.add("is-hidden");

        document.body.classList.remove("no-scroll");

    }

})(); 
   



(() => {

    const openButton =
        document.querySelector(".mobile-menu-open");

    const mobileMenu =
        document.querySelector(".mobile-menu");

    const closeButton =
        document.querySelector(".mobile-menu-close");


    if (!openButton || !mobileMenu || !closeButton) {
        return;
    }


    openButton.addEventListener("click", () => {

        mobileMenu.classList.add("is-open");

        document.body.classList.add("no-scroll");

    });


    closeButton.addEventListener("click", () => {

        mobileMenu.classList.remove("is-open");

        document.body.classList.remove("no-scroll");

    });


    const mobileLinks =
        document.querySelectorAll(".mobile-nav-link");


    mobileLinks.forEach((link) => {

        link.addEventListener("click", () => {

            mobileMenu.classList.remove("is-open");

            document.body.classList.remove("no-scroll");

        });

    });


    document.addEventListener("keydown", (event) => {

        if (event.key === "Escape") {

            mobileMenu.classList.remove("is-open");

            document.body.classList.remove("no-scroll");

        }

    });

})();