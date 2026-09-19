document.querySelectorAll(".project-image").forEach((project) => {

    project.addEventListener("click", (event) => {

        event.preventDefault();

        const rect = project.getBoundingClientRect();
        const url = project.href;

        project.style.position = "fixed";
        project.style.top = `${rect.top}px`;
        project.style.left = `${rect.left}px`;
        project.style.width = `${rect.width}px`;
        project.style.height = `${rect.height}px`;

        project.style.zIndex = "9999";

        requestAnimationFrame(() => {
            requestAnimationFrame(() => {

                project.style.top = "0px";
                project.style.left = "0px";
                project.style.width = "100vw";
                project.style.height = "100vh";
                project.style.borderRadius = "0";

            });
        });

        setTimeout(() => {

            window.open(url, "_blank");

            project.style.position = "";
            project.style.top = "";
            project.style.left = "";
            project.style.width = "";
            project.style.height = "";
            project.style.zIndex = "";
            project.style.borderRadius = "";

        }, 550);

    });

});