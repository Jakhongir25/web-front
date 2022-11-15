<template>
    <!-- Blog starts -->
    <section id="blog" class="bg-light">
        <div class="container">
            <div class="row mb-5">
                <div class="col-md-8 mx-auto text-center">
                    <h6 class="text-primary">BLOG</h6>
                    <h1>Lastest News From The Blog</h1>
                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book</p>
                </div>
            </div>
            <div class="row g-3">
                <div class="col-md-4">
                    <div class="blog-post card-effect">
                        <img src="../assets/img/wb17.png" alt="">
                        <h5 class="mt-4"><a href="">Lorem Ipsum is simply dummy text</a></h5>
                        <p>the printing and typesetting the printing and typesetting industry. Lorem Ipsum has been the industry's standard</p>
                    </div>
                </div>
                <div class="col-md-4">
                    <div class="blog-post card-effect">
                        <img src="../assets/img/wb18.png" alt="">
                        <h5 class="mt-4"><a href="">Lorem Ipsum is simply dummy text</a></h5>
                        <p>the printing and typesetting the printing and typesetting industry. Lorem Ipsum has been the industry's standard</p>
                    </div>
                </div>
                <div class="col-md-4">
                    <div class="blog-post card-effect">
                        <img src="../assets/img/wb19.png" alt="">
                        <h5 class="mt-4"><a href="">Lorem Ipsum is simply dummy text</a></h5>
                        <p>the printing and typesetting the printing and typesetting industry. Lorem Ipsum has been the industry's standard</p>
                    </div>
                </div>
                <div class="col-md-4">
                    <div class="blog-post card-effect">
                        <img src="../assets/img/wb20.png" alt="">
                        <h5 class="mt-4"><a href="">Lorem Ipsum is simply dummy text</a></h5>
                        <p>the printing and typesetting the printing and typesetting industry. Lorem Ipsum has been the industry's standard</p>
                    </div>
                </div>
                <div class="col-md-4">
                    <div class="blog-post card-effect">
                        <img src="../assets/img/wb21.png" alt="">
                        <h5 class="mt-4"><a href="">Lorem Ipsum is simply dummy text</a></h5>
                        <p>the printing and typesetting the printing and typesetting industry. Lorem Ipsum has been the industry's standard</p>
                    </div>
                </div>
                <div class="col-md-4">
                    <div class="blog-post card-effect">
                        <img src="../assets/img/wb22.png" alt="">
                        <h5 class="mt-4"><a href="">Lorem Ipsum is simply dummy text</a></h5>
                        <p>the printing and typesetting the printing and typesetting industry. Lorem Ipsum has been the industry's standard</p>
                    </div>
                </div>
            </div>
        </div>
    </section>
    <!-- Blog ends -->
</template>

<script>
export default {
    name: "BlogRow"
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

</style>