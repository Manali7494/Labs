function Library(name, creator) {
  this.name = name;
  this.creator = creator;
  this.playlists = [];
}

Library.prototype.addPlaylist = function(listObject) {
  this.playlists.push(listObject);
};

function Playlist(name) {
  this.name = name;
  this.tracks = [];
}

Playlist.prototype.addTrack = function(trackObject) {
  this.tracks.push(trackObject);
};

Playlist.prototype.totalDuration = function() {
  var sum = 0;
  for (var track of this.tracks) {
    sum += track.length;
  }
  return `The two tracks are ${sum} seconds long`;
};

Playlist.prototype.overallRating = function() {
  var rating = 0;

  for (var track of this.tracks) {
    rating += track.rating;
  }
  var totalRating = rating / this.tracks.length;
  return `The average rating of the tracks are ${totalRating}`;
};

function Track(title, rating, length) {
  this.title = title;
  this.rating = rating;
  this.length = length;
}

// Code Tests and Results
var library1 = new Library("Library1", "User1");
var playlist1 = new Playlist("Playlist1");
var track1 = new Track("TrackName1", 5, 200);
var track2 = new Track("TrackName2", 4, 400);

library1.addPlaylist(playlist1);
playlist1.addTrack(track1);
playlist1.addTrack(track2);

console.log(playlist1.totalDuration()); // 600
console.log(playlist1.overallRating()); // 4.5
