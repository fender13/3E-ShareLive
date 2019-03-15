Vue.component('all-post',{
    template:`
    <div class="explore-content" id="all-posts">
                <div class="container">
                    <div class="row">
                        <div class="col" id="content-container">
                            <div class="col s6 offset-s3" id="one-post">
                                <div class="card" id="post">
                                    <div class="card-image waves-effect waves-block waves-light">
                                        <img class="activator" src="background2.jpg" />
                                    </div>
                                    <div class="card-content">
                                        <span class="card-title activator grey-text text-darken-4">Title<i class="material-icons right">more_vert</i></span>
                                        <!-- <p><a href="#">This is a link</a></p> -->
                                        <!-- ----------------[FACEBOOK SHARE BUTTON]--------------------- -->
                                        <div class="fb-share-button" data-href="https://cdn.shibe.online/shibes/45552b6892c3ac5f2958b9eb4784b73e30df26d7.jpg" data-layout="button_count"></div>
                                    </div>
                                    <div class="card-reveal">
                                        <span class="card-title grey-text text-darken-4">Caption<i class="material-icons right">close</i></span>
                                        <p>Here is some more information about this product that is only revealed once clicked on.</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div class="col s2" style="position: fixed; right: 15rem;">
                            <div id="person-profile" class="card grey darken-3">
                                <div class="card-image waves-effect waves-block waves-light">
                                    <img class="activator" src="https://ya-webdesign.com/images/profile-avatar-png-15.png" />
                                </div>
                                <div class="card-content">
                                    <span class="card-title activator white-text text-darken-4">John Doe<i class="material-icons right">more_vert</i></span>
                                </div>
                                <div class="card-reveal">
                                    <span class="card-title grey-text text-darken-4">Card Title<i class="material-icons right">close</i></span>
                                    <p>
                                        Here is some more information about this product that is only revealed once clicked on.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
    `
})