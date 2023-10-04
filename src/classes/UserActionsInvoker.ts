import { Command } from "../interfaces/Command";

export class UserActionsInvoker {
  private command!: Command;

  setCommand(command: Command) {
    this.command = command;
  }

  executeCommand() {
    this.command.execute();
  }

  undoCommand() {
    if (this.command.undo) {
      this.command.undo();
    }
  }
}
