simpleLook.window.CreateItem = function (config) {
	config = config || {};
	if (!config.id) {
		config.id = 'simplelook-item-window-create';
	}
	Ext.applyIf(config, {
		title: _('simplelook_item_create'),
		width: 550,
		autoHeight: true,
		url: simpleLook.config.connector_url,
		action: 'mgr/item/create',
		fields: this.getFields(config),
		keys: [{
			key: Ext.EventObject.ENTER, shift: true, fn: function () {
				this.submit()
			}, scope: this
		}]
	});
	simpleLook.window.CreateItem.superclass.constructor.call(this, config);
};
Ext.extend(simpleLook.window.CreateItem, MODx.Window, {

	getFields: function (config) {
		return [{
			xtype: 'modx-combo-user',
			fieldLabel: _('simplelook_id_user'),
			name: 'id_user',
			anchor: '99%',
			allowBlank: false
		}];
	},

	loadDropZones: function() {
	}

});
Ext.reg('simplelook-item-window-create', simpleLook.window.CreateItem);


simpleLook.window.UpdateItem = function (config) {
	config = config || {};
	if (!config.id) {
		config.id = 'simplelook-item-window-update';
	}
	Ext.applyIf(config, {
		title: _('simplelook_item_update'),
		width: 550,
		autoHeight: true,
		url: simpleLook.config.connector_url,
		action: 'mgr/item/update',
		fields: this.getFields(config),
		keys: [{
			key: Ext.EventObject.ENTER, shift: true, fn: function () {
				this.submit()
			}, scope: this
		}]
	});
	simpleLook.window.UpdateItem.superclass.constructor.call(this, config);
};
Ext.extend(simpleLook.window.UpdateItem, MODx.Window, {

	getFields: function (config) {
		return [{
			xtype: 'hidden',
			name: 'id',
			id: config.id + '-id',
		}, {
			xtype: 'textfield',
			fieldLabel: _('simplelook_item_name'),
			name: 'name',
			id: config.id + '-name',
			anchor: '99%',
			allowBlank: false,
		}, {
			xtype: 'textarea',
			fieldLabel: _('simplelook_item_description'),
			name: 'description',
			id: config.id + '-description',
			anchor: '99%',
			height: 150,
		}, {
			xtype: 'xcheckbox',
			boxLabel: _('simplelook_item_active'),
			name: 'active',
			id: config.id + '-active',
		}];
	},

	loadDropZones: function() {
	}

});
Ext.reg('simplelook-item-window-update', simpleLook.window.UpdateItem);