'use strict';

// ダミーデータ
const songs = [
  // Taylor Swift
  { id: 1, title: 'Anti-Hero', artist: 'Taylor Swift', genre: 'pop', language: 'english' },
  { id: 2, title: 'Blank Space', artist: 'Taylor Swift', genre: 'pop', language: 'english' },

  // The 1975
  { id: 3, title: 'Somebody Else', artist: 'The 1975', genre: 'indie', language: 'english' },
  { id: 4, title: 'Love It If We Made It', artist: 'The 1975', genre: 'indie', language: 'english' },

  // Charlie Puth
  { id: 5, title: 'Attention', artist: 'Charlie Puth', genre: 'pop', language: 'english' },
  { id: 6, title: 'We Don\'t Talk Anymore', artist: 'Charlie Puth', genre: 'pop', language: 'english' },

  // Wincent Weiss
  { id: 7, title: 'Feuerwerk', artist: 'Wincent Weiss', genre: 'pop', language: 'german' },
  { id: 8, title: 'Kaum erwarten', artist: 'Wincent Weiss', genre: 'pop', language: 'german' },

  // Mike Singer
  { id: 9, title: 'Karma', artist: 'Mike Singer', genre: 'pop', language: 'german' },
  { id: 10, title: 'Deja Vu', artist: 'Mike Singer', genre: 'pop', language: 'german' },

  // Clean Bandit
  { id: 11, title: 'Rather Be', artist: 'Clean Bandit', genre: 'electronic', language: 'english' },
  { id: 12, title: 'Symphony', artist: 'Clean Bandit', genre: 'electronic', language: 'english' },

  // Julien Granel
  { id: 13, title: 'Fais tes valises', artist: 'Julien Granel', genre: 'indie', language: 'french' },
  { id: 14, title: 'Madeleine', artist: 'Julien Granel', genre: 'indie', language: 'french' },

  // Clementine
  { id: 15, title: 'On verra bien', artist: 'Clementine', genre: 'pop', language: 'french' },
  { id: 16, title: 'À bout de rêves', artist: 'Clementine', genre: 'pop', language: 'french' },

  // Sigrid
  { id: 17, title: 'Don\'t Kill My Vibe', artist: 'Sigrid', genre: 'pop', language: 'english' },
  { id: 18, title: 'Strangers', artist: 'Sigrid', genre: 'pop', language: 'english' },

  // ABBA
  { id: 19, title: 'Dancing Queen', artist: 'ABBA', genre: 'pop', language: 'english' },
  { id: 20, title: 'Mamma Mia', artist: 'ABBA', genre: 'pop', language: 'english' },
];

let currentGenre = 'all';
let currentLanguage = 'all';

const genreSelect = document.getElementById('genre');
const languageSelect = document.getElementById('language');
const songList = document.getElementById('song-list');

function createSongHTML(song) {
	return `
		<div class="song" data-id="${song.id}">
			<div class="song-title">${song.title}</div>
			<div class="song-artist">${song.artist}</div>
			<div class="song-info">
				<div class="song-genre">${song.genre}</div>
				<div class="song-language">${song.language}</div>
			</div>
		</div>
	`;
}

function renderSongs() {
	songList.innerHTML = '';

	const filtered = songs.filter((song) => {
		const matchGenre = currentGenre === 'all' || song.genre === currentGenre;
		const matchLanguage = currentLanguage === 'all' || song.language === currentLanguage;
		return matchGenre && matchLanguage;
	});

	filtered.forEach((song) => {
		songList.insertAdjacentHTML('beforeend', createSongHTML(song));
	});
}

genreSelect.addEventListener('change', (e) => {
	currentGenre = e.target.value;
	renderSongs();
});

languageSelect.addEventListener('change', (e) => {
	currentLanguage = e.target.value;
	renderSongs();
});

renderSongs();