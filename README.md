# Gestoría – Plantilla Web Sencilla

Proyecto de práctica orientado a una página corporativa básica para una asesoría o gestoría. Incluye navegación con submenú, contenido distribuido en varias páginas y un formulario de contacto funcional mediante PHPMailer.

## ✨ Características

- Sitio web multipágina: Inicio, Nosotros, Contacto y secciones de Servicios.
- Menú con submenú (hover en escritorio / desplegable en móvil).
- Estilos simples y personalizables con normalize.css, styles.css y Google Fonts.
- Formulario de contacto con envío de correo vía enviar.php usando PHPMailer.
- Incluye ejemplo de Política de Privacidad editable.

## 🗂️ Estructura del proyecto

/css  
  normalize.css  
  styles.css  

/js  
  script.js  

/src (PHPMailer)  
  Exception.php  
  PHPMailer.php  
  SMTP.php  

/img (recursos gráficos)

/html-páginas principales 
- index.html  
- nosotros.html  
- contacto.html (formulario -> enviar.php)  
- fiscal.html  
- contable.html  
- laboral.html  
- tramites.html  
- politica_privacidad.html

Archivo de envío del formulario:  
- enviar.php

## 🚀 Cómo usar en local

1. Descarga o clona el repositorio.  

### Opción 1: Usando el servidor embebido de PHP (rápido y sencillo)

Asegúrate de tener PHP instalado.  
Luego, abre una terminal dentro de la carpeta del proyecto y ejecuta:

```
php -S localhost:8000 -t .
```

Ahora abre en tu navegador:  
http://localhost:8000

> Nota: Si abres el archivo `index.html` directamente (sin servidor), el formulario PHP no funcionará y no podrá enviar correos.

---

### Opción 2: Usando XAMPP (ideal si no tienes PHP instalado)

1. Instala XAMPP: https://www.apachefriends.org/es/index.html  
2. Copia la carpeta del proyecto dentro de la carpeta `htdocs`  
   - Ejemplo en Windows: `C:\xampp\htdocs\Gestoria`
3. Abre **XAMPP Control Panel** y activa **Apache**
4. En el navegador abre:  
   http://localhost/Gestoria

> 

## ✉️ Configuración del envío de correo (PHPMailer)

Edita el archivo enviar.php:

- Cambia el destinatario:  
  $mail->addAddress('tu_correo@dominio.com');

- Configura tu servidor SMTP (host, usuario, contraseña y puerto) según tu proveedor.

> Algunos proveedores requieren contraseña de aplicación para permitir el envío.

## 🧩 Personalización

| Elemento                  | Archivo / Carpeta      |
|--------------------------|------------------------|
| Colores y estilos        | css/styles.css         |
| Imágenes y logotipos     | /img                   |
| Comportamiento del menú  | js/script.js           |
| Contenido y secciones    | Archivos .html         |
| Texto legal              | politica_privacidad.html |

## ✅ Requisitos

- Navegador moderno.  
- PHP 8+ si deseas enviar correos desde el formulario.  
- Credenciales SMTP válidas.

## 📜 Créditos

- PHPMailer, incluido en /src.


