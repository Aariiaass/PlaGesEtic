'use strict';

// Cabeceras que le indician al navegador como protegerse con cada respuesta de la API.

function cabecerasSeguridad(req, res, next) {
    res.set('X-Content-Type-Options', 'nosniff');
    res.set('X-Frame-Options', 'DENY');
    res.set('Referrer-Policy', 'no-referrer');    
    res.set('Content-Security-Policy', "default-src 'none'; frame-ancestors 'none'");   
    next();
}

module.exports =  {cabecerasSeguridad};