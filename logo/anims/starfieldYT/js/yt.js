		// add async YT API script				
		var r = document.createElement('script');
		r.src = "https://www.youtube.com/iframe_api";
		var f = document.getElementsByTagName('script')[0];
		f.parentNode.insertBefore(r, f);

		var player;

		function onYouTubeIframeAPIReady() {
			//console.log('onYouTubeIframeAPIReady');
			player = new YT.Player('player', {
				//videoId:'soCwP1QhqvQ',
				//videoId:'mUe8Y9yFMYg',
				videoId:'9Vj_O4Kz2CY',
				playerVars: {
					//					height: '572',
					//					width: '970',
					quality: 'default',
					controls: '0',
					theme: 'light',
					autoplay: '1',
					// set to 1 if you wish to see captions
					//cc_load_policy: '0',
					//hl:'pl',
					//cc_lang_pref:'pl',
					//cc_load_policy=1&hl=no&cc_lang_pref=no
					rel: '0',
					autohide: '1',
					enablejsapi: '1',
					wmode: 'transparent',
					playerapiid: 'ytplayer',
					modestbranding: '1',
					version: '3',
					showinfo: '0',
					//start: 0,
					origin: 'https://flaboy.com/drones/video.html',
					//listType: 'playlist',
					//list: 'PLYNXAul6xOz6udNLyOq1J3QN1mpODQkqO'
				},
				events: {
					'onReady': onPlayerReady,
					'onStateChange': onPlayerStateChange
				}
			});
		}


		function onPlayerReady(event) {
			console.log('onPlayerReady');
			resizer();
		}

		function onPlayerStateChange(event) {
			console.log('>> ' + event.data);
			resizer();
		}


		// window resize

		// 16 : 9
		// 640 x 480
		//------------------

		var ratio = 16 / 9;

		function resizer() {
			var width = $(window).width();
			var pWidth;
			var height = $(window).height();
			var pHeight;
			var pla = $('#player');

			if (width / ratio < height) {
				pWidth = Math.ceil(height * ratio);
				pla.width(pWidth).height(height).css({
					left: (width - pWidth) / 2,
					top: 0
				});
			} else {
				pHeight = Math.ceil(width / ratio);
				pla.width(width).height(pHeight).css({
					left: 0,
					top: (height - pHeight) / 2
				});
			}

		}



		function onWindowResize() {
			console.log('resize:',$('#player').css('width'),' x ',$('#player').css('height'));
			resizer();

		}

		window.addEventListener("resize", onWindowResize);
		resizer();