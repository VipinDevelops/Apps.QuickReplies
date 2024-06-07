import {
	IAppAccessors,
	IConfigurationExtend,
	IEnvironmentRead,
	ILogger,
} from '@rocket.chat/apps-engine/definition/accessors';
import { App } from '@rocket.chat/apps-engine/definition/App';
import { IAppInfo } from '@rocket.chat/apps-engine/definition/metadata';
import { QuickCommand } from './src/commands/QuickCommand';

export class QuickRepliesApp extends App {
	constructor(info: IAppInfo, logger: ILogger, accessors: IAppAccessors) {
		super(info, logger, accessors);
	}
	public async initialize(
		configuration: IConfigurationExtend,
		_environmentRead: IEnvironmentRead,
	): Promise<void> {
		await configuration.slashCommands.provideSlashCommand(
			new QuickCommand(this),
		);
	}
}