class Clock {
  constructor() {
    const nowish = new Date();
    this.hours = nowish.getHours();
    this.minutes = nowish.getMinutes();
    this.seconds = nowish.getSeconds();

    this.printTime();
    setInterval(this._tick.bind(this), 1000);
  }

  // 1. Create a Datthis.hours = hourse object.
  // 2. Store the hours, minutes, and seconds.
  // 3. Call printTime.
  // 4. Schedule the tick at 1 second intervals.
  printTime() {
    console.log(`${this.hours}:${this.minutes}:${this.seconds}`);
    // Format the time in HH:MM:SS
    // Use console.log to print it.
  }



  _tick() {
    this.seconds++;

    if (this.seconds === 60) {
      this.minutes++;
      this.seconds = 0;
    }

    if (this.minutes === 60) {
      this.hours++;
      this.minutes = 0;
    }

    if (this.hours === 24) {
      this.hours = 0;
    }

    this.printTime();
    // 1. Increment the time by one second.
    // 2. Call printTime.
  }
}

const clock = new Clock();
// clock.tick();
