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
        userLogin: function(username, password) {
            this.username = username
            this.password = password

            axios.post(`${url}/user/login`, {
                username: this.username,
                password: this.password
            })
            .then(({ data }) => {
                localStorage.setItem('token', data.token)
            })
            .catch((err) => {
                console.log(err)
            })
        }
    }
    
})
