import { Result } from "./result";
import * as _ from "lodash";

export class Scoreboard {
  private results: Result[] = [];

  addResult(newResult: Result): void {
    this.results.push(newResult);
    let allCapsName = _.upperCase(newResult.playerName);
    console.log(allCapsName);
  }

  updateScoreboard(): void {
    let output: string = "<h2>Scorebaord</h2>";

    for (let index = 0; index < this.results.length; index++) {
      const result: Result = this.results[index];
      output = `<h4> ${result.playerName}: ${result.score}/${result.problemCount} for factor ${result.factor} </h4>`;
    }

    const scoresElement: HTMLElement = document.getElementById("scores")!;
    scoresElement.innerHTML = output;
  }
}
