import { Component, ElementRef, EventEmitter, ViewChild } from '@angular/core';
import { EventManager } from '@angular/platform-browser';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent {
  @ViewChild ('menu') menu!: ElementRef<any>
  @ViewChild('menuBtn') menuBtn!: ElementRef<any>;

  toggleHamburger() {
    const menuBtn = this.menuBtn.nativeElement;
    const menu = this.menu.nativeElement;

    menuBtn.classList.toggle('open');
    menu.classList.toggle('flex');
    menu.classList.toggle('hidden');
  }}
