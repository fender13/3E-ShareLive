let url = "http://localhost:3000";

const app = new Vue({
    el: "#app",
    data: {
        username: "",
        email: "",
        password: "",
        isLogin: true,
        isLogout: false,
        posisiton: "home"
    },
    methods: {
        userRegister: function(username, email, password) {
            this.username = username
            this.email = email
            this.password = password

            axios.post(`${url}/user/register`, {
                username: this.username,
                email: this.email,
                password: this.password
            })
            .then(({ data }) => {
                console.log(data)
            })
            .catch((err) => {
                console.log(err)
            })
        }
    }
    
})
