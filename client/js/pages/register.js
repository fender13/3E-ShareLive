Vue.component('add-register', {
    data() {
        return {
            username: '',
            email: '',
            password: ''
        }
    },
    template: `
    
        <div class="row">
            <form v-on:submit.prevent="$emit('submit-register', {username: username, email: email, password: password})" class="container col s4 offset-s4">
                <h1 class="center">Register</h1>
                <div class="row">
                    <div class="input-field col s12">
                        <input v-model="username" id="username" type="text" class="validate" />
                        <label for="username">Username</label>
                    </div>
                </div>
                <div class="row">
                    <div class="input-field inline col s12">
                        <input v-model="email" id="email_inline" type="email" class="validate" />
                        <label for="email_inline">Email</label>
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
                    <button class="btn waves-effect waves-hard black" type="submit" name="action" @click="$emit('submit-register')">
                        Submit
                    </button>
                </div>
            </form>
        </div>
    
    `
})