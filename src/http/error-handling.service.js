/**
 * Servicio centralizado para dar manejo a los errores http
 */
export class HttpErrorHandlingService {

    /**
     * da manejo a los errors de las peiciones http
     * @param error representa el error que ocurrió en la petición
     */
    static handleError(error) {
        // Aquí podemos agregar más lógica para manejar errores, 
        // como mostrar un mensaje al usuario o registrar el error 
        // en un microservicio o base de datos de fallas.

        console.error('Lo sentimos, ha ocurrido un error, por favor intentelo nuevamente:', error.message);
    }

}
