'use strict';

export class HowLong {
    constructor(target) {
        this.nesting = { value: 0 };

        return new Proxy(target, this);
    }

    getPrototypeOf(target) {
        return this.chain(target);
    }

    chain(proto) {
        const p = Object.getPrototypeOf.bind(Object);

        if (p(proto) === null) {
            return this.nesting;
        } else {
            this.nesting.value += 1;
            return this.chain(p(proto));
        }
    }
}
