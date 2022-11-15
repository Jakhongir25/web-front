<template>
    <!-- Contact starts -->
    <section id="contact">
        <div class="container">
            <div class="row mb-5">
                <div class="col-md-8 mx-auto text-center">
                    <h6 class="text-primary">CONTACT</h6>
                    <h1>Lastest News From The Blog</h1>
                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book</p>
                </div>
            </div>
            <form action="" class="row g-3 justify-content-center">
                <div class="col-md-5">
                    <input type="text" class="form-control" placeholder="First Name">
                </div>
                <div class="col-md-5">
                    <input type="text" class="form-control" placeholder="Second Name">
                </div>
                <div class="col-md-5">
                    <input type="text" class="form-control" placeholder="Position">
                </div>
                <div class="col-md-5">
                    <input type="text" class="form-control" placeholder="Phone Number">
                </div>
                <div class="col-md-10">
                    <input type="text" class="form-control" placeholder="Email">
                </div>
                <div class="col-md-10">
                    <textarea name="" id="" cols="30" rows="5" class="form-control" placeholder="Enter Message"></textarea>
                </div>
                <div class="col-md-10 d-grid">
                    <button class="btn btn-primary">Contact</button>
                </div>
            </form>
        </div>
    </section>
    <!-- Contact ends -->
</template>

<script>
export default {
    name: "ContactRow"
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

form input.form-control {
    height: 56px;
}

form .form-control {
    border: transparent;
    border-radius: 10px;
    background-color: rgba(0,0,0,0.03);
}

</style>