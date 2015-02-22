/**
 * TODO:
 *      Дописать тесты с использованием каркасов, как пример `Jasmine`
 */
define(

    ['jquery', 'underscore'],

    function( $, _ ) {

        var private = {
            debug: true,

            map: [],

            add : function(deps) {
                this.log('require', deps);

                this.map = _.union(this.map, deps);
            },

            /**
             * TODO:
             *      Нужно проверять были ли подключены модули,
             *      но также нужно дописать,
             *      что бы учитывались модули,
             *      которые были подключены внутри модулей
             *
             *      Сейчас только мониторятся, которые явно были заданы в функции add
             */
            diff : function(deps) {
                return _.difference(deps, this.map).length;
            },

            log: function(description, message) {
                if (this.debug) {
                    window.console.log({
                        description : description,
                        message: message
                    });
                }
            }
        };

        var proxy = {

            attach: function(selector, event, deps) {

                $(selector).one(event, function() {
                    if (private.diff(deps)) {
                        var $self = $(this);

                        require(deps, function() {

                            private.add(deps);

                            $self.trigger(event);
                        });
                    }
                });

            },

            debug: function(debug) {
                private.debug = debug;
            }

        };

        return proxy;
    }
);