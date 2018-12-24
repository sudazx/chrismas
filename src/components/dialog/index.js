import Vue from 'vue';
import Main from './component.vue';
let MessageConstructor = Vue.extend(Main);

let instance;
let instances = [];
let seed = 1;

const Dialog = function(options) {
	options = options || {};
	if (typeof options === 'string') {
		options = {
			message: options
		};
	}
	let userOnClose = options.onClose;
	let id = 'message_' + seed++;

	options.onClose = function() {
		Dialog.close(id, userOnClose);
	};
	instance = new MessageConstructor({
		data: options
	});
	instance.id = id;

	instance.vm = instance.$mount();
	document.body.appendChild(instance.vm.$el);
	instance.vm.visible = true;
	instance.dom = instance.vm.$el;
	instances.push(instance);
	return instance.vm;
};


Dialog.close = function(id, userOnClose) {
	for (let i = 0, len = instances.length; i < len; i++) {
		if (id === instances[i].id) {
			if (typeof userOnClose === 'function') {
				userOnClose(instances[i]);
			}
			instances.splice(i, 1);
			break;
		}
	}
}

export default Dialog;
