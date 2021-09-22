# Anthony - Shop


![fillcart](https://github.com/anthonyperniah/anthonyperniah-shop/blob/master/src/videos/fill_the_cart.gif?raw=true "fillcart")




Este simulador de tienda, esta realizado con React, para todos los componentes visuales, y ademas posee la capacidad de persistir informacion en firebase, tanto de ordenes, como de los productos disponibles en la tienda.

Por cada orden o compra realizada se guarda en Firebase una traza de la misma, con datos de usuario, datos de producto, y tambien con el status "pending" si no se ha finalizado, y "paid" si ya esta finalizada.

##### De esta manera se ve la orden cuando no ha finalizado:

![orden](https://github.com/anthonyperniah/anthonyperniah-shop/blob/master/src/img/order1.png?raw=true "orden")

##### Y con esta bandera en "paid" cuando ya fue finalizada:

![orden](https://github.com/anthonyperniah/anthonyperniah-shop/blob/master/src/img/order2.png?raw=true "orden")

##### En el front, posee botones de navegacion, tanto como para ver por categorias

![categorias](https://github.com/anthonyperniah/anthonyperniah-shop/blob/master/src/img/categorias.png?raw=true "categorias")


##### Como tambien para cargar los datos de usuario e identificarse , de manera que la orden salga personalizada.

![user](https://github.com/anthonyperniah/anthonyperniah-shop/blob/master/src/img/user_inf.png?raw=true "user")

##### Ademas del Main | Home

![main](https://github.com/anthonyperniah/anthonyperniah-shop/blob/master/src/img/main.png?raw=true "main")



### Flujo de la app:

Primero tendriamos que cargar productos al carrito de compras, y tenemos dos modos, puede ser comprar una unidad, mediante un boton en el Home o podriamos entrar al detalle del producto y comprar mas cantidad.

![compra1](https://github.com/anthonyperniah/anthonyperniah-shop/blob/master/src/videos/compra1.gif?raw=true "compra1")

Posteriormente luego de llenar el cart con los productos que queremos, tenemos que llenar nuestros datos (Si no lo hicimos anteriormente) y finalizar la compra.
(El programa mostrara una simulacion de pago durante 5 segundos, y luego lo redirecciona al inicio)

![compra2](https://github.com/anthonyperniah/anthonyperniah-shop/blob/master/src/videos/compra2.gif?raw=true "compra2")



[@AnthonyPerniaH](https://twitter.com/AnthonyPerniaH)

