<template>
    <!-- Creator starts -->
    <section id="creator">
        <div class="container">
            <div class="row gy-4 align-items-center">
                <div class="col-lg-5">
                    <img src="../assets/img/wb9.png" alt="">
                </div>
                <div class="col-lg-5">
                    <h1>Creator</h1>
                    <h5>Jakhongirmirzo Makhammatjonov</h5>
                    <div class="divider my-4"></div>
                    <p>"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                    <p>"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                    <div class="social-icons">
                        <a href="#"><i class='bx bxl-facebook'></i></a>
                        <a href="#"><i class='bx bxl-linkedin'></i></a>
                        <a href="#"><i class='bx bxl-instagram-alt'></i></a>
                        <a href="#"><i class='bx bxl-github'></i></a>
                    </div>
                </div>
            </div>
        </div>
    </section>
    <!-- Creator ends -->
</template>

<script>
export default {
    name: "CreatorRow"
}
</script>

<style scoped>

:root {
    --primary: #0d6efd;
    --dark: #21252f;
    --body: #888;
    --box-shadow: 0 8px 22px rgba(0,0,0,0.1);
}

template {
    font-family: Sora, "sans-serif";
    line-height: 1.7;
    color: var(--body);
}

h1,h2,h3,h4,h5,h6,
.display-4 {
    color: var(--dark);
    font-weight: 700;
}

a {
    color: var(--dark);
    text-decoration: none;
}

img {
    width: 100%;
}



section {
    padding-top: 120px;
    padding-bottom: 120px;
}

.divider {
    width: 60px;
    height: 2px;
    display: block;
    background-color: var(--primary);
}

</style>