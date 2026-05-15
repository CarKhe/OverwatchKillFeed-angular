import { Component, ComponentRef, signal, ViewChild, ViewContainerRef } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { KillFeed } from "./Components/kill-feed/kill-feed";

const mockKills = [
  { killerName: 'Tracer', victimName: 'Reaper', killerHero: 'Tracer', victimHero: 'Reaper', normalKill: false, killMethodName: 'Ability-tracer4', killAsist: [], isAlly: true, critic: true, onFire: true },
  { killerName: 'Kiriko', victimName: 'Bastion', killerHero: 'Kiriko', victimHero: 'Bastion', normalKill: false, killMethodName: 'Quick_melee', killAsist: ['Cassidy'], isAlly: false, critic: false, onFire: false },
  { killerName: 'Reaper', victimName: 'Cassidy', killerHero: 'Reaper', victimHero: 'Cassidy', normalKill: true, killMethodName: '', killAsist: [], isAlly: true, critic: false, onFire: false },
  { killerName: 'Bastion', victimName: 'Tracer', killerHero: 'Bastion', victimHero: 'Tracer', normalKill: false, killMethodName: 'Ability-dva2', killAsist: ['Kiriko'], isAlly: false, critic: true, onFire: true },
  { killerName: 'Cassidy', victimName: 'Kiriko', killerHero: 'Cassidy', victimHero: 'Kiriko', normalKill: false, killMethodName: 'Quick_melee', killAsist: [], isAlly: true, critic: false, onFire: true },
  { killerName: 'Reaper', victimName: 'Tracer', killerHero: 'Reaper', victimHero: 'Tracer', normalKill: false, killMethodName: 'Ability-dva2', killAsist: ['Bastion', 'Cassidy'], isAlly: false, critic: false, onFire: false },
];

@Component({
  selector: 'app-root',
  imports: [],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected readonly title = signal('OverwatchKillFeed-angular');

  @ViewChild('killFeedContainer', { read: ViewContainerRef }) container!: ViewContainerRef;

  private spawnInterval: any;
  private killIndex = 0;

  ngOnInit(): void {
    // this.spawnInterval = setInterval(() => {
    //   const data = mockKills[this.killIndex % mockKills.length];
    //   this.killIndex++;
    //   this.addKillFeed(data);
    // }, 1000);
  }

  ngOnDestroy(): void {
    clearInterval(this.spawnInterval);
  }

  addKillFeed(data: any) {
    const ref: ComponentRef<KillFeed> = this.container.createComponent(KillFeed);
    

    ref.instance.killerName = data.killerName;
    ref.instance.victimName = data.victimName;
    ref.instance.killerHero = data.killerHero;
    ref.instance.victimHero = data.victimHero;
    ref.instance.normalKill = data.normalKill;
    ref.instance.killMethodName = data.killMethodName;
    ref.instance.killAsist = data.killAsist ?? [];
    ref.instance.isAlly = data.isAlly;
    ref.instance.critic = data.critic;
    ref.instance.onFire = data.onFire;
    ref.instance.ultimateKill = data.ultimateKill;
    ref.instance.ngOnInit();

    // setTimeout(() => {
    //   ref.destroy();
    // }, 5000);
  }
}
