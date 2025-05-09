# Backend LiveKit para MedalloVIP

Este backend permite generar tokens seguros para unirse a salas de LiveKit en tiempo real.

## Endpoints

- `POST /get-token`
  - Body: `{ "roomName": "nombre", "identity": "usuario123" }`
  - Respuesta: `{ "token": "..." }`

## Variables de Entorno

Crear archivo `.env` con:

```
LIVEKIT_API_KEY=TU_API_KEY
LIVEKIT_API_SECRET=TU_API_SECRET
```

## Despliegue en Vercel

1. Subir los archivos como nuevo proyecto.
2. Agregar las variables en la configuración de entorno de Vercel.
