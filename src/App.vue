<template>

    <!--Navbar starts-->
    <NavbarRow/>
    <!--Navbar ends-->

        <router-view/>


    <!-- Footer starts-->
    <FooterRow/>
    <!-- Footer ends -->

</template>

<script>

import NavbarRow from "@/components/NavbarRow";
import FooterRow from "@/components/FooterRow";
export default {
  name: 'App',
  components: {NavbarRow, FooterRow}
}
</script>

<style>
    @import url('https://fonts.googleapis.com/css2?family=Spline+Sans:wght@400;700&display=swap');

    :root {
        --primary: #0d6efd;
        --dark: #21252f;
        --body: #888;
        --box-shadow: 0 8px 22px rgba(0,0,0,0.1);
    }

    body {
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

    .navbar {
        box-shadow: var(--box-shadow);
    }

    .navbar .logo {
        width: 160px;
    }

    .navbar .nav-link {
        font-size: 14px;
        font-weight: 700;
    }

    .btn {
        padding: 8px 12px;
        border-width: 1px;
        border-radius: 0;
    }

    .hero {
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

    .col-img {
        background-position: center;
        background-size: cover;
        min-height: 500px;
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

    .pricing i {
        font-size: 20px;
        color: var(--primary);
    }

    .pricing ul li {
        margin-top: 8px;
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

    form input.form-control {
        height: 56px;
    }

    form .form-control {
        border: transparent;
        border-radius: 10px;
        background-color: rgba(0,0,0,0.03);
    }

    #about .divider {
        width: 60px;
        height: 2px;
        display: block;
        background-color: var(--primary);
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
