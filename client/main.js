let url = 'http://localhost:3000'

const app = new Vue({
    el: '#app',
    data: {
        title: '',
        username: '',
        email: '',
        password: '',
        imgSrc: '',
        image: [],
        user: [],
        isLogin: true,
        isLogout: false,
        posisiton: 'home'
    },

    created(){
        this.allPhoto()
    },
    methods: {
        allPhoto(){
            axios
                .get()
                .then(({ data }) => {
                    this.image = data
                })
                .catch((err) => {
                    console.log(err)
                })
        },

        uploadPhoto(){
            let new_photo = {
                name: this.imgSrc,
                title: this.title
            }
            axios
                .post(`${url}`, new_photo)
                .then(({ data }) => {
                    this.image.push(data)
                    this.onClickHome()
                })
        },

        onClickUpload(){
            this.posisiton = 'upload'
        },

        onClickHome(){
            this.posisiton = 'home'
        },

        onClickProfile(){
            this.posisiton = 'profile'
        },

        onClickDelete(index, id){
            axios
                .delete()
                .then((data) => {
                    this.image.splice(index, 1)
                })
                .catch((err) => {
                    console.log(err)
                })
        },

        userData(){
            axios
                .get()
                .then(({ data }) => {
                    this.username = data.username
                    this.email = data.username
                })
        }
    }
})