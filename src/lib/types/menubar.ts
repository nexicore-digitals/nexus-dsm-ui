/**
 * Represents a single executable action within a submenu (e.g., 'Save', 'New File').
 */
export interface MenuItemAction {
	type: 'action';
	label: string;
	actionId: string; // Unique ID for the event dispatcher (e.g., 'file.save', 'edit.undo')
	accelerator?: string; // Keyboard shortcut display (e.g., 'Ctrl+S')
	disabled?: boolean;
}

/**
 * Represents a non-executable divider/separator line in a submenu.
 */
export interface MenuItemSeparator {
	type: 'separator';
}

/**
 * Represents a submenu that opens to show more items (e.g., the 'Recent Files' flyout).
 */
export interface MenuItemSubmenu {
	type: 'submenu';
	label: string;
	items: MenuItemContent[]; // Recursively holds more menu items
}

/**
 * A union type for all possible contents of a menu.
 */
export type MenuItemContent = MenuItemAction | MenuItemSeparator | MenuItemSubmenu;

/**
 * Defines the structure for a top-level menu item (e.g., 'File', 'Edit').
 * This is the root of the entire menubar.
 */
export interface TopMenuItem {
	label: string; // The text displayed in the main menubar (e.g., "File")
	id: string; // Unique ID (e.g., 'file', 'edit')
	active: boolean; // If the dropdown menu should be visible
	items: MenuItemContent[]; // The list of items in the dropdown menu
}

/**
 * The full structure of the entire menubar.
 */
export type Menubar = TopMenuItem[];
