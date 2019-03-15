Vue.component('add-login', {
    data() {
        return {
            username: '',
            password: ''
        }
    },
    template: `
    <div id="login-form" class="container">
        <div class="row">
            <form v-on:submit.prevent="$emit('submit-login', username, password)" class="container col s4 offset-s4" id="login-form-border">
                <h1 class="center">Login</h1>
                <div class="row">
                    <div class="input-field inline col s12">
                        <input v-model="username" id="email_inline" type="text" class="validate" />
                        <label for="email_inline">Username</label>
                        <span class="helper-text" data-error="wrong" data-success="right"></span>
                    </div>
                </div>
                <div class="row">
                    <div class="input-field col s12">
                        <input v-model="password" id="password" type="password" class="validate" />
                        <label for="password">Password</label>
                    </div>
                </div>
                <div class="row center">
                    <button class="btn waves-effect waves-hard black" type="submit" name="action" @click="$emit('submit-login')">
                        Login
                    </button>
                </div>
                <div class="row center">
                    <button class="btn waves-effect waves-hard black" type="submit" name="action" @click="$emit('ke-form-register')">
                        Register
                    </button>
                </div>
            </form>
        </div>
    </div>
    `
})