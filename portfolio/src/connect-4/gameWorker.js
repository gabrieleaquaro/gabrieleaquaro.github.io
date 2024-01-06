/* eslint-disable import/no-anonymous-default-export */
/* eslint-disable no-restricted-globals */

export default () => {
  const hashedStates = new Set();
  const N_COLUMNS = 7;
  const N_ROWS = 6;
  const ALPHA = 1;
  const RED_USER = "0";
  const YELLOW_AI = "1";
  const EMPTY_BOARD = {
    0: ["", "", "", "", "", ""], // string like "0101" representing red/yellow/red/yellow
    1: ["", "", "", "", "", ""],
    2: ["", "", "", "", "", ""],
    3: ["", "", "", "", "", ""],
    4: ["", "", "", "", "", ""],
    5: ["", "", "", "", "", ""],
    6: ["", "", "", "", "", ""],
  };
  const hashBoard = (board) => {
    let hash = "";
    Object.values(board).forEach((col) => {
      hash += col.map((el) => (el ? el : " "));
    });
    return hash;
  };

  class GameState {
    constructor({ board, turn }) {
      this.board = board ?? EMPTY_BOARD;
      this.turn = turn ?? true; // If true -> Ai turn ; else User Turn
      this.children = [];
      this.value = undefined;
    }

    getBestChildren() {
      return this.children[0];
    }

    checkConnect4Winner() {
      // Check rows
      const board = this.board;
      for (let row = 0; row < N_ROWS; row++) {
        for (let col = 0; col < 4; col++) {
          let player = board[col][row];
          if (
            player !== "" &&
            player === board[col + 1][row] &&
            player === board[col + 2][row] &&
            player === board[col + 3][row]
          ) {
            return true;
          }
        }
      }

      // Check columns
      for (let col = 0; col < N_COLUMNS; col++) {
        for (let row = 0; row < 3; row++) {
          let player = board[col][row];
          if (
            player !== "" &&
            player === board[col][row + 1] &&
            player === board[col][row + 2] &&
            player === board[col][row + 3]
          ) {
            return true;
          }
        }
      }

      // Check diagonals
      for (let col = 0; col < 4; col++) {
        for (let row = 0; row < 3; row++) {
          let player = board[col][row];
          if (
            player !== "" &&
            player === board[col + 1][row + 1] &&
            player === board[col + 2][row + 2] &&
            player === board[col + 3][row + 3]
          ) {
            return player;
          }
        }
      }

      for (let col = 0; col < 4; col++) {
        for (let row = 3; row < 6; row++) {
          let player = board[col][row];
          if (
            player !== "" &&
            player === board[col + 1][row - 1] &&
            player === board[col + 2][row - 2] &&
            player === board[col + 3][row - 3]
          ) {
            return player;
          }
        }
      }

      // No winner yet
      return 0;
    }

    isBoardFull() {
      return (
        Object.values(this.board).findIndex((el) => el[5] === "") === undefined
      );
    }

    explore_subtree() {
      const winner = this.checkConnect4Winner();
      if (winner || this.isBoardFull()) {
        this.value = !winner ? 0 : winner === YELLOW_AI ? 1 : -1;
        return;
      }
      this.popualteChildren();
      let found_children_value = this.turn ? -1 : 1;
      for (const child of this.children) {
        if (!child) continue; // if child is null it's a repeated state
        child.explore_subtree();
        if (this.turn) {
          // If ai turn the value of this state is the max value of the children
          if (child.value > found_children_value)
            found_children_value = child.value;
          if (found_children_value === ALPHA) {
            this.value = 1;
            return;
          }
        } else {
          // If user turn the value of this state is the minimum value of the children
          if (child.value < found_children_value)
            found_children_value = child.value;
          if (found_children_value < ALPHA) {
            this.value = found_children_value;
            return;
          }
        }
      }
      this.value = found_children_value;
    }

    popualteChildren() {
      this.children = Object.keys(this.board)
        .filter((column) => !this.board[column][5])
        .map((column) => {
          const clonedBoard = {
            0: [...this.board[0]],
            1: [...this.board[1]],
            2: [...this.board[2]],
            3: [...this.board[3]],
            4: [...this.board[4]],
            5: [...this.board[5]],
            6: [...this.board[6]],
          };
          clonedBoard[column][clonedBoard[column].findIndex((el) => !el)] = this
            .turn
            ? YELLOW_AI
            : RED_USER;
          const hashed = hashBoard(clonedBoard);
          console.log(hashed);
          if (hashedStates.has(hashed)) return null;
          hashedStates.add(hashed);
          return new GameState({ board: clonedBoard, turn: !this.turn });
        });
    }
  }

  let game = new GameState({});

  self.onmessage = function (event) {
    if (event.data.method === "init") {
      self.postMessage({ method: "init", result: "loading" });
      self.postMessage({ method: "get-state", result: game });
      console.log("Starting game evaluation, taking my time... ");
      //game.explore_subtree();
      console.log("Game evaluation done. ");
      self.postMessage({ method: "init", result: "done" });
    } else if (event.data.method === "update-on-move") {
      const column = event.data.column;
      game = game.children.find(
        (el) =>
          el.board[column].filter((el) => el).length ===
          game.board[column].filter((el) => el).length + 1
      );
      return { method: "get-state", result: game };
    } else if (event.data.method === "play-move") {
      game = game.getBestChildren();
      self.postMessage({ method: "get-state", result: game });
    } else if (event.data.method === "test-state") {
      console.log(game.board);
      game.popualteChildren();
      console.log(game.children);
      console.log(game.isBoardFull());
      console.log(game.checkConnect4Winner());
      game = game.getBestChildren();
      self.postMessage({ method: "get-state", result: game });
    }
  };
};
