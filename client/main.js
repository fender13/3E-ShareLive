let url = 'http://localhost:3000'

var app = new Vue({
    el: '#app',
    data:{
        email: '',
        password: '',
        title: '',
        content: '',
        createdAt: '',
        id_update: '',
        title_update: '',
        content_update: '',
        articles: [],
        user: [],
        seenAdd: false,
        seenList: false,
        seenUpdate: false,
        isLogin: false,
        isLogout: true,
    },
    created (){
        this.allData()
    },

    methods: {
        addArticles(){
            let data = {
                title: this.title,
                content: this.content,
                createdAt: new Date().toISOString()
            }
            axios
                .post(`${url}/article`, data)
                .then(({ data }) => {
                    this.articles.push(data)
                    this.title = ''
                    this.content = ''
                    this.onClickList()
                })
                .catch((err) => {
                    console.log(err)
                })
        },
        onClickList(){
            if(this.seenList === false){
               this.seenList = true 
               this.seenAdd = false
                this.seenUpdate = false
            }
            axios
                .get(`${url}/article`)
                .then(({ data }) => {
                    this.articles = data
                })
                .catch((err) => {
                    console.log(err)
                })
        },
        onClickAdd() {
            if(this.seenAdd === false) {
                this.seenAdd = true
                this.seenList = false
                this.seenUpdate = false
            }
        },
        onClickUpdate(){
            if(this.seenUpdate === false){
                this.seenUpdate = true
                this.seenAdd = false
                this.seenList = false
            }
        },
        onClickDelete(index, id){
            axios
                .delete(`${url}/article/${id}`)
                .then((data) => {
                    this.articles.splice(index, 1)
                })
                .catch((err) => {
                    console.log(err)
                })
        },
        allData(){
            axios
                .get(`${url}/article`)
                .then(({ data }) => {
                    this.articles = data
                })
                .catch((err) => {
                    console.log(err)
                })
        },
        update(id){
            axios
                .get(`${url}/article/${id}`)
                .then(({ data }) => {
                    console.log(data)
                    this.seenUpdate = true
                    this.seenList = false
                    this.seenAdd = false
                    this.id_update = data._id
                    this.title_update = data.title
                    this.content_update = data.content
                })
                .catch((err) => {
                    console.log(err)
                })
        },

        updated(){
            axios
                .put(`${url}/article/${this.id_update}`, { title: this.title_update, content: this.content_update})
                .then(({ data }) => {
                    this.onClickList()
                })
                .catch((err) => {

                })

        },

        login(){
            let data = {
                email: this.email,
                password: this.password
            }
            axios
                .post(`${url}/users/login`, data)
                .then((data) => {

                })
        }
    }
});