:

🚀 BTG Pactual - Prueba Técnica (Frontend)

Este proyecto corresponde al desarrollo frontend de la prueba técnica para Ingeniero Fullstack en BTG Pactual.
La aplicación permite a un cliente gestionar sus fondos de inversión de forma intuitiva y amigable.

📌 Funcionalidades implementadas

Listado de fondos disponibles con su monto mínimo y categoría.

Suscripción a un fondo (validando monto mínimo y saldo disponible).

Cancelación de un fondo (el monto retorna al saldo del cliente).

Historial de transacciones (aperturas y cancelaciones).

Notificación simulada (email o SMS según selección del usuario).

Validación de reglas de negocio:

Monto inicial: COP $500.000.

Mensaje de error cuando no hay saldo suficiente.

Cada transacción genera un identificador único.

🛠️ Tecnologías

Angular 17 – Framework frontend.

Angular Material / Tailwind CSS – Interfaz visual y componentes.

RxJS & Services – Manejo de estado y consumo de APIs.

TypeScript – Tipado y mantenibilidad.

Karma / Jasmine – Pruebas unitarias.

(El backend se encuentra en un repositorio aparte y expone la API REST consumida por este proyecto).

📂 Estructura del proyecto
src/
 ├── app/
 │   ├── core/            # Servicios y modelos
 │   ├── modules/fondos/  # Módulo principal con vistas
 │   ├── shared/          # Componentes compartidos
 │   └── app.component.ts
 ├── assets/
 └── environments/

▶️ Instalación y ejecución

Clonar el repositorio:

git clone https://github.com/tuusuario/btg-frontend.git
cd btg-frontend


Instalar dependencias:

npm install


Ejecutar en modo desarrollo:

ng serve


Abrir en http://localhost:4200/.



🌐 Despliegue

El proyecto está preparado para ser desplegado en la nube.

Build de producción:

ng build --configuration production


Los artefactos quedan en la carpeta dist/.

Puede desplegarse en S3 + CloudFront o mediante CloudFormation (documentación incluida en /deploy).

📖 Consideraciones

No se implementó autenticación (como lo indicaba la prueba).

El cliente es único y tiene un saldo inicial de COP $500.000.

El frontend consume el API REST expuesto por el backend.

✨ Desarrollado como parte de la prueba técnica para BTG Pactual- Ceiba