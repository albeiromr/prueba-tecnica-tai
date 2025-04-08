/**
 * Representa una tarjeta usada para mostrar datos en la interfaz de usuario.
 */
export class Card {
    data;

    constructor(data) {
        this.data = data;
    }

    render() {
        return `
            <article class="card">
                <h1 class="card-title">${this.data.workunits[0].wkuname}</h1>
                <div class="card-divider"></div>
                <div class="card-environment-speed">
                    <div class="card-environment">${this.data.workunits[0].sitname}</div>
                    <div class="card-sub-value">
                        <span>speed:</span> 
                        <span class="card-sub-value__value"> ${this.data.workunits[0].speed}</span>
                    </div>
                </div>
            </article>
        `;
    }
}