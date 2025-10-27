import type { StatusItemMeta } from '$lib/types/statusbar';

export const CORE_STATUS_ITEMS: StatusItemMeta[] = [
	{
		id: 'dataset-name',
		role: 'context',
		label: 'Untitled Dataset',
		tooltip: 'Current dataset name',
		priority: 1000,
		source: 'core',
		installedAt: Date.now()
	},
	{
		id: 'schema-status',
		role: 'context',
		label: 'Schema: Valid',
		tooltip: 'Schema validation status',
		priority: 1000,
		source: 'core',
		installedAt: Date.now()
	},
	{
		id: 'file-format',
		role: 'context',
		label: 'CSV',
		tooltip: 'Current file format',
		priority: 1000,
		source: 'core',
		installedAt: Date.now()
	},
	{
		id: 'nexi-status',
		role: 'action',
		label: 'Nexi Ready',
		tooltip: 'Nexi AI assistant status',
		priority: 1000,
		source: 'core',
		installedAt: Date.now()
	},
	{
		id: 'validation-panel',
		role: 'action',
		label: 'Validation',
		tooltip: 'Open validation dashboard',
		onClick: () => openValidationPanel(),
		priority: 1000,
		source: 'core',
		installedAt: Date.now()
	}
];
function openValidationPanel() {
	throw new Error('Function not implemented.');
}
