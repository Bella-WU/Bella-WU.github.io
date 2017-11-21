function playHappy()
{
    var a = Math.random()*3;
    a=Math.floor(a);
    
    if(a==2)
    {
        console.log(a) ;
        document.getElementById('soundtrack').innerHTML="<audio id='background_audio1' loop autoplay><source src='audio/happy/2.mp3' type='audio/ogg'>Your browser does not support the audio element.</audio>";
    }
    if(a==1)
    {
        console.log(a) ;
        document.getElementById('soundtrack').innerHTML="<audio id='background_audio1' loop autoplay><source src='audio/happy/1.mp3' type='audio/ogg'>Your browser does not support the audio element.</audio>";
    }
    if(a==0)
    {
        console.log(a);
        document.getElementById('soundtrack').innerHTML="<audio id='background_audio1' loop autoplay><source src='audio/happy/0.mp3' type='audio/ogg'>Your browser does not support the audio element.</audio>";
    }
}

function playDecent()
{
    var a = Math.random()*4;
    a=Math.floor(a);

    if(a==3)
    {
        console.log(a) ;
        document.getElementById('soundtrack').innerHTML="<audio id='background_audio1' loop autoplay><source src='audio/decent/3.mp3' type='audio/ogg'>Your browser does not support the audio element.</audio>";
    }
    if(a==2)
    {
        console.log(a) ;
        document.getElementById('soundtrack').innerHTML="<audio id='background_audio1' loop autoplay><source src='audio/decent/2.mp3' type='audio/ogg'>Your browser does not support the audio element.</audio>";
    }
    if(a==1)
    {
        console.log(a) ;
        document.getElementById('soundtrack').innerHTML="<audio id='background_audio1' loop autoplay><source src='audio/decent/1.mp3' type='audio/ogg'>Your browser does not support the audio element.</audio>";
    }
    if(a==0)
    {
        console.log(a);
        document.getElementById('soundtrack').innerHTML="<audio id='background_audio1' loop autoplay><source src='audio/decent/0.mp3' type='audio/ogg'>Your browser does not support the audio element.</audio>";
    }
}

function playSmooth()
{
    var a = Math.random()*5;
    a=Math.floor(a);
    
    if(a==4)
    {
        console.log(a) ;
        document.getElementById('soundtrack').innerHTML="<audio id='background_audio1' loop autoplay><source src='audio/smooth/4.mp3' type='audio/ogg'>Your browser does not support the audio element.</audio>";
    }
    if(a==3)
    {
        console.log(a) ;
        document.getElementById('soundtrack').innerHTML="<audio id='background_audio1' loop autoplay><source src='audio/smooth/3.mp3' type='audio/ogg'>Your browser does not support the audio element.</audio>";
    }
    if(a==2)
    {
        console.log(a) ;
        document.getElementById('soundtrack').innerHTML="<audio id='background_audio1' loop autoplay><source src='audio/smooth/2.mp3' type='audio/ogg'>Your browser does not support the audio element.</audio>";
    }
    if(a==1)
    {
        console.log(a) ;
        document.getElementById('soundtrack').innerHTML="<audio id='background_audio1' loop autoplay><source src='audio/smooth/1.mp3' type='audio/ogg'>Your browser does not support the audio element.</audio>";
    }
    if(a==0)
    {
        console.log(a);
        document.getElementById('soundtrack').innerHTML="<audio id='background_audio1' loop autoplay><source src='audio/smooth/0.mp3' type='audio/ogg'>Your browser does not support the audio element.</audio>";
    }
}

