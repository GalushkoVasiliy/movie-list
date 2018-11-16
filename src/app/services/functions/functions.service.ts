import { Injectable } from '@angular/core';
import { fromEvent, ReplaySubject, Subject } from 'rxjs';
import { device } from '../../../assets/interfaces/device';
import {environment} from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class FunctionsService {

    public deviceSubject = new ReplaySubject(1);

    constructor() {
        this.windowSize();
        this.resizeListener();
    }

    /**
     * Function listener event resize browser window
     */
    public resizeListener() {
        fromEvent(window, 'resize').subscribe(() => this.windowSize());
    }

    /**
     * Function send next value to subject device type
     */
    public windowSize() {
        document.documentElement.clientWidth < 1200 ?
            this.deviceSubject.next({ isDesktop: false, isMobile: true }) :
            this.deviceSubject.next({ isDesktop: true, isMobile: false });
    }

    /**
     * function return image for post if img not found
     * @param value
     */
    public posterPathValidation(value): string {
        return value === null ? value = `${environment.pathToDefaultImg}` : value = `${environment.pathImgFromAPI}${value}`;
    }
}
