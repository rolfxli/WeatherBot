'use strict'

class song {
    constructor (info) {
        this.url = info.video_url;
        this.title = info.title;
    }

    /*
    get url() {
        return 'https://youtube.com/watch?v=' + this.id;
    }
    */

}

module.exports = song;