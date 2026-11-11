# Hallazgos de Seguridad - Actividad 74

## H-25 (CRÍTICO): adm-zip con 8 CVEs de severidad alta

**Paquete:** `adm-zip <=0.6.0`
**Usado en:** `src/services/exportacionesService.js` (Act 60/62)
**CVEs reportados por npm audit:**
- GHSA-xcpc-8h2w-3j85 (4GB memory allocation)
- GHSA-vwc7-r8mq-g2x9 (symlink arbitrary file overwrite)
- GHSA-7q85-xj36-vmfc (DoS por uncompressed size)
- GHSA-rcw4-f5rp-g42v (bypass decompression-bomb)
- GHSA-j5f4-cc29-5x44 (SUID/SGID privilege escalation)
- GHSA-p634-w6r4-rjp2 (duplicate ZIP entry names)
- GHSA-c6fg-446q-cg94 (bypass maxOutputLength)
- GHSA-8238-w5pm-2374 (DoS en async DEFLATE)

**Solución propuesta:** `npm audit fix --force` actualiza a `adm-zip@0.6.1`, pero es **breaking change**. 
**Requiere:** decisión del Líder (Benjamín Barrientos) y re-prueba de las exportaciones de la Act 60/62 después de actualizar.

## O-01 (OBSERVACIÓN): CORS no emite Access-Control-Allow-Origin

**Contexto:** Al hacer `curl -sI -H "Origin: http://localhost:5173" http://localhost:3000/salud`, el backend responde sin cabecera `Access-Control-Allow-Origin`.

**Posibles causas:**
- CORS no está configurado (frontend y backend deben servirse del mismo origen).
- Está configurado con lista de orígenes vacía.

**Riesgo:** Si el frontend corre en `localhost:5173` (Vite/React) o `localhost:3001` (Create React App), el navegador bloqueará las peticiones por CORS.

**Pregunta al Líder:** ¿El frontend y backend se sirven desde el mismo origen en producción? Si no, hay que agregar el origen del frontend a la whitelist de CORS.
