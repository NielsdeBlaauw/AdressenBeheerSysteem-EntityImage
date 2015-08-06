// ==UserScript==
// @name         Adressen Beheer Systeem locatie-afbeelding
// @namespace    http://www.adressenbeheersysteem.nl/
// @version      0.1
// @description  Voegt een google maps afbeelding van het adres van de entiteit toe aan de bekijk_entiteit pagina
// @author       Niels de Blaauw
// @match        https://*.adressenbeheersysteem.nl/bekijk_locatie.php*
// @match        https://*.adressenbeheersysteem.nl/bekijk_bedrijf.php*
// @match        https://*.adressenbeheersysteem.nl/bekijk_adres.php*
// ==/UserScript==

$(document).ready(function(){
    $addressString = $('a[href^="http://maps.google.com/?q="]').attr('href');
    if(typeof $addressString != 'undefined'){
        $addressString = $addressString.replace('http://maps.google.com/?q=', '');
        $('#pagina').before("<div id=\"googleMapDynamicShadow\"><span id=\"googleMapDynamicInsideShadow\"></span</div>");
        $('#googleMapDynamicShadow').width('100%');
        $('#googleMapDynamicShadow').css('box-shadow', 'inset 0 10px 10px -10px #000000');
        $('#googleMapDynamicShadow').css('background-size', 'cover');
        $('#googleMapDynamicShadow').css('height', '300px');
        $('#googleMapDynamicShadow').css("background-image", "url(\"https://maps.googleapis.com/maps/api/staticmap?center=" + $addressString + "&zoom=12&size=1920x200&scale=2&maptype=hybrid&markers=color:red|"+ $addressString +"\")"); 
        $('#googleMapDynamicInsideShadow').css("box-shadow", "inset 0em -10px 10px -10px rgba(0,0,0,1)");
        $('#googleMapDynamicInsideShadow').css("display", "inline-block");
        $('#googleMapDynamicInsideShadow').css("width", "100%");
        $('#googleMapDynamicInsideShadow').css("height", "300px");
    }
});
