import { Directive, ElementRef, HostListener, Renderer } from '@angular/core';

var VMasker = require('vanilla-masker');

@Directive({
    selector: '[TelefoneMask]'
})
export class TelefoneMask{
    public nativeElement: HTMLInputElement;

    constructor(public element: ElementRef, public render: Renderer) {
        console.log(element);
        this.nativeElement = this.element.nativeElement;
        
        this.render.listen(this.nativeElement, 'keyup', () => {
            var s = this.nativeElement.value;
            var s=s.replace(/[_\W]+/g,'');
            var n=s.length;
            if(n<11){var m='(99) 9999-9999?9';}else{var m='(99) 9 9999-9999';}	   
            VMasker(this.nativeElement).maskPattern(m);
        });
    }
}