// web camera generate real-time video
(function(){
	var video = document.getElementById('video'), 
		canvas = document.getElementById('canvas'),
		context = canvas.getContext('2d'),
		photo = document.getElementById('photo'),
	    vendorUrl = window.URL || window.webkitURL;

	navigator.getMedia = navigator.getUserMedia ||
	                     navigator.webkitGetUserMedia ||
	                     navigator.mozGetUserMedia ||
	                     navigator.msGetUserMedia;

	navigator.getMedia({
        video:true,
        audio:false
	}, function(stream){
		video.src = vendorUrl.createObjectURL(stream);
	}, function(error){
       // An error occured
       // error.code
	});

	// capture image from the video
	document.getElementById('capture').addEventListener('click', function(){
		context.drawImage(video, 0, 0, 400, 300);
		photo.setAttribute('src', canvas.toDataURL('image/png'));
		var imgURL = canvas.toDataURL('image/png');
    
    //convert image url to a binary blob
        function makebolb(dataURL) {
            var BASE64_MARKER = ';base64,';
            if (dataURL.indexOf(BASE64_MARKER) == -1) {
                var parts = dataURL.split(',');
                var contentType = parts[0].split(':')[1];
                var raw = decodeURIComponent(parts[1]);
                return new Blob([raw], {type: contentType});
            }
            var parts = dataURL.split(BASE64_MARKER);
            var contentType = parts[0].split(':')[1];
            var raw = window.atob(parts[1]);
            var rawLength = raw.length;

            var uInt8Array = new Uint8Array(rawLength);

            for (var i = 0; i < rawLength; ++i) {
                uInt8Array[i] = raw.charCodeAt(i);
            }
            return new Blob([uInt8Array], {type: contentType});
        }

		var params = {
            // Request parameters
        };


		$.ajax({
            // NOTE: You must use the same location in your REST call as you used to obtain your subscription keys.
            //   For example, if you obtained your subscription keys from westcentralus, replace "westus" in the 
            //   URL below with "westcentralus".
            url: "https://westus.api.cognitive.microsoft.com/emotion/v1.0/recognize", //+ $.param(params),
            beforeSend: function(xhrObj){
                // Request headers
                xhrObj.setRequestHeader("Content-Type","application/octet-stream"),
                // NOTE: Replace the "Ocp-Apim-Subscription-Key" value with a valid subscription key.
                xhrObj.setRequestHeader("Ocp-Apim-Subscription-Key","33f4cea0a887400c86603788a8fb9b94");
            },
            type: "POST",
            processData: false,
            // Request body
            //data: '{"url": "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1b/Girl_Portrait_Kid_Cute_Hair_Sunlight_Arab_Young.jpg/220px-Girl_Portrait_Kid_Cute_Hair_Sunlight_Arab_Young.jpg"}',
            data: makebolb(imgURL)

        })
        .done(function(data) {
            alert("success");
            // console.log(data[0].scores.happiness);
            
            // get the value of happiness
            var happiness = data[0].scores.happiness;
            console.log(happiness);

            //play music & change bg color
		    if(happiness >= 0.5)
	    {    
	        console.log("happy") ;
	    // change bg color
            document.getElementById("particles-js").style.backgroundColor = 'rgb(' +
            Math.floor(Math.random() * 24 + 206) + ',' +
            93 + ',' +
            75 + ')';
	        // document.body.style.backgroundColor = 'rgb(' +
	        // Math.floor(Math.random() * 24 + 206) + ',' +
	        // 93 + ',' +
	        // 75 + ')';
	        // document.getElementById('soundtrack').innerHTML="<audio id='background_audio1' loop autoplay><source src='audio/happy/0.mp3' type='audio/ogg'>Your browser does not support the audio element.</audio>";
	        playHappy();
	    }
	        else if(happiness >= 0.001 && happiness < 0.5)
	    {
	        console.log("decent");
        // change bg color
            document.getElementById("particles-js").style.backgroundColor = 'rgb(' +
            231 + ',' +
            Math.floor(Math.random() * 38 +142) + ',' +
            75 + ')';
	        // document.body.style.backgroundColor = 'rgb(' +
	        // 231 + ',' +
	        // Math.floor(Math.random() * 38 +142) + ',' +
	        // 75 + ')';
	        // document.getElementById('soundtrack').innerHTML="<audio id='background_audio1' loop autoplay><source src='audio/decent/0.mp3' type='audio/ogg'>Your browser does not support the audio element.</audio>";
	        playDecent();
	    }
	    	else
	    {
	        console.log("smooth");
        // change bg color
            document.getElementById("particles-js").style.backgroundColor = 'rgb(' +
            Math.floor(Math.random() * 38 +151) + ',' +
            180 + ',' +
            75 + ')';
	        // document.body.style.backgroundColor = 'rgb(' +
	        // Math.floor(Math.random() * 38 +151) + ',' +
	        // 180 + ',' +
	        // 75 + ')';
	        // document.getElementById('soundtrack').innerHTML="<audio id='background_audio1' loop autoplay><source src='audio/smooth/0.mp3' type='audio/ogg'>Your browser does not support the audio element.</audio>";
	        playSmooth();
	    }

        })
        .fail(function() {
            alert("error");
        });
	});

})();