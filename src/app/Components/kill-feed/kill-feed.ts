import { NgClass } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { MatIcon } from '@angular/material/icon';

@Component({
  selector: 'app-kill-feed',
  imports: [MatIcon,NgClass],
  templateUrl: './kill-feed.html',
  styleUrl: './kill-feed.scss',
})
export class KillFeed implements OnInit {

  private HeroesIconsPath: string = 'Heroes_Icons/';
  private AbilitiesIconsPath: string = 'Abilities_Icons/';
  @Input() killerName: string = 'Kiriko';
  @Input() killerHero: string = 'Kiriko';
  @Input() victimName: string = 'Reaper';
  @Input() victimHero: string = 'Reaper';
  @Input() normalKill: boolean = true;
  @Input() isAlly: boolean = true;
  @Input() killAsist: string[] = [];
  @Input() killMethodName: string = 'Ability-dva2';
  killerImage: string = '';
  victimImage: string = '';
  killMethod: string = '';
  


  ngOnInit(): void {
    this.killerImage = this.HeroesIconsPath + this.killerHero+'.webp';
    this.victimImage = this.HeroesIconsPath + this.victimHero+'.webp';
    this.killMethod = this.AbilitiesIconsPath + this.killMethodName+'.webp';
  }




}
