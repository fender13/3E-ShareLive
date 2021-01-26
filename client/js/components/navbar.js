Vue.component('navbar-template', {
    template: `
    <nav class="white" role="navigation">
        <div class="nav-wrapper container">
            <a id="logo-container" href="#" class="brand-logo black-text">3E-LiveShare</a>
            <ul class="right hide-on-med-and-down">
                <li><a href="#" class="black-text">Explore</a></li>
                <li><a href="#" class="black-text" @click="$emit('ke-link-upload')">Upload Photo</a></li>
                <slot></slot>
            </ul>
        </div>
    </nav>
    `
})