!function(e){"use strict";e.the7StickyRow=function(t){let i,n,c,o=e(t),s=!1,r=e(window),f={};o.vars={stick:{stickOffset:0,currentConfig:null},scroll:{isActive:!1,timerId:null,didScroll:!1,lastScrollTop:0,delta:5,elementHeight:0,isDown:!1}};let l={down:"the7-e-scroll-down",noTransition:"notransition-all"},a={sticky:"the7-e-sticky",stickyActive:"the7-e-sticky-active",stickyEffects:"the7-e-sticky-effects",spacer:"the7-e-sticky-spacer"};e.data(t,"the7StickyRow",o),f={init:function(){i=new The7ElementorSettings(o),c=i.getModelCID(),elementorFrontend.isEditMode()&&elementor.channels.data.on("element:destroy",f.onDestroy),f.bindEvents(),o.refresh(),f.toggle=elementorFrontend.debounce(f.toggle,300)},bindEvents:function(){elementorFrontend.elements.$window.on("the7-resize-width",f.toggle),o.on("the7-sticky:effect-active",f.onEffectActive),o.on("the7-sticky:effect-not-active",f.onEffectNotActive),o.on("the7-sticky:stick",f.activateHideOnScroll),o.on("the7-sticky:unstick",f.deactivateHideOnscroll)},unBindEvents:function(){elementorFrontend.elements.$window.off("the7-resize-width",f.toggle),o.off("the7-sticky:effect-active",f.onEffectActive),o.off("the7-sticky:effect-not-active",f.onEffectNotActive),o.off("the7-sticky:stick",f.activateHideOnScroll),o.off("the7-sticky:unstick",f.deactivateHideOnscroll)},toggle:function(){if(f.isEffectActive()?f.activateEffects():f.deactivateEffects(),f.isStickyActive()){const e=f.getStickyConfig(),t=JSON.stringify(e)!==JSON.stringify(o.vars.stick.currentConfig);null!==o.vars.stick.currentConfig&&t?o.reactivateSticky():f.activateSticky()}else f.deactivateSticky();f.updateHeight()},isEffectActive:function(){if(void 0===n)return!1;var e=elementorFrontend.getCurrentDeviceMode();if("yes"===n.the7_sticky_effects){var t=n.the7_sticky_effects_devices;if(!t||-1!==t.indexOf(e))return!0}return!1},isStickyActive:function(){if(void 0===n)return!1;var e=elementorFrontend.getCurrentDeviceMode();if("yes"===n.the7_sticky_row&&!n.sticky){var t=n.the7_sticky_row_devices;if(!t||-1!==t.indexOf(e))return!0}return!1},onEffectActive:function(){o.find(".the7-e-on-sticky-effect-visibility, .elementor-widget-the7_horizontal-menu").each((function(){e(this).trigger("effect-active")})),f.updateHeight()},onEffectNotActive:function(){o.find(".the7-e-on-sticky-effect-visibility").each((function(){e(this).trigger("effect-not-active")})),f.updateHeight()},updateHeight:function(){o.vars.scroll.isActive&&(o.vars.scroll.elementHeight=o.outerHeight())},refresh:function(){},activateEffects:function(){s||(s=!0,o.reactivateSticky())},deactivateEffects:function(){s&&(s=!1,o.removeClass(a.stickyEffects),o.reactivateSticky())},getStickyConfig:function(){let e=0,t=0;if("yes"===n.the7_sticky_scroll_up){let n=i.getCurrentDeviceSetting("the7_sticky_row_stick_offset");"undefined"!==n&&(e=n.size),t=1}o.vars.stick.stickOffset=e;let c={to:"top",offset:i.getCurrentDeviceSetting("the7_sticky_row_offset"),effectsOffset:i.getCurrentDeviceSetting("the7_sticky_effects_offset"),stickOffset:e,unStickOffset:t,classes:{...a}},r=elementorFrontend.elements.$wpAdminBar;if(s||(c.classes.stickyEffects=""),r.length&&"fixed"===r.css("position")){let e=r.height();c.offset+=e,c.extraOffset=e}return c},activateSticky:function(){f.isStickyInstanceActive()||!f.isStickyActive()||o.hasClass("elementor-sticky")||(o.vars.stick.currentConfig=f.getStickyConfig(),o.The7Sticky(o.vars.stick.currentConfig))},deactivateSticky:function(){f.isStickyInstanceActive()&&(o.The7Sticky("destroy"),o.removeClass(a.stickyEffects),f.deactivateHideOnscroll())},activateHideOnScroll:function(){void 0!==n&&"yes"===n.the7_sticky_scroll_up&&(o.vars.scroll.isActive=!0,o.vars.scroll.didScroll=!1,o.vars.scroll.lastScrollTop=0,f.updateHeight(),r.on("scroll",f.scrollHandler),f.scrollIntervalHandler(!0),o.vars.scroll.timerId=setInterval(f.scrollIntervalHandler,200))},scrollHandler:function(){o.vars.scroll.didScroll=!0},deactivateHideOnscroll:function(){o.vars.scroll.isActive&&(r.off("scroll",f.scrollHandler),clearTimeout(o.vars.scroll.timerId),o.vars.scroll.timerId=null,o.vars.scroll.isActive=!1,o.removeClass(l.down))},scrollIntervalHandler:function(e){if(e){r.scrollTop()>o.vars.scroll.elementHeight&&(o.addClass(l.noTransition),f.setHideScroll(!0),o[0].offsetHeight,o.removeClass(l.noTransition))}if(o.vars.scroll.didScroll){o.vars.scroll.didScroll=!1;let e=r.scrollTop();if(Math.abs(o.vars.scroll.lastScrollTop-e)<=o.vars.scroll.delta)return;e>o.vars.scroll.lastScrollTop?!o.vars.scroll.isDown&&e>o.vars.scroll.elementHeight&&f.setHideScroll(!0):o.vars.scroll.isDown&&f.setHideScroll(!1),o.vars.scroll.lastScrollTop=e}},setHideScroll:function(e){e?(o.addClass(l.down),o.vars.scroll.isDown=!0):(o.removeClass(l.down),o.vars.scroll.isDown=!1)},isStickyInstanceActive:function(){return void 0!==o.data("the7-sticky")},onDestroy:function(e){e.cid===c&&o.delete()}},o.refresh=function(){n=i.getSettings(),f.toggle(),f.refresh()},o.delete=function(){f.unBindEvents(),f.deactivateEffects(),f.deactivateSticky(),o.removeData("the7StickyRow")},o.reactivateSticky=function(){f.isStickyInstanceActive()&&(n=i.getSettings(),f.deactivateSticky(),f.activateSticky())},f.init()};var t=function(t){t.each((function(){var t=e(this);if(t.hasClass("the7-e-sticky-yes")||t.hasClass("the7-e-sticky-row-yes")){if(t.hasClass("the7-e-sticky-spacer")||t.hasClass("elementor-inner-section"))return;var i=e(this).data("the7StickyRow");void 0!==i&&i.delete(),new e.the7StickyRow(this)}}))};e.the7StickyEffectElementHide=function(t){var i,n,c,o=e(t),s="",r={effect:"the7-e-on-sticky-effect-visibility",hide:"the7-e-on-sticky-effect-visibility-hide",show:"the7-e-on-sticky-effect-visibility-show"},f={};o.vars={animDelay:500},e.data(t,"the7StickyEffectElementHide",o),f={init:function(){i=new The7ElementorSettings(o),n=i.getModelCID(),elementorFrontend.isEditMode()&&elementor.channels.data.on("element:destroy",f.onDestroy),o.refresh(),f.bindEvents(),f.toggle=elementorFrontend.debounce(f.toggle,300)},bindEvents:function(){elementorFrontend.elements.$window.on("the7-resize-width",f.toggle),o.on("effect-active",f.onEffectActive),o.on("effect-not-active",f.onEffectNotActive)},unBindEvents:function(){elementorFrontend.elements.$window.off("the7-resize-width",f.toggle),o.off("effect-active",f.onEffectActive),o.off("effect-not-active",f.onEffectNotActive)},toggle:function(){var e=i.getCurrentDeviceSetting("the7_hide_on_sticky_effect");void 0!==e&&(""!==e?f.activateEffects(e):f.deactivateEffects())},activateEffects:function(e){s!==e&&""!==e&&(o.removeClass(r.hide),o.removeClass(r.show),o.addClass(r.effect),o.addClass(r[e]),s=e)},deactivateEffects:function(){""!==s&&(o.removeClass(r.hide),o.removeClass(r.show),o.removeClass(r.effect),f.unsetHeight(),s="")},onDestroy:function(e){e.cid===n&&o.delete()},getHeight:function(){return o.outerHeight()},setHeight:function(e){o.css({height:e})},unsetHeight:function(){o.css({height:""})},updateHeight:function(){f.unsetHeight(),o.removeClass(r[s]),f.setHeight(f.getHeight()),window.setTimeout(f.addEffectClass,1)},addEffectClass:function(){o.addClass(r[s])},onEffectActive:function(){switch(s){case"hide":clearTimeout(c),f.updateHeight();break;case"show":c=window.setTimeout(f.unsetHeight,o.vars.animDelay)}},onEffectNotActive:function(){switch(s){case"hide":c=window.setTimeout(f.unsetHeight,o.vars.animDelay);break;case"show":clearTimeout(c),f.updateHeight()}}},o.refresh=function(){f.toggle()},o.delete=function(){f.unBindEvents(),f.deactivateEffects(),o.removeData("the7StickyEffectElementHide")},f.init()};var i=function(t){t.each((function(){if(!e(this).hasClass("the7-e-sticky-spacer")){var t=e(this).data("the7StickyEffectElementHide");void 0!==t&&t.delete(),new e.the7StickyEffectElementHide(this)}}))};e(window).on("elementor/frontend/init",(function(){function n(e){t(e);let n=new The7ElementorSettings(e).getSettings();if(void 0!==n){The7ElementorSettings.getResponsiveSettingList("the7_hide_on_sticky_effect").some((function(e){return e in n&&""!==n[e]}))&&i(e)}}function c(t){t.each((function(){n(e(this))}))}function o(e,n){var c,o,s=[...The7ElementorSettings.getResponsiveSettingList("the7_sticky_row_offset"),...The7ElementorSettings.getResponsiveSettingList("the7_sticky_effects_offset"),...The7ElementorSettings.getResponsiveSettingList("the7_sticky_row_stick_offset"),"the7_sticky_row_overlap","the7_sticky_effects_devices","the7_sticky_effects","the7_hide_on_sticky_effect"],r=["the7_sticky_row","the7_sticky_row_devices","sticky","flex_direction",...s],f=e.model.get("name");-1!==r.indexOf(f)&&(void 0!==(o=(c=window.jQuery(n.$el)).data("the7StickyRow"))?(o.refresh(),-1!==s.indexOf(f)&&o.reactivateSticky()):t(c));-1!==[...The7ElementorSettings.getResponsiveSettingList("the7_hide_on_sticky_effect")].indexOf(f)&&(void 0!==(o=(c=window.jQuery(n.$el)).data("the7StickyEffectElementHide"))?o.refresh():i(c))}elementorFrontend.elements.$document.on("elementor/popup/show",(function(e,t,i){c(i.$element.find(".elementor-section, .e-container, .e-con"))})),elementorFrontend.elements.$document.on("elementor/popup/hide",(function(t,i,n){n.$element.find(".elementor-section, .e-container, .e-con").each((function(){var t=e(this).data("the7StickyRow");void 0!==t&&t.delete(),void 0!==(t=e(this).data("the7StickyEffectElementHide"))&&t.delete()}))})),elementorFrontend.isEditMode()?(elementorEditorAddOnChangeHandler("section",o),elementorEditorAddOnChangeHandler("container",o),elementorFrontend.hooks.addAction("frontend/element_ready/section",(function(e,t){t(document).ready((function(){n(e)}))})),elementorFrontend.hooks.addAction("frontend/element_ready/container",(function(e,t){t(document).ready((function(){n(e)}))}))):elementorFrontend.on("components:init",(function(){e(document).ready((function(){c(e(".elementor-section, .e-container, .e-con"))}))}))}))}(jQuery);