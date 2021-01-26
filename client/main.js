let url = "http://localhost:3000";

const app = new Vue({
    el: "#app",
    data: {
        captionInput: "",
        title: "",
        username: "",
        email: "",
        password: "",
        imgSrc: "",
        image: [],
        user: [],
        isLogin: false,
        position: "homepage"
    },

    created() {
        this.allPhoto();
    },
    methods: {
        allPhoto() {
            axios
                .get()
                .then(({ data }) => {
                    this.image = data;
                })
                .catch(err => {
                    // console.log(err);
                });
        },

        uploadPhoto() {
            let new_photo = {
                name: this.imgSrc,
                title: this.title
            };
            axios.post(`${url}`, new_photo).then(({ data }) => {
                this.image.push(data);
                this.onClickHome();
            });
        },

        onClickLogin(){
            this.position = "login"
        },

        onClickUpload() {
            this.position = "upload";
        },

        onClickHome() {
            this.position = "homepage";
        },

        onClickProfile() {
            this.position = "profile";
        },

        onClickRegister(){
            this.position = 'register'
        },

        onClickDelete(index, id) {
            axios
                .delete()
                .then(data => {
                    this.image.splice(index, 1);
                })
                .catch(err => {
                    console.log(err);
                });
        },

        userData() {
            axios
                .get()
                .then(({ data }) => {
                    this.username = data.username;
                    this.email = data.username;
                });
        },

        userLogin(payload) {
            this.username = payload.username
            this.password = payload.password

            axios
                .post(`${url}/user/login`, {
                    username: this.username,
                    password: this.password
                })
                .then(({ data }) => {
                    this.onClickHome()
                    this.isLogin = true
                    localStorage.setItem('token', data.token)
                })
                .catch((err) => {
                    console.log(err)
                })
        },

        userRegister(payload) {
            this.username = payload.username
            this.email = payload.email
            this.password = payload.password

            axios
                .post(`${url}/user/register`, {
                    username: this.username,
                    email: this.email,
                    password: this.password
                })
                .then(({ data }) => {
                    this.onClickLogin()
                    console.log(data)
                })
                .catch((err) => {
                    console.log(err)
                })
        },

        logout: function() {
            localStorage.clear()
            this.isLogin= false
            this.position = "homepage"
        }
    }
});
