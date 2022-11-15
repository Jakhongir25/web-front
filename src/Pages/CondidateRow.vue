<template>
    <section id="condidates">
        <div class="container">
            <div class="row mb-5">
                <div class="col-md-8 mx-auto text-center">
                    <h6 class="text-primary">CONDIDATES</h6>
                    <h1>We Accompany Your Success</h1>
                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book</p>
                </div>
            </div>
            <div class="row my-5">
                <div class="col">
                    <table class="table bg-white rounded shadow-sm table-hover">
                        <thead>
                        <tr>
                            <th scope="col" width="50">#</th>
                            <th scope="col">Photo</th>
                            <th scope="col">First Name</th>
                            <th scope="col">Second Name</th>
                            <th scope="col">Position</th>
                            <th scope="col">Phone Number</th>
                            <th scope="col">Email</th>
                        </tr>
                        </thead>
                        <tbody>
                        <tr>
                            <th scope="row">1</th>
                            <td><img src="../assets/img/wb9.png" alt=""></td>
                            <td>Jakhongirmirzo</td>
                            <td>Makhammatjonov</td>
                            <td>Junior Developer</td>
                            <td>+48730307387</td>
                            <td>jmakhammatjonov@gmail.com</td>
                        </tr>
                        <tr>
                            <th scope="row">2</th>
                            <td><img src="../assets/img/wb10.png" alt=""></td>
                            <td>Mikchal</td>
                            <td>Kamilov</td>
                            <td>Middle Developer</td>
                            <td>+48111111111</td>
                            <td>avafffafrfrfa@gmail.com</td>
                        </tr>
                        <tr>
                            <th scope="row">3</th>
                            <td><img src="../assets/img/wb11.png" alt=""></td>
                            <td>Anna</td>
                            <td>Lewondwska</td>
                            <td>HR</td>
                            <td>+48000000000</td>
                            <td>gsejgbeglsegi@gmail.com</td>
                        </tr>
                        <tr>
                            <th scope="row">4</th>
                            <td><img src="../assets/img/wb9.png" alt=""></td>
                            <td>Jakhongirmirzo</td>
                            <td>Makhammatjonov</td>
                            <td>Junior Developer</td>
                            <td>+48730307387</td>
                            <td>jmakhammatjonov@gmail.com</td>
                        </tr>
                        <tr>
                            <th scope="row">5</th>
                            <td><img src="../assets/img/wb10.png" alt=""></td>
                            <td>Mikchal</td>
                            <td>Kamilov</td>
                            <td>Middle Developer</td>
                            <td>+48111111111</td>
                            <td>avafffafrfrfa@gmail.com</td>
                        </tr>
                        <tr>
                            <th scope="row">6</th>
                            <td><img src="../assets/img/wb11.png" alt=""></td>
                            <td>Anna</td>
                            <td>Lewondwska</td>
                            <td>HR</td>
                            <td>+48000000000</td>
                            <td>gsejgbeglsegi@gmail.com</td>
                        </tr>
                        <tr>
                            <th scope="row">7</th>
                            <td><img src="../assets/img/wb9.png" alt=""></td>
                            <td>Jakhongirmirzo</td>
                            <td>Makhammatjonov</td>
                            <td>Junior Developer</td>
                            <td>+48730307387</td>
                            <td>jmakhammatjonov@gmail.com</td>
                        </tr>
                        <tr>
                            <th scope="row">8</th>
                            <td><img src="../assets/img/wb10.png" alt=""></td>
                            <td>Mikchal</td>
                            <td>Kamilov</td>
                            <td>Middle Developer</td>
                            <td>+48111111111</td>
                            <td>avafffafrfrfa@gmail.com</td>
                        </tr>
                        <tr>
                            <th scope="row">9</th>
                            <td><img src="../assets/img/wb11.png" alt=""></td>
                            <td>Anna</td>
                            <td>Lewondwska</td>
                            <td>HR</td>
                            <td>+48000000000</td>
                            <td>gsejgbeglsegi@gmail.com</td>
                        </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
export default {
    name: "CondidateRow"
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

td img {
    width: 35px;
    height: 35px;
    border-radius: 100%;
}
</style>