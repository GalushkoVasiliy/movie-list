import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FunctionsService {

    public isMobile = false;
    public isDesktop = false;

    set typeDevice(value) {
        if (value) {
            this.isDesktop = true;
            this.isMobile = false;
        } else {
            this.isDesktop = false;
            this.isMobile = true;
        }
    }

    constructor() {
        this.windowSize();
        this.resizeListener();
    }

    public resizeListener() {
        window.addEventListener('resize', () => this.windowSize());
    }

    public windowSize() {
        document.documentElement.clientWidth < 1200 ? this.typeDevice = true : this.typeDevice = false;
    }
}
