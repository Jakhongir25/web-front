<template>
    <!--Navbar starts -->
    <nav class="navbar navbar-expand-lg py-3 sticky-top bg-light bg-white">
        <div class="container">
            <a class="navbar-brand" href="#">
                <h4 class="logo">Website</h4>
            </a>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarNav">
                <ul class="navbar-nav ms-auto">
                    <li class="nav-item">
                        <router-link class="nav-link" to="/">Home</router-link>
                    </li>
                    <li class="nav-item">
                        <router-link class="nav-link" to="/services">Services</router-link>
                    </li>
                    <li class="nav-item">
                        <router-link class="nav-link" to="/features">Features</router-link>
                    </li>
                    <li class="nav-item">
                        <router-link class="nav-link" to="/projects">Projects</router-link>
                    </li>
                    <li class="nav-item">
                        <router-link class="nav-link" to="/pricing">Pricing</router-link>
                    </li>
                    <li class="nav-item">
                        <router-link class="nav-link" to="/team">Team</router-link>
                    </li>
                    <li class="nav-item">
                        <router-link class="nav-link" to="/blog">Blog</router-link>
                    </li>
                    <li class="nav-item">
                        <router-link class="nav-link" to="/condidates">Condidates</router-link>
                    </li>
                </ul>
            </div>
        </div>
    </nav>
    <!-- Navbar ends -->
</template>

<script>
export default {
    name: "NavbarRow"
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
</style>