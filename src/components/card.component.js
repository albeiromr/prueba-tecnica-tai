/**
 * Representa una tarjeta para mostrar datos en la interfaz de usuario.
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
                        <span>Speed:</span> 
                        <span class="card-sub-value__value"> ${this.data.workunits[0].speed}</span>
                    </div>
                </div>

                <div class="card-divider"></div>

                <p class="card-subtitle">Active work order</p>
                <div class="card-work-order">
                    <div class="card-sub-work-order-value">
                        <span class="card-sub-value__value"> ${this.data.workunits[0].wohnumber}</span>
                    </div>
                </div>

                <p class="card-subtitle">Active work item</p>
                <div class="card-work-item">
                    <div class="card-sub-work-item-value">
                        <span class="card-sub-value__value"> ${this.data.workunits[0].matname}</span>
                    </div>
                </div>


                <p class="card-subtitle">Mezcla</p>
                <div class="card-divider"></div>

                <div class="card-sit-color">
                    <div class="card-color-key">
                        <span class="card-color-key__value">Color</span>
                    </div>
                    <div class="card-mix-value">${this.data.workunits[0].sitcolor}</div>
                </div>

            </article>
        `;
    }
}