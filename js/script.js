"use strict";

/* exported messages */
/* exported notifications */
/* exported particles */
/* exported music */
/* exported voice */
/* exported sound */
/* exported videos */
/* exported images */
/* exported scenes */
/* exported characters */
/* exported script */

/* global storage */

// Define the messages used in the game.
let messages = {
	"Help": {
		"Title": "Help",
		"Subtitle": "Link dưới này đây:",
		"Message": "<p><a href='https://monogatari.io/documentation/'>Tài liệu</a> - Những điều bạn cần bik.</p><p><a href='https://monogatari.io/demo/'>Demo</a> - 1 bản Demo nhỏ.</p>"
	}
};

// Define the notifications used in the game
let notifications = {
	"Welcome": {
		title: "Welcome",
		body: "This is the Monogatari VN Engine",
		icon: ""
	}
};

// Define the Particles JS Configurations used in the game
let particles = {
    
};

// Define the music used in the game.
const music = {
	"lh": "log horizon theme.mp3",
	"el": "elder tale.mp3"
};

// Define the voice files used in the game.
const voice = {

};

// Define the sounds used in the game.
const sound = {

};

// Define the videos used in the game.
const videos = {
    "ai": "aikotoba.mp4",
    "chiisana": "chiisana.mp4",
    "wr": "wrong-as-i-expected.mp4"
};

// Define the images used in the game.
const images = {

};

// Define the backgrounds for each scene.
const scenes = {
	"class": "class.png"
};

// Define the Characters
const characters = {
	"h": {
		"Name": "Kaito",
		"Color": "#5bcaff",
		"Images": {
			"K": "kaito.png"
		}
	}
};

let script = {
	// The game starts here.
	"Start": [
		"scene #000000",
		{
			"Input": {
				"Text": "Bạn tên gì?",
				"Validation": function (input) {
					return input.trim().length > 0;
				},
				"Save": function (input) {
					storage.player.Name = input;
					return true;
				},
				"Warning": "Nhập tên mày vào!"
			}
		},
		"scene class",
		"h Hế lô {{player.Name}}! Đây là 1 webapp trên mạng bị thằng Cường lụm về phá",
		"h Hiện tại, vì thằng Cường quá lười nên chả có gì nhiều trên đây cả...",
		"jump Choic"
	],
	"Choic": [
		"play music el loop",
		{
		"Choice": {
		"Dialog": "h Mời bạn chọn....",
		"Mus": {
			"Text": "Nhạc",
			"Do": "jump Mus"
		},
		"Vid": {
			"Text": "Video",
			"Do": "jump Vid"
		},
		"help": {
			"Text": "Nguồn gốc của cái App này",
			"Do": "jump help"
		}
		}
		}
	],
	//help
	"help": [
		"display message Help",
		"jump Choic"
	],
	//music
	"Mus": [
		"stop music",
		"h Hiện tại phần này chưa có gì nên mong bạn thông cảm...",
		"clear",
		//music choice
		"jump Choic"
	],
	//video
	"Vid": [
		"stop music",
		//video choice
		{"Choice": {
			"Dialog": "Mời bạn chọn Video =))",
			"aikotoba": {
				"Text": "AIKOTOBA",
				"Do": "jump aikotoba"
			},
			"chiisana": {
				"Text": "Chiisana koi no uta - Amatsuki",
				"Do": "jump chiisana"
			},
			"wrong": {
				"Text": "wrong as i expected",
				"Do": "jump wrong"
			},
			"back": {
				"Text": "Back",
				"Do": "jump Choic"
			}
		}}
	],
	//videos page
	"aikotoba": [
		"scene #000000",
		"play video ai",
		"jump Vid"
	],
	"chiisana": [
		"scene #000000",
		"play video chiisana",
		"jump Vid"
	],
	"wrong": [
		"scene #000000",
		"play video wr",
		"jump Vid"
	]
};