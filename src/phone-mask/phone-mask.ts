import { Directive, ElementRef, HostListener, Renderer } from '@angular/core';

var VMasker = require('vanilla-masker');

@Directive({
    selector: '[TelefoneMask]'
})
export class TelefoneMask{
    public nativeElement: HTMLInputElement;

    constructor(public element: ElementRef, public render: Renderer) { 
        this.nativeElement = this.element.nativeElement;
        
        this.render.listen(this.nativeElement, 'keyup', () => {
            const text = (this.nativeElement.value).replace(/[_\W]+/g,'');            
            
            const mask = text.length < 11 ? '(99) 9999-9999?9' : '(99) 9 9999-9999';
            
            VMasker(this.nativeElement).maskPattern(mask);
        });
    }
}
