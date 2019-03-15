Vue.component("addPost", {
    data() {
        return {
            captionInput: "",
            file: ""
        };
    },
    methods: {
        updateCaption(caption) {
            this.captionInput = caption;
        },
        updateFile(file) {
            this.file = file;
        },
        submitNewPhoto() {
            console.log("masok submittttttt:::::::::");
            console.log(this.captionInput, typeof this.file, "=============================");
            let dataFormat = new FormData();
            dataFormat.append("image", this.$refs.file.files[0]);
            dataFormat.append("name", this.captionInput);

            console.log(dataFormat, "ini dataaaaaaaaaaaaaaa");
            axios
                .post("http://localhost:3000/share/upload", dataFormat, {
                    headers: {
                        "Content-Type": "multipart/form-data"
                    }
                })
                .then(({ createdPost }) => {
                    this.name = "";
                    this.file = "";
                    console.log("======SUCCESS POST NEW PHOTO=====", createdPost);
                    console.log(createdPost);
                })
                .catch(err => {
                    console.log(err);
                });
        },
        fileHandle(event) {
            console.log("masuk file handle", this.$refs.file.files[0]);
            // this.file = this.$refs.file.files[0];
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
                        <form class="col s12" enctype="multipart/form-data"  @submit.prevent="submitNewPhoto()">
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
                                            <input type="file" ref="file" :value="file" @change="fileHandle()" />
                                        </div>
                                        <div class="file-path-wrapper">
                                            <input class="file-path validate" type="text"/>
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
        captionInput: ""
    }
});
