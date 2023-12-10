import * as vscode from 'vscode';
import { DallClockWebviewProvider } from './dall-clock';
import { GitBranchWebviewProvider } from './git-branch';

export function activate(context: vscode.ExtensionContext) {
    const outputChannel = vscode.window.createOutputChannel('Dall House Log', { log: true });

    const clockProvider = new DallClockWebviewProvider(context, outputChannel);
    // const gitBranchProvider = new GitBranchWebviewProvider(context, outputChannel);

    context.subscriptions.push(
        vscode.window.registerWebviewViewProvider('dall-clock', clockProvider),
        // vscode.window.registerWebviewViewProvider('dall-git-branch', gitBranchProvider),
        vscode.commands.registerCommand('dall-clock.refresh', async () =>
            clockProvider.refresh(true)),
        vscode.commands.registerCommand('dall-clock.open', async () =>
            clockProvider.open())
    );
}
