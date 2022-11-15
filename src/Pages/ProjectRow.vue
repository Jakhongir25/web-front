<template>
    <!-- Projects start -->
    <section id="projects">
        <div class="container-fluid">
            <div class="row mb-5">
                <div class="col-md-8 mx-auto text-center">
                    <h6 class="text-primary">PROJECTS</h6>
                    <h1>Our Recent Work</h1>
                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book</p>
                </div>
            </div>
            <div class="row g-3">
                <div class="col-lg-4 col-sm-6">
                    <div class="project">
                        <img src="../assets/img/wb3.png" alt="">
                        <div class="overlay">
                            <div>
                                <h4 class="text-white">Lorem Ipsum</h4>
                                <h6 class="text-white">Lorem Ipsum is simply dummy text</h6>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-lg-4 col-sm-6">
                    <div class="project">
                        <img src="../assets/img/wb4.png" alt="">
                        <div class="overlay">
                            <div>
                                <h4 class="text-white">Lorem Ipsum</h4>
                                <h6 class="text-white">Lorem Ipsum is simply dummy text</h6>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-lg-4 col-sm-6">
                    <div class="project">
                        <img src="../assets/img/wb5.png" alt="">
                        <div class="overlay">
                            <div>
                                <h4 class="text-white">Lorem Ipsumh</h4>
                                <h6 class="text-white">Lorem Ipsum is simply dummy text</h6>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-lg-4 col-sm-6">
                    <div class="project">
                        <img src="../assets/img/wb6.png" alt="">
                        <div class="overlay">
                            <div>
                                <h4 class="text-white">Lorem Ipsum</h4>
                                <h6 class="text-white">Lorem Ipsum is simply dummy text</h6>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-lg-4 col-sm-6">
                    <div class="project">
                        <img src="../assets/img/wb7.png" alt="">
                        <div class="overlay">
                            <div>
                                <h4 class="text-white">Lorem Ipsum</h4>
                                <h6 class="text-white">Lorem Ipsum is simply dummy text</h6>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-lg-4 col-sm-6">
                    <div class="project">
                        <img src="../assets/img/wb8.png" alt="">
                        <div class="overlay">
                            <div>
                                <h4 class="text-white">Lorem Ipsum</h4>
                                <h6 class="text-white">Lorem Ipsum is simply dummy text</h6>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    <!-- Projects ends -->
</template>

<script>
export default {
    name: "ProjectRow"
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

.project {
    position: relative;
    overflow: hidden;
}

.project .overlay {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(21, 20, 51, 0.8);
    padding: 30px;
    display: flex;
    align-items: flex-end;
    transition: all 0.4s ease;
    opacity: 0;
}

.project img {
    transition: all 0.4s ease;
}

.project:hover .overlay {
    opacity: 1;
}

.project:hover img {
    transform: scale(1.1);
}

</style>