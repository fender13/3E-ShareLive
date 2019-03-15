Vue.component("addPost", {
    data() {
        return {
            captionInput: "",
            file: ""
        }
    },
    methods: {
        updateCaption(caption) {
            this.captionInput = caption
        },
        updateFile(file) {
            this.file = file
        },
        submitNewPhoto() {
            // console.log(this.captionInput, this.file,'=============================')
            axios.post({
                url: 'http://localhost:3000/share/upload',
                data: {
                    name: this.captionInput,
                    path: this.file,
                    userId: "5c8b11aeca95ba34f21a1e59"
                }
            })
            .then(createdPost => {
                console.log(createdPost)

            })  
            .catch(err => {
                console.log(err)
            })

        }
    },
    template: `
    <div id="add-post" class="container">
    <div class="row">
        <div id="form-add" class="container fixed col s6 offset-s3">
            <div class="row">
                <div class="col m12 s12">
                    <h3 class="center-align">
                        Upload Photo
                    </h3>
                    <div class="row">
                        <form class="col s12" @submit.prevent="submitNewPhoto()">
                            <div class="row">
                                <div class="input-field col s8 offset-s2">
                                    <input id="caption" type="text" class="validate" autocomplete="off" :value="captionInput" @input="updateCaption($event.target.value)"/>
                                    <label for="caption">Caption</label>
                                </div>
                            </div>
                            <div class="row">
                                <div class="input-field col s8 offset-s2">
                                    <div class="file-field input-field">
                                        <div class="btn grey darken-3">
                                            <span>File</span>
                                            <input type="file" />
                                        </div>
                                        <div class="file-path-wrapper">
                                            <input class="file-path validate" type="text" :value="file" @change="updateFile($event.target.value)"/>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="row center">
                                <div class="input-field col s8 offset-s2">
                                    <button class="btn waves-effect waves-hard green accent-4" type="submit" name="action">
                                        Submit
                                        <i class="material-icons right">send</i>
                                    </button>
                                </div>
                            </div>
                            <div class="row center">
                                <div class="input-field col s8 offset-s2">
                                    <button class="btn waves-effect waves-hard grey" type="submit" name="action">
                                        Cancel
                                        <i class="material-icons right">cancel</i>
                                    </button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
    `
});

new Vue({
    el: "#app",
    data: {
        // captionInput: "",
    },
});


{/* <div id="app">
            <!-- <add-post v-model="addPost"> -->
            
            <add-post v-model="captionInput">
        </div> */}