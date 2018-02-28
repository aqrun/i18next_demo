(function(){
    
    window.getDefaultLanguage = function(){
        var lang = 'en';
        var defaultLang = window.navigator.userLanguage || window.navigator.language;
        if(defaultLang.indexOf('zh') > -1){
            lang = 'cn'
        }
        return lang
    }

    window.bindLanguage = function(options){
        var lang = getDefaultLanguage();

        var init = options.init || function init() {
            $('body').localize();
        }

        i18next.init({
                //debug: true,
                fallbackLng: 'en',
                lng: lang,
                resources: {
                    en: { translation: options.en },
                    cn: { translation: options.cn }
                }
            }, function (err, t) {
                jqueryI18next.init(i18next, $);
                init();
            });
    }
    
})()