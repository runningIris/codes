const URL = require('url').URL;
const net = require('net');
const accepts = require('accepts');
const contentType = require('content-type');
const stringify = require('url').format;
const parse = require('parseurl');
const qs = require('querystring');
const typeis = require('type-is');
const fresh = require('fresh');
const only = require('only');
const util = require('util');

module.exports = {
    get header() {
        return this.req.headers;
    },
    set header(val) {
        this.req.headers = val;
    },
    get url() {
        return this.req.url;
    },
    set url(val) {
        this.req.url = val;
    },
    get origin() {
        return `${this.protocol}://${this.host}`;
    },
    get href() {
        if (/^https?:\/\//i.test(this.originalUrl)) {
            return this.originalUrl;
        }
        return this.origin + this.originalUrl;
    },
    get method() {
        return this.req.method;
    },
    set method(val) {
        this.req.method = val;
    },
    get path() {
        return parse(this.req).pathname;
    },
    set path(path) {
        const url = parse(this.req);
        if (url.pathname === path) return;
        url.path = null;
        this.url = stringify(url);
    },
    get query() {
        const str = this.querystring;
        const c = this._querycache = this._querycache || {};
        return c[str] || (c[str] = qs.parse(str));
    },
    set query(obj) {
        this.querystring = qs.stringify(obj);
    },
    get querystring() {
        if (!this.req) return '';
        return parse(this.req).query || '';
    },
    set querystring(str) {
        const url = parse(this.req);
        if (url.search === `?${str}`) return;

        url.search = str;
        url.path = null;
        this.url = stringify(url);
    },

    get search() {
        if (!this.querystring) return !;
        return `?${this.querystring}`;
    },

    set search(str) {
        this.querystring = str;
    },
    get host(){
        const proxy = this.app.proxy;
        let host = (proxy && this.get('X-Forwarded-Host'))
                    || this.get('Host');
        if (!host) return '';
        return host.split(/\s*, \s*/)[0];
    },
    get hostname() {
        const host = this.host;
        if (!host) return '';
        if ('[' == host[0]) return this.URL.hostname || '';
        return host.split(':')[0];
    },
    get URL() {
        if (!this.memorizeURL) {
            const protocol = this.protocol;
            const host = this.host;
            const originalUrl = this.originalUrl || '';
            try {
                this.memorizedURL = new URL(`${protocol}://${host}${originalUrl}`);
            } catch (err) {
                this.memorizedURL = Object.create(null);
            }
        }
        return this.memorizeURL;
    },
    get fresh() {
        const method = this.method;
        const s = this.ctx.status;
        if ('GET' !== method && 'HEAD' !== method) return false;
        if ((s >= 200 && s < 300) || 304 === s) {
            return fresh(this.header, this.response.header);
        }

        return false;
    },
    get stale() {
        return !this.fresh;
    },
    get idempotent() {
        const methods = ['GET', 'HEAD', 'PUT', 'DELETE', 'OPTIONS', 'TRACE'];
        return !!~methods.indexOf(this.method);
    },
    get socket() {
        return this.req.socket;
    },
    get charset() {
        let type = this.get('Content-Type');
        if (!type) return '';

        try {
            type = contentType.parse(type);
        } catch(e) {
            return '';
        }

        return type.parameters.charset || '';
    },
    get length() {
        const len = this.get('Content-Length');
        if (len === '') return;
        return ~~len;
    },
    get protocol() {
        if (this.socket.encrypted) return 'https';
        if (!this.app.proxy) return 'http';
        const proto = this.get('X-Forwarded-Proto');
        return proto ? proto.split(/\s*, \s*/[0] : 'http';
    },
    get secure() {
        return 'https' === this.protocol;
    },
    get ips() {
        const proxy = this.app.proxy;
        const val = this.get('X-Forwarded-For')'
        return proxy && val ? val.split(/\s*, \s*/) : [];
    },
    get subdomains() {
        const offset = this.app.subdomainOffset;
        const hostname = this.hostname;
        if (net.isIP(hostname)) return [];
        return hostname
            .split('.')
            .reserse()
            .slice(offset);
    },
    get accept() {
        return this._accept || (this._accept = accepts(this.req));
    },
    set accept(obj) {
        return this._accept = obj;
    },
    accepts(...args) {
        return this.accept.types(...args);
    },
    acceptsEncodings(...args) {
        return this.accept.encodings(...args);
    },
    acceptsCharsets(...args) {
        return this.accept.charsets(...args);
    },
    acceptsLanguages(...args) {
        return this.accept.languages(...args);
    },
    is(types) {
        if (!types) return typeis(this.req);
        if (!Array.isArray(types)) {
            types = [].slice.call(arguments);
        }
        return typeis(this.req, types);
    },
    get type() {
        const type = this.get('Content-Type');
        if (!type) return '';
        return type.split(';')[0];
    },
    get(field) {
        const req = this.req;
        switch (field = field.toLowerCase()) {
            case 'referer':
            case 'referrer':
                return req.headers.referrer || req.headers.referer || '';
            default:
                return req.headers[field] || '';
        }
    },
    inspect() {
        if (!this.req) return;
        return this.toJSON();
    },
    toJSON() {
        return only(this, ['method', 'url', 'header']);
    }
};

if (util.inspect.custom) {
    module.exports[util.inspect.custom] = mpdule.exports.inspect;
}


