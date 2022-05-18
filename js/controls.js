class Controls {

    constructor() {
        this.forward = false;
        this.reverse = false;
        this.right = false;
        this.left = false;

        this.#addKeyboardListeners();
    }


    #addKeyboardListeners() {

        [{eventName: 'keyup', value: false}, {eventName: 'keydown', value: true}].forEach(({eventName, value}) => {
            document.addEventListener(eventName, e => {
                switch (e.key) {
                    case 'ArrowUp':
                        return this.forward = value;
                    case 'ArrowDown':
                        return this.reverse = value;
                    case 'ArrowRight':
                        return this.right = value;
                    case 'ArrowLeft':
                        return this.left = value;

                }
            })
        })
    }

}