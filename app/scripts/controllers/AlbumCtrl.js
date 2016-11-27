(function() {
    function AlbumCtrl() {
        this.albumData = albumPicasso;
        this.songs = [];
        for (var i=0; i < 12; i++) {
            this.songs.push(angular.copy(albumPicasso.songs));
        }
    }

    angular
        .module('blocJams')
        .controller('AlbumCtrl', AlbumCtrl);
})();