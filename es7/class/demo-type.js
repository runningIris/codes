export default class Type {
	/**
	 * xoyo-tools
	 *
	 * 监听类型基础方法
	 * @private
	 * @param input {string} 输入值
	 * @param typeString {string} 特定输入类型判断格式，如Object, Boolean, Array等
	 * @returns {boolean}
	 */
	
	static isType(input, typeString) {
		return Object.prototype.toString.call(input) === `[object ${typeString}]`;
	}

	static isObject(input) {
		return Type.isType(input, 'Object');
	}
	static isObjectLike(input) {
		return typeof input === 'object';
	}
	static isArray(input) {
		return Type.isType(input, 'Array');
	}
	static isString(input) {
		return typeof input === 'string';
	}
	static isFunction(input) {
		return typeof input === 'function';
	}
}


