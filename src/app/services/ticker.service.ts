import { Injectable, signal, effect } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class TickerService {
	private readonly BASE_INTERVAL = 100;

	private _tick = signal(0);
	tick = this._tick.asReadonly();

	private _speed = signal(1);
	speed = this._speed.asReadonly();

	private _running = signal(false);
	running = this._running.asReadonly();

	private timerId: number | null = null;

	constructor() {
		effect(() => {
			const running = this._running();
			const speed = this._speed();

			this.stopTimer();

			if (!running) return;

			const delay = this.BASE_INTERVAL / speed;

			this.timerId = window.setInterval(() => {
				this._tick.update(v => v + 1);
			}, delay);
		});
	}

	start() {
		this._running.set(true);
	}

	stop() {
		this._running.set(false);
	}

	setSpeed(speed: number) {
		if (speed <= 0) return;
		this._speed.set(speed);
	}

	faster() {
		this._speed.update(v => v * 2);
	}

	slower() {
		this._speed.update(v => Math.max(0.25, v / 2));
	}

	reset() {
		this._tick.set(0);
	}

	private stopTimer() {
		if (this.timerId !== null) {
			clearInterval(this.timerId);
			this.timerId = null;
		}
	}
}