function makeMeteoInformer(qStr, iWidth, iHeight) {
    setTimeout(function(){
	var $meteoInformer = document.getElementById("MeteoInformerWrap");

	if ($meteoInformer) {
		var iframe = document.createElement("iframe");
		iframe.src = qStr+'&url='+window.location;
		iframe.scrolling = "no";
		iframe.frameBorder = 0;
		iframe.marginHeight = 0;
		iframe.marginWidth = 0;
		iframe.width = iWidth;
		iframe.height = iHeight+10;
		$meteoInformer.appendChild(iframe);
	};
    }, 1000);
}

makeMeteoInformer("http://meteo.ua/informer/get.php?cities=44&w=250&lang=ua&rnd=0&or=vert&clr=10&dt=tomorrow&style=classic",250,191);