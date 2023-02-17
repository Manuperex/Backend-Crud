# Backend-Crud

En este Repositorio se construyo un servidor con Express y se conecto a una base de datos no relacional de Mongo DB por medio de Mongoose.

Se instalaron varias dependencias que fueron:
  "dependencies" 
  
   
   <li>
    "body-parser": lo uso para convertir los datos en Json.
    
   <li> "cors": Se usa para que nos quite el error CORS al tener peticiones desde el frontend.
    <li>
     "express": La dependencia mas importante porque en ella creamos el servidor.
    
 <li> 
     "mongoose": Es el ODM de mongo db que nos facilita la conexion con la base de datos.
    <li> 
     "nodemon": Nos ayuda a correr el servidor y que se actualize cada vez que modificamos algo en él.
    
   
Se conecto el servidor con una base de datos no relacional, que fue mongoDB Atlas y se uso directamente en el navegador, no se descargo mongo en el desktop.

![image](https://user-images.githubusercontent.com/104181677/219679241-646320a3-783c-434b-97fe-b6e898e0655b.png)

y se hizo la conexion por medio de Mongoose directamente en el codigo.

![image](https://user-images.githubusercontent.com/104181677/219679470-17fbc737-4d9a-4565-ae67-d3318ee20c20.png)

Se hizo consulta de Leer, Agregar, actualizar y Eliminar la data de la base de datos.

Tuve problemas con CORS tanto en local como despues del deploy del servidor y lo solucione, inatalando cors( npm install cors) y agregando una configuracion en el server.js, que es la siguiente:

![image](https://user-images.githubusercontent.com/104181677/219681653-e5dcbee7-c5e9-40b4-8b2f-b14d5a957ebe.png)

con eso ya no sale mas el error de CORS.

El deploy del servidor se hizo en ashboard.render.com que es una pagian web donde puedes agregar gratis tu servidor.

![image](https://user-images.githubusercontent.com/104181677/219682579-8e3190f8-6a56-480f-9a17-7fa3820f6bce.png)


