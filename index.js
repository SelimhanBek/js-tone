class Application {
  constructor() {
    this.synth = undefined;
    this.samplesPath = "https://storage.googleapis.com/melody-mixer/piano/";
    this.samples = {};
    this.players = undefined;
    this.NUM_NOTES = 88;
    this.MIDI_START_NOTE = 21;
  }

  /* Application Init */
  initialize() {
    let div = document.createElement("div");
    div.className = "center";
    div.id = "AppStartButtonDiv";
    document.body.appendChild(div);

    let btn = document.createElement("button");
    btn.className = "button";
    btn.innerHTML = "Hello Tone.Js";
    btn.onclick = function () {
      app.helloTone();
    };
    div.appendChild(btn);

    let playBtn = document.createElement("button");
    playBtn.className = "button";
    playBtn.innerHTML = "Tone Synth";
    playBtn.onclick = function () {
      app.toneSynth();
    };
    div.appendChild(playBtn);

    let tgBtn = document.createElement("button");
    tgBtn.className = "button";
    tgBtn.innerHTML = "Play More & More";
    tgBtn.onclick = function () {
      app.toneTrigger();
    };
    div.appendChild(tgBtn);

    let tmBtn = document.createElement("button");
    tmBtn.className = "button";
    tmBtn.innerHTML = "Timer";
    tmBtn.onclick = function () {
      app.time();
    };
    div.appendChild(tmBtn);

    let pBtn = document.createElement("button");
    pBtn.className = "button";
    pBtn.innerHTML = "Poly Synth";
    pBtn.onclick = function () {
      app.polySynth();
    };
    div.appendChild(pBtn);

    let player = document.createElement("button");
    player.className = "button";
    player.innerHTML = "Player";
    player.onclick = function () {
      app.player();
    };
    div.appendChild(player);

    let sampler = document.createElement("button");
    sampler.className = "button";
    sampler.innerHTML = "Sampler";
    sampler.onclick = function () {
      app.sampler();
    };
    div.appendChild(sampler);

    let players = document.createElement("button");
    players.className = "button";
    players.innerHTML = "Players";
    players.onclick = function () {
      app.playerss();
    };
    div.appendChild(players);
  }

  /* Hello Tone*/
  helloTone() {
    //create a synth and connect it to the main output (your speakers)
    this.synth = new Tone.Synth().toMaster();

    //play a middle 'C' for the duration of an 8th note
    this.synth.triggerAttackRelease("C4", "8n");
  }

  /* Finish the notes */
  toneSynth() {
    const now = Tone.now();

    // trigger the attack immediately
    this.synth.triggerAttack("C4", now);

    // wait one second before triggering the release
    this.synth.triggerRelease(now + 1);
  }

  /* Play more and more */
  toneTrigger() {
    const now = Tone.now();
    this.synth.triggerAttackRelease("C4", "8n", now);
    this.synth.triggerAttackRelease("E4", "8n", now + 0.5);
    this.synth.triggerAttackRelease("G4", "8n", now + 1);
  }

  /* Time */
  time() {
    setInterval(() => console.log(Tone.now()), 100);
  }

  /* PolySynth -- Other Enstruments */
  polySynth() {
    const synth = new Tone.PolySynth(Tone.Synth).toMaster();
    const now = Tone.now();
    synth.triggerAttack("D4", now);
    synth.triggerAttack("F4", now + 0.5);
    synth.triggerAttack("A4", now + 1);
    synth.triggerAttack("C5", now + 1.5);
    synth.triggerAttack("E5", now + 2);
    synth.triggerRelease(["D4", "F4", "A4", "C5", "E5"], now + 4);
  }

  /* Player */
  player() {
    const player = new Tone.Player(
      //"https://tonejs.github.io/audio/berklee/gong_1.mp3"
      "https://storage.googleapis.com/melody-mixer/piano/35.mp3"
    ).toMaster();
    Tone.loaded().then(() => {
      player.fadeOut = 0.05;
      player.fadeIn = 0.01;
      player.start();
    });
  }

  /* Sampler */
  sampler() {
    const sampler = new Tone.Sampler({
      urls: {
        C4: "C4.mp3",
        "D#4": "Ds4.mp3",
        "F#4": "Fs4.mp3",
        A4: "A4.mp3",
      },
      release: 1,
      baseUrl: "https://tonejs.github.io/audio/salamander/",
    }).toDestination();

    Tone.loaded().then(() => {
      sampler.triggerAttackRelease(["Eb4", "G4", "Bb4"], 4);
    });
  }

  /* Players */
  playerss() {
    for (
      var i = this.MIDI_START_NOTE;
      i < this.NUM_NOTES + this.MIDI_START_NOTE;
      i++
    ) {
      this.samples[i] = this.samplesPath + i + ".mp3";
    }

    var players = new Tone.Players(this.samples, function onPlayersLoaded() {
      console.log("Tone.js players loaded");
    }).toMaster();

    var numNoteHolds = 2; //End time - start time
    var midiNote = 36;
    var duration = Tone.Transport.toSeconds("8n") * (numNoteHolds || 1);
    var player = players.get(midiNote);
    player.fadeOut = 0.05;
    player.fadeIn = 0.01;
    player.start(Tone.now(), 0, duration);
  }
}

const app = new Application();
app.initialize();
