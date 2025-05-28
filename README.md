# 📧 correos_n8n - Automatización de correos con n8n

Este repositorio contiene un sistema de automatización para el envío de correos electrónicos utilizando [n8n](https://n8n.io/) y un frontend en React incluido en la carpeta show-mail, que se comunica con la API de n8n.

Todo está orquestado mediante Docker y Docker Compose, lo que permite ejecutar tanto el backend (n8n) como el frontend de forma sencilla sin requerir instalaciones adicionales en tu entorno local.

## 🚀 Características

- Automatización de envío de correos electrónicos.
- Configuración y despliegue mediante Docker y Docker Compose.
- Incluye un archivo n8n.json con la definición del flujo de trabajo.
- Frontend en React (show-mail) que interactúa con la API de n8n.

## 📁 Estructura del proyecto

- **show-mail/:** Proyecto React que consulta la API de n8n para mostrar correos enviados.
- **Dockerfile:** Imagen personalizada que puede incluir tanto n8n como el frontend.
- **docker-compose.yml:** Orquesta los servicios de n8n y el frontend.
- **n8n.json:** Define el flujo automatizado para envío de correos en n8n.

## 🛠️ Requisitos previos

- [Docker](https://www.docker.com/) instalado en tu sistema.
- [Docker Compose](https://docs.docker.com/compose/) para orquestar los servicios.

## ⚙️ Configuración y despliegue

1. Clona este repositorio:
```bash
  git clone https://github.com/LUISARAMIREZ08/correos_n8n.git
  cd correos_n8n
```
2. Construye y levanta los servicios con Docker Compose:
```bash
  docker-compose up -d --build
```
3. Accede a las aplicaciones en tu navegador:

- n8n: http://localhost:5678
- Frontend (React): http://localhost:8080:80 (puerto definido en docker-compose.yml)
  
4. Importa el flujo en n8n:

- En la interfaz de n8n, haz clic en Import y carga el archivo n8n.json.

## 🧩 Personalización

**En n8n**
- Configura credenciales para envío de correos.
- Ajusta los nodos del flujo de trabajo según tus necesidades.
- El flujo incluye un agente de IA que puede ser personalizado:
  
  - Puedes editar el prompt del agente directamente en el nodo correspondiente.
  - Es posible cambiar el modelo de IA.
  - Asegúrate de configurar correctamente la clave de API del proveedor de IA (OpenAI, Gemini, etc.).

**En el frontend (show-mail)**
- Puedes modificar la interfaz si necesitas mostrar más información, cambiar estilos o comportamiento visual.
- Para que los cambios surtan efecto:
```bash
  docker-compose up -d --build
```
