<template>
    <!-- Team starts-->
    <section id="team">
        <div class="container">
            <div class="row mb-5">
                <div class="col-md-8 mx-auto text-center">
                    <h6 class="text-primary">TEAM</h6>
                    <h1>Meet Our Crew Members</h1>
                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book</p>
                </div>
            </div>
            <div class="row text-center g-3">
                <div class="col-lg-3 col-sm-6">
                    <div class="team-member card-effect">
                        <img src="../assets/img/wb9.png" alt="">
                        <h5 class="mb-0 mt-4">Jakhongir Mirzo</h5>
                        <p>Full-Stack Developer</p>
                        <div class="social-icons">
                            <a href="#"><i class='bx bxl-facebook'></i></a>
                            <a href="#"><i class='bx bxl-linkedin'></i></a>
                            <a href="#"><i class='bx bxl-instagram-alt'></i></a>
                        </div>
                    </div>
                </div>
                <div class="col-lg-3 col-sm-6">
                    <div class="team-member card-effect">
                        <img src="../assets/img/wb10.png" alt="">
                        <h5 class="mb-0 mt-4">Kamil</h5>
                        <p>IT Manager</p>
                        <div class="social-icons">
                            <a href="#"><i class='bx bxl-facebook'></i></a>
                            <a href="#"><i class='bx bxl-linkedin'></i></a>
                            <a href="#"><i class='bx bxl-instagram-alt'></i></a>
                        </div>
                    </div>
                </div>
                <div class="col-lg-3 col-sm-6">
                    <div class="team-member card-effect">
                        <img src="../assets/img/wb11.png" alt="">
                        <h5 class="mb-0 mt-4">Lee Ja</h5>
                        <p>JS Developer</p>
                        <div class="social-icons">
                            <a href="#"><i class='bx bxl-facebook'></i></a>
                            <a href="#"><i class='bx bxl-linkedin'></i></a>
                            <a href="#"><i class='bx bxl-instagram-alt'></i></a>
                        </div>
                    </div>
                </div>
                <div class="col-lg-3 col-sm-6">
                    <div class="team-member card-effect">
                        <img src="../assets/img/wb12.png" alt="">
                        <h5 class="mb-0 mt-4">Kamila</h5>
                        <p>PHP Developer</p>
                        <div class="social-icons">
                            <a href="#"><i class='bx bxl-facebook'></i></a>
                            <a href="#"><i class='bx bxl-linkedin'></i></a>
                            <a href="#"><i class='bx bxl-instagram-alt'></i></a>
                        </div>
                    </div>
                </div>
                <div class="col-lg-3 col-sm-6">
                    <div class="team-member card-effect">
                        <img src="../assets/img/wb13.png" alt="">
                        <h5 class="mb-0 mt-4">Agata</h5>
                        <p>Accauntant</p>
                        <div class="social-icons">
                            <a href="#"><i class='bx bxl-facebook'></i></a>
                            <a href="#"><i class='bx bxl-linkedin'></i></a>
                            <a href="#"><i class='bx bxl-instagram-alt'></i></a>
                        </div>
                    </div>
                </div>
                <div class="col-lg-3 col-sm-6">
                    <div class="team-member card-effect">
                        <img src="../assets/img/wb14.png" alt="">
                        <h5 class="mb-0 mt-4">Radriges</h5>
                        <p>Full-Stack Developer</p>
                        <div class="social-icons">
                            <a href="#"><i class='bx bxl-facebook'></i></a>
                            <a href="#"><i class='bx bxl-linkedin'></i></a>
                            <a href="#"><i class='bx bxl-instagram-alt'></i></a>
                        </div>
                    </div>
                </div>
                <div class="col-lg-3 col-sm-6">
                    <div class="team-member card-effect">
                        <img src="../assets/img/wb15.png" alt="">
                        <h5 class="mb-0 mt-4">Janusz</h5>
                        <p>JS Developer</p>
                        <div class="social-icons">
                            <a href="#"><i class='bx bxl-facebook'></i></a>
                            <a href="#"><i class='bx bxl-linkedin'></i></a>
                            <a href="#"><i class='bx bxl-instagram-alt'></i></a>
                        </div>
                    </div>
                </div>
                <div class="col-lg-3 col-sm-6">
                    <div class="team-member card-effect">
                        <img src="../assets/img/wb16.png" alt="">
                        <h5 class="mb-0 mt-4">Angelika</h5>
                        <p>Prudact Manager</p>
                        <div class="social-icons">
                            <a href="#"><i class='bx bxl-facebook'></i></a>
                            <a href="#"><i class='bx bxl-linkedin'></i></a>
                            <a href="#"><i class='bx bxl-instagram-alt'></i></a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    <!-- Team ends -->
</template>

<script>
export default {
    name: "TeamRow"
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

.team-member img {
    width: 125px;
    height: 125px;
    border-radius: 100px;
}

.social-icons {
    display: flex;
    justify-content: center;
}

.social-icons a {
    width: 34px;
    height: 34px;
    background-color: var(--primary);
    border-radius: 2px solid var(--primary);
    color: #fff;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 100px;
    margin-left: 5px;
    transition: all 0.4s ease;
    border: 2px solid var(--primary);
}

.social-icons a:hover {
    color: var(--primary);
    background-color: transparent;
    border-color: var(--primary);
}
</style>