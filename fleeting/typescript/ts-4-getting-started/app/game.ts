import { getValue } from "./utility";
import { Result } from "./result";
import { Scoreboard as ResultPanel } from "./scoreboard";
import { Player } from "./player";

export class Game {
  private scoreboard: ResultPanel = new ResultPanel();
  // player: Player;
  // problemCount: number;
  // factor: number;

  // constructor(newPlayer: Player, numOfProbelms: number, multifactor: number) {
  //   this.player = newPlayer;
  //   this.problemCount = numOfProbelms;
  //   this.factor = multifactor;
  // }

  // So this constructor is equivalent to above commented code.
  // you can also use other access modifier.
  // Equivaent to data classes in kotlin, records in java
  constructor(
    public player: Player,
    public problemCount: number,
    public factor: number
  ) {}

  displayGame(): void {
    //create the html for current game
    let gameForm: string = "";
    for (let i = 1; i <= this.problemCount; i++) {
      gameForm += '<div class="form-group">';
      gameForm +=
        '<label for="answer' + i + '" class="col-sm-2 control-label">';
      gameForm += String(this.factor) + " x " + i + " = </label>";
      gameForm +=
        '<div class="col-sm-1"><input type="text" class="form-control" id="answer' +
        i +
        '" size="5" /></div>';
      gameForm += "</div>";
    }

    // add the new game to the page
    const gameElement: HTMLElement = document.getElementById("game")!;
    gameElement.innerHTML = gameForm;

    // enable the calculate score button
    document.getElementById("calculate")!.removeAttribute("disabled");
  }

  calculateScore(): void {
    let score: number = 0;

    // loop through the text boxes and calculate the number that are correct
    for (let i = 1; i <= this.problemCount; i++) {
      const answer: number = Number(getValue("answer" + i));
      if (i * this.factor === answer) {
        score++;
      }
    }

    // create a new result object to pass to the scoreboard
    const result: Result = {
      playerName: this.player.name,
      score: score,
      problemCount: this.problemCount,
      factor: this.factor,
    };

    // add the result and update the scoreboard
    this.scoreboard.addResult(result);
    this.scoreboard.updateScoreboard();

    // disable the calculate score button
    document.getElementById("calculate")!.setAttribute("disabled", "true");
  }
}
