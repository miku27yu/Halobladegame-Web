/* ==========================================================================
   HALOBLADEGAME · 众星之环 — 共享脚本
   主题切换 / 购物车与收藏（localStorage）/ Toast / 导航 / 搜索 / 工具函数。
   全站页面共用，减少重复逻辑，便于维护与扩展。
   ========================================================================== */
(function (global) {
    'use strict';

    /* ------------------------------------------------------------------ */
    /* 工具函数                                                           */
    /* ------------------------------------------------------------------ */
    var util = {
        /* 读取 URL 查询参数 */
        getParam: function (name) {
            var m = new RegExp('[?&]' + name.replace(/[\[\]]/g, '\\$&') + '(=([^&#]*)|&|#|$)').exec(location.search);
            if (!m) return '';
            return decodeURIComponent((m[2] || '').replace(/\+/g, ' '));
        },

        /* 转义 HTML（防御性，数据为受信内容） */
        escapeHtml: function (s) {
            return String(s == null ? '' : s)
                .replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;')
                .replace(/"/g, '&quot;').replace(/'/g, '&#39;');
        },

        /* 价格格式化 */
        money: function (n) { return '¥' + Number(n || 0).toLocaleString('zh-CN'); },

        /* 生成星级 HTML */
        stars: function (rating) {
            var full = Math.floor(rating);
            var half = (rating % 1) >= 0.5;
            var html = '';
            for (var i = 0; i < full; i++) html += '<i class="fas fa-star"></i>';
            if (half) html += '<i class="fas fa-star-half-alt"></i>';
            var empty = 5 - full - (half ? 1 : 0);
            for (var j = 0; j < empty; j++) html += '<i class="far fa-star"></i>';
            return html;
        },

        /* 便捷选择器 */
        $: function (sel, ctx) { return (ctx || document).querySelector(sel); },
        $$: function (sel, ctx) { return Array.prototype.slice.call((ctx || document).querySelectorAll(sel)); },

        /* 事件绑定（支持 NodeList/数组） */
        on: function (els, evt, fn) {
            if (!els) return;
            if (els.length === undefined) els = [els];
            els.forEach(function (el) { el.addEventListener(evt, fn); });
        }
    };

    /* ------------------------------------------------------------------ */
    /* 主题切换                                                           */
    /* ------------------------------------------------------------------ */
    var theme = {
        KEY: 'theme',

        isDark: function () { return document.documentElement.classList.contains('dark-mode'); },

        /* 读取偏好并应用（默认跟随系统） */
        apply: function () {
            var saved = localStorage.getItem(this.KEY);
            var dark = saved ? saved === 'dark'
                : (global.matchMedia && global.matchMedia('(prefers-color-scheme: dark)').matches);
            document.documentElement.classList.toggle('dark-mode', dark);
            this.syncIcons();
        },

        /* 切换并保存 */
        toggle: function () {
            var dark = !this.isDark();
            document.documentElement.classList.toggle('dark-mode', dark);
            localStorage.setItem(this.KEY, dark ? 'dark' : 'light');
            this.syncIcons();
            return dark;
        },

        /* 同步所有主题按钮图标：暗色显示太阳，亮色显示月亮 */
        syncIcons: function () {
            var dark = this.isDark();
            util.$$('[data-theme-toggle]').forEach(function (btn) {
                var icon = util.$('i', btn) || btn;
                icon.className = dark ? 'fas fa-sun' : 'fas fa-moon';
                if (btn.title) btn.title = dark ? '切换至亮色模式' : '切换至暗色模式';
            });
        },

        /* 初始化：应用主题 + 绑定所有切换按钮 */
        init: function () {
            this.apply();
            util.$$('[data-theme-toggle]').forEach(function (btn) {
                btn.addEventListener('click', function (e) {
                    e.preventDefault();
                    theme.toggle();
                });
            });
            /* 系统主题变化（用户未手动设置时跟随） */
            if (global.matchMedia) {
                global.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', function (e) {
                    if (localStorage.getItem(theme.KEY) === null) {
                        document.documentElement.classList.toggle('dark-mode', e.matches);
                        theme.syncIcons();
                    }
                });
            }
        }
    };

    /* ------------------------------------------------------------------ */
    /* 本地存储：购物车 + 收藏                                            */
    /* ------------------------------------------------------------------ */
    var store = {
        CART_KEY: 'hb_cart',
        FAV_KEY: 'hb_favorites',

        read: function (key, fallback) {
            try { return JSON.parse(localStorage.getItem(key)) || fallback; }
            catch (e) { return fallback; }
        },
        write: function (key, val) { localStorage.setItem(key, JSON.stringify(val)); },

        /* 购物车 [{id, quantity}] */
        getCart: function () { return this.read(this.CART_KEY, []); },
        saveCart: function (cart) { this.write(this.CART_KEY, cart); },
        cartCount: function () { return this.getCart().reduce(function (t, i) { return t + (i.quantity || 0); }, 0); },
        addToCart: function (id, qty) {
            qty = parseInt(qty || 1, 10);
            var cart = this.getCart();
            var item = cart.find(function (i) { return i.id === id; });
            if (item) item.quantity += qty; else cart.push({ id: id, quantity: qty });
            this.saveCart(cart);
            this.syncCartBadges();
            return cart;
        },
        setCartQty: function (id, qty) {
            var cart = this.getCart();
            var item = cart.find(function (i) { return i.id === id; });
            if (item) { item.quantity = Math.max(1, parseInt(qty || 1, 10)); this.saveCart(cart); }
            this.syncCartBadges();
            return cart;
        },
        removeFromCart: function (id) {
            var cart = this.getCart().filter(function (i) { return i.id !== id; });
            this.saveCart(cart);
            this.syncCartBadges();
            return cart;
        },
        clearCart: function () { this.saveCart([]); this.syncCartBadges(); },
        /* 同步所有 .cart-count 徽章 */
        syncCartBadges: function () {
            var n = this.cartCount();
            util.$$('[data-cart-count]').forEach(function (el) { el.textContent = n; });
        },

        /* 收藏 [productId, ...] */
        getFavorites: function () { return this.read(this.FAV_KEY, []); },
        saveFavorites: function (list) { this.write(this.FAV_KEY, list); },
        isFavorite: function (id) { return this.getFavorites().indexOf(id) > -1; },
        toggleFavorite: function (id) {
            var list = this.getFavorites();
            var i = list.indexOf(id);
            if (i > -1) list.splice(i, 1); else list.push(id);
            this.saveFavorites(list);
            this.syncFavBadges();
            return i === -1; /* true = 现在已收藏 */
        },
        removeFavorite: function (id) {
            var list = this.getFavorites().filter(function (x) { return x !== id; });
            this.saveFavorites(list);
            this.syncFavBadges();
            return list;
        },
        syncFavBadges: function () {
            var n = this.getFavorites().length;
            util.$$('[data-fav-count]').forEach(function (el) { el.textContent = n; });
        },

        /* 初始化所有徽章计数 */
        initBadges: function () { this.syncCartBadges(); this.syncFavBadges(); }
    };

    /* ------------------------------------------------------------------ */
    /* Toast 提示                                                         */
    /* ------------------------------------------------------------------ */
    var toast = {
        show: function (message, type, icon) {
            var stack = util.$('.toast-stack');
            if (!stack) {
                stack = document.createElement('div');
                stack.className = 'toast-stack';
                document.body.appendChild(stack);
            }
            var el = document.createElement('div');
            el.className = 'toast is-' + (type || 'info');
            el.innerHTML = '<i class="' + (icon || 'fas fa-circle-info') + '"></i><span>' + util.escapeHtml(message) + '</span>';
            stack.appendChild(el);
            setTimeout(function () {
                el.classList.add('leaving');
                setTimeout(function () { if (el.parentNode) el.parentNode.removeChild(el); }, 300);
            }, 2800);
        },
        success: function (m) { this.show(m, 'success', 'fas fa-check-circle'); },
        error: function (m) { this.show(m, 'error', 'fas fa-times-circle'); },
        info: function (m) { this.show(m, 'info', 'fas fa-circle-info'); }
    };

    /* ------------------------------------------------------------------ */
    /* 导航                                                               */
    /* ------------------------------------------------------------------ */
    var nav = {
        /* 移动端汉堡菜单 */
        initMobile: function () {
            util.$$('.nav-burger').forEach(function (burger) {
                burger.addEventListener('click', function () {
                    var links = document.getElementById('nav-links');
                    if (links) links.classList.toggle('open');
                });
            });
        },

        /* 依据当前路径与 hash 高亮导航链接 */
        highlight: function () {
            var page = location.pathname.split('/').pop() || 'index.html';
            util.$$('.nav-links a[data-nav]').forEach(function (a) {
                var target = a.getAttribute('data-nav');
                var isActive = target === page;
                /* 处理形如 page#section 的目标 */
                if (!isActive && target.indexOf('#') > -1) {
                    var parts = target.split('#');
                    isActive = parts[0] === page || (parts[0] === '' && location.hash === '#' + parts[1]);
                }
                a.classList.toggle('active', isActive);
            });
        }
    };

    /* ------------------------------------------------------------------ */
    /* 模态框（通用关闭逻辑）                                             */
    /* ------------------------------------------------------------------ */
    function initModals() {
        util.$$('.modal').forEach(function (modal) {
            util.$$('[data-modal-close]', modal).forEach(function (btn) {
                btn.addEventListener('click', function () { modal.classList.remove('open'); });
            });
            modal.addEventListener('click', function (e) {
                if (e.target === modal) modal.classList.remove('open');
            });
        });
    }

    function openModal(id) {
        var m = document.getElementById(id);
        if (m) m.classList.add('open');
    }
    function closeModal(id) {
        var m = document.getElementById(id);
        if (m) m.classList.remove('open');
    }

    /* ------------------------------------------------------------------ */
    /* 通用初始化                                                         */
    /* ------------------------------------------------------------------ */
    function initAll() {
        theme.init();
        nav.initMobile();
        nav.highlight();
        store.initBadges();
        initModals();
    }

    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', initAll);
    } else {
        initAll();
    }

    /* ------------------------------------------------------------------ */
    /* 导出                                                               */
    /* ------------------------------------------------------------------ */
    global.HB = {
        util: util,
        theme: theme,
        store: store,
        toast: toast,
        nav: nav,
        openModal: openModal,
        closeModal: closeModal
    };
})(window);
