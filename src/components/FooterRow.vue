<template>
    <!-- Footer starts -->
    <footer>
        <div class="footer-top">
            <div class="container">
                <div class="row gy-4">
                    <div class="col-md-4">
                        <h4 class="logo-footer text-white">Website</h4>
                    </div>
                    <div class="col-md-2">
                        <h5 class="text-white">Brand</h5>
                        <ul class="list-unstyled">
                            <li><a href="#">Lorem Ipsum</a></li>
                            <li><a href="#">Lorem Ipsum</a></li>
                            <li><a href="#">Lorem Ipsum</a></li>
                            <li><a href="#">Lorem Ipsum</a></li>
                        </ul>
                    </div>
                    <div class="col-md-2">
                        <h5 class="text-white">More</h5>
                        <ul class="list-unstyled">
                            <li><a href="#">Lorem Ipsum</a></li>
                            <li><a href="#">Lorem Ipsum</a></li>
                            <li><a href="#">Lorem Ipsum</a></li>
                            <li><a href="#">Lorem Ipsum</a></li>
                        </ul>
                    </div>
                    <div class="col-md-4">
                        <h5 class="text-white">Creator</h5>
                        <ul class="list-unstyled">
                            <li>Jakhongirmirzo Makhammatjonov</li>
                            <li>Email: jmakhammatjonov@gmail.com</li>
                            <li>Phone: +48730307387</li>
                            <li>Address: Marii Grzegorzewskiej 602-778 Warszawa
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
        <div class="footer-bottom py-3">
            <div class="container">
                <div class="row">
                    <div class="col-md-6">
                        Created by Jakhongirmirzo Makhammatjonov
                    </div>
                    <div class="col-md-6">
                        <div class="social-icons">
                            <a href="#"><i class='bx bxl-facebook'></i></a>
                            <a href="#"><i class='bx bxl-linkedin'></i></a>
                            <a href="#"><i class='bx bxl-instagram-alt'></i></a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </footer>
    <!-- Footer ends -->
</template>

<script>
export default {
    name: "FooterRow"
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
footer .logo-footer {
    width: 160px;
}

.footer-top {
    padding-bottom: 90px;
    padding: 90px;
    background-color: var(--dark);
}

.footer-top a {
    color: var(--body);
}

.footer-top a:hover {
    color: #fff;
}

.footer-bottom {
    background-color: #242933;
}

</style>