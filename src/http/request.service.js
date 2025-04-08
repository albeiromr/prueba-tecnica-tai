import { HttpErrorHandlingService } from "./error-handling.service.js";

/**
 * Servicio centralizado para realizar todas las consultas http
 */
export class RequestService {
    static endpoint = 'https://apimocha.com/prueba-tecnica-tai/api/LoadTFunction';
    static body = {
        FuncName: "Tai.Backend.Qplant",
        ActiveActor: "WKU11",
        FuncParam01: "OEEMONITOR2",
        FuncParam02: "SPAIN",
        FuncParam03: "",
        FuncParam04: "",
        FuncParam05: "",
        TraceLog: "Y"
    };
    static bearerToken = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c';


    /**
     * hace una petición post para obtener los datos requeridos.
     */
    static async fetchLoadTFunction() {
        try {
            const response = await fetch(this.endpoint, {
                method: 'post',
                body: JSON.stringify(this.body),
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${this.bearerToken}`,
                },
            });
            if (!response.ok) HttpErrorHandlingService.handleHttpError(new Error(`Error en solicitud http! Status: ${response.status}`));
            const data = await response.json();
            return data;

        } catch (error) {
            HttpErrorHandlingService.handleHttpError(error);
        }
    }

}


