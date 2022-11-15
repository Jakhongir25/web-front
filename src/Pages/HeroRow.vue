<template>
    <div class="hero vh-100 d-flex align-items-center" id="home">
        <div class="container">
            <div class="row">
                <div class="col-lg-7 mx-auto text-center">
                    <h1 class="display-4 text-white">Lorem Ipsum is simply dummy text</h1>
                    <p class="text-white my-3">Lorem Ipsum has been the industry's standard dummy text ever since the
                        1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen
                        book. It has survived not only five centuries, but also the leap into electronic typesetting,
                        remaining essentially unchanged</p>
                    <router-link to="/contact" class="btn me-2 btn-primary">Contact</router-link>
                    <router-link to="/creator" class="btn btn-outline-light">Creator</router-link>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "HeroRow"
}
</script>

<style scoped>

:root {
    --primary: #0d6efd;
    --dark: #21252f;
    --body: #888;
    --box-shadow: 0 8px 22px rgba(0, 0, 0, 0.1);
}

template {
    font-family: Sora, "sans-serif";
    line-height: 1.7;
    color: var(--body);
}

h1, h2, h3, h4, h5, h6,
.display-4 {
    color: var(--dark);
    font-weight: 700;
}

a {
    color: var(--dark);
    text-decoration: none;
}

.hero {
    background-image: url(../assets/img/wb.png);
    background-position: center;
    background-size: cover;
    background-attachment: fixed;
    position: relative;
    z-index: 2;
}

.hero::after {
    content: "";
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
    background-color: rgba(21, 20, 51, 0.8);
    z-index: -1;
}

</style>