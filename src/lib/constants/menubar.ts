import type { Menubar } from '$lib/types/menubar';

/**
 * NDS_MENUBAR_DATA
 * Defines the static menu structure for the Nexus DSM UI MVP.
 * This structure is consumed by the Menubar component to render interactive dropdowns.
 */
export const NDS_MENUBAR_DATA: Menubar = [
	// --- 1. FILE Menu (Basic I/O and Exit) ---
	{
		label: 'File',
		id: 'file',
		active: false,
		items: [
			{ type: 'action', label: 'New File', actionId: 'file.new', accelerator: 'Ctrl+N' },
			{ type: 'action', label: 'Open Data...', actionId: 'file.open', accelerator: 'Ctrl+O' },
			{ type: 'separator' },
			{
				type: 'action',
				label: 'Save',
				actionId: 'file.save',
				accelerator: 'Ctrl+S',
				disabled: true
			},
			{ type: 'action', label: 'Save As...', actionId: 'file.saveAs' },
			{ type: 'separator' },
			{ type: 'action', label: 'Close View', actionId: 'file.close', accelerator: 'Ctrl+W' }
		]
	},

	// --- 2. EDIT Menu (Undo/Redo is essential for any editor) ---
	{
		label: 'Edit',
		id: 'edit',
		active: false,
		items: [
			{ type: 'action', label: 'Undo', actionId: 'edit.undo', accelerator: 'Ctrl+Z' },
			{ type: 'action', label: 'Redo', actionId: 'edit.redo', accelerator: 'Ctrl+Y' },
			{ type: 'separator' },
			{ type: 'action', label: 'Find', actionId: 'edit.find', accelerator: 'Ctrl+F' }
		]
	},

	// --- 3. RUN/VALIDATION Menu (Core Nexus Functionality) ---
	{
		label: 'Run',
		id: 'run',
		active: false,
		items: [
			{ type: 'action', label: 'Run Validation', actionId: 'run.validation', accelerator: 'F5' },
			{ type: 'action', label: 'Debug Validation', actionId: 'run.debug', accelerator: 'F10' },
			{ type: 'separator' },
			{ type: 'action', label: 'Open Output Log', actionId: 'run.log.open' }
		]
	},

	// --- 4. HELP Menu (Documentation/About) ---
	{
		label: 'Help',
		active: false,
		id: 'help',
		items: [
			{ type: 'action', label: 'Documentation', actionId: 'help.docs' },
			{ type: 'action', label: 'About Nexus DSM UI', actionId: 'help.about' }
		]
	}
];
