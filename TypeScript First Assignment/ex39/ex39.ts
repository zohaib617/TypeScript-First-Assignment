function makeAlbum(artist: string, title: string, tracks?: number): { artist: string, title: string, tracks?: number } {
    let album: { artist: string, title: string, tracks?: number } = {
        artist: artist,
        title: title
    };

    if (tracks !== undefined) {
        album.tracks = tracks;
    }

    return album;
}

// Create three albums using the function
let album1 = makeAlbum('Artist1', 'Album1', 10);
let album2 = makeAlbum('Artist2', 'Album2');
let album3 = makeAlbum('Artist3', 'Album3', 15);

// Print each return value to show album information
console.log(album1);
console.log(album2);
console.log(album3);
