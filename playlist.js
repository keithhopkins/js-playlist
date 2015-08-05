var Song = require('./song');

var Playlist = function(){
  this.songList = [];
  this.currentSongIndex = -1;
  this.playing = false;
};

Playlist.prototype.isEmpty = function () {
  return this.songList.length===0;
};

Playlist.prototype.addSong = function(song){
  this.songList.push(song);
};

Playlist.prototype.songNames = function(){
  return this.songList.map(function(song){
    return song.name;
  });
};

Playlist.prototype.removeSong = function(song){
  this.songList = this.songList.filter(function(curSong){
    return curSong.name !== song.name;
  });
};

Playlist.prototype.totalLength = function(){
  var length =0;
  this.songList.forEach(function(song){
    length+=song.length;
  });
  return length;
};

Playlist.prototype.swap = function (song1,song2){
  var index1 = this.songList.indexOf(song1);
  var index2 = this.songList.indexOf(song2);
  if(index1===-1 || index2===-1)
    return null;
  var temp = this.songList[index1];
  this.songList[index1] = this.songList[index2];
  this.songList[index2] = temp;
  return this.songNames();
};

Playlist.prototype.play = function(){
  if(this.currentSongIndex === -1)
    this.currentSongIndex = 0;
  this.playing = true;
};

Playlist.prototype.pause = function(){
  this.playing = false;
};

Playlist.prototype.nowPlaying = function(){
  if(this.currentSongIndex===-1)
    return null;
  return this.songList[this.currentSongIndex];
};

Playlist.prototype.next = function() {
  this.currentSongIndex++;
  if(this.currentSongIndex>=this.songList.length)
    this.currentSongIndex = -1;
};

Playlist.prototype.previous = function() {
  this.currentSongIndex--;
};


Playlist.prototype.forNumber = function () {

};

module.exports = Playlist;
