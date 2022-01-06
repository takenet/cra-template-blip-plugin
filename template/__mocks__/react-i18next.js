import { isValidElement, cloneElement } from 'react';
import {
	I18nextProvider as _I18nextProvider,
	initReactI18next as _initReactI18next,
	setDefaults as _setDefaults,
	getDefaults as _getDefaults,
	setI18n as _setI18n,
	getI18n as _getI18n
} from 'react-i18next';

const hasChildren = (node) =>
	node && (node.children || (node.props && node.props.children));

const getChildren = (node) =>
	node && node.children ? node.children : node.props && node.props.children;

const renderNodes = (reactNodes) => {
	if (typeof reactNodes === 'string') {
		return reactNodes;
	}
	return Object.keys(reactNodes).map((key, i) => {
		const child = reactNodes[key];
		const isElement = isValidElement(child);
		if (typeof child === 'string') {
			return child;
		}
		if (hasChildren(child)) {
			const inner = renderNodes(getChildren(child));
			return cloneElement(child, { ...child.props, key: i }, inner);
		}
		if (typeof child === 'object' && !isElement) {
			return Object.keys(child).reduce(
				(str, childKey) => `${str}${child[childKey]}`,
				''
			);
		}
		return child;
	});
};

const useMock = [(k) => k, {}];
useMock.t = (k) => k;
useMock.i18n = { changeLanguage: () => new Promise(() => {}) };

const withTranslation = () => (Component) => (props) =>
	<Component t={(k) => k} {...props} />;

const Trans = ({ children }) =>
	Array.isArray(children) ? renderNodes(children) : renderNodes([children]);

const Translation = ({ children }) => children((k) => k, { i18n: {} });

const useTranslation = () => useMock;

const I18nextProvider = _I18nextProvider;
const initReactI18next = _initReactI18next;
const setDefaults = _setDefaults;
const getDefaults = _getDefaults;
const setI18n = _setI18n;
const getI18n = _getI18n;

export {
	withTranslation,
	Trans,
	Translation,
	useTranslation,
	I18nextProvider,
	initReactI18next,
	setDefaults,
	getDefaults,
	setI18n,
	getI18n
};
