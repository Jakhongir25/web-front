<template>
    <!-- Service starts -->
    <section id="services">
        <div class="container">
            <div class="row mb-5">
                <div class="col-md-8 mx-auto text-center">
                    <h6 class="text-primary">SERVICES</h6>
                    <h1>Our Services</h1>
                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book</p>
                </div>
            </div>
            <div class="row g-4">
                <div class="col-lg-4 col-sm-6">
                    <div class="service card-effect">
                        <div class="iconbox">
                            <i class='bx bxl-php'></i>
                        </div>
                        <h5 class="mt-4 mb-2">PHP</h5>
                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s</p>
                    </div>
                </div>
                <div class="col-lg-4 col-sm-6">
                    <div class="service card-effect">
                        <div class="iconbox">
                            <i class='bx bxl-vuejs'></i>
                        </div>
                        <h5 class="mt-4 mb-2">Vuejs</h5>
                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s</p>
                    </div>
                </div>
                <div class="col-lg-4 col-sm-6">
                    <div class="service card-effect">
                        <div class="iconbox">
                            <i class='bx bxl-mongodb'></i>
                        </div>
                        <h5 class="mt-4 mb-2">MongoDB</h5>
                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s</p>
                    </div>
                </div>
                <div class="col-lg-4 col-sm-6">
                    <div class="service card-effect">
                        <div class="iconbox">
                            <i class='bx bxs-heart'></i>
                        </div>
                        <h5 class="mt-4 mb-2">Programming</h5>
                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s</p>
                    </div>
                </div><div class="col-lg-4 col-sm-6">
                <div class="service card-effect">
                    <div class="iconbox">
                        <i class='bx bxs-rocket'></i>
                    </div>
                    <h5 class="mt-4 mb-2">Theme Design</h5>
                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s</p>
                </div>
            </div>
                <div class="col-lg-4 col-sm-6">
                    <div class="service card-effect">
                        <div class="iconbox">
                            <i class='bx bxs-cog'></i>
                        </div>
                        <h5 class="mt-4 mb-2">Service</h5>
                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s</p>
                    </div>
                </div>
            </div>
        </div>
    </section>
    <!-- Service ends -->
</template>

<script>
export default {
    name: "ServiceRow"
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

.card-effect {
    box-shadow: var(--box-shadow);
    background-color: #fff;
    padding: 25px;
    transition: all 0.35s ease;
}

.card-effect:hover {
    box-shadow: none;
    transform: translateY(5px);
}

.iconbox {
    width: 54px;
    height: 54px;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: var(--primary);
    color: rgba(21, 20, 51, 0.8);
    font-size: 32px;
    border-radius: 100px;
    flex: none;
}

.service {
    position: relative;
    z-index: 2;
    overflow: hidden;
}

.service::after {
    content: "";
    width: 100%;
    height: 100%;
    position: absolute;
    top: -100%;
    left: 0;
    background-color: rgba(21, 20, 51, 0.8);
    z-index: -1;
    opacity: 0;
    transition: all 0.4s ease;
}

.service:hover .iconbox {
    background-color: rgba(21, 20, 51, 0.8);
    color: var(--primary);
}

.service:hover h5,
.service:hover p {
    color: #fff;
}

.service:hover::after {
    opacity: 1;
    top: 0;
}

</style>