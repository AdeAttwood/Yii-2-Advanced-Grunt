function extend(target) {
    var sources = [].slice.call(arguments, 1);
    sources.forEach(function (source) {
        for (var prop in source) {
            target[prop] = source[prop];

        }

    });
    return target;
};

var jsconfig = {
    'backend-js':{
        dest:'backend/web/js/script.js',
        src:[

            /* Jquery js
             *
             * Install via composer
             * $ composer require bower-asset/jquery
             */
            'vendor/bower/jquery/dist/jquery.js',

            /* Bootsrtap js
             *
             * Install via composer
             * $ composer require bower-asset/bootstrap-sass
             */
            'vendor/bower/bootstrap-sass/javascripts/bootstrap/affix.js',
            'vendor/bower/bootstrap-sass/javascripts/bootstrap/alert.js',
            'vendor/bower/bootstrap-sass/javascripts/bootstrap/button.js',
            'vendor/bower/bootstrap-sass/javascripts/bootstrap/carousel.js',
            'vendor/bower/bootstrap-sass/javascripts/bootstrap/collapse.js',
            'vendor/bower/bootstrap-sass/javascripts/bootstrap/dropdown.js',
            'vendor/bower/bootstrap-sass/javascripts/bootstrap/modal.js',
            'vendor/bower/bootstrap-sass/javascripts/bootstrap/popover.js',
            'vendor/bower/bootstrap-sass/javascripts/bootstrap/scrollspy.js',
            'vendor/bower/bootstrap-sass/javascripts/bootstrap/tab.js',
            'vendor/bower/bootstrap-sass/javascripts/bootstrap/tooltip.js',
            'vendor/bower/bootstrap-sass/javascripts/bootstrap/transition.js',

            /* Yii js 
             * 
             * To be used in your yii app
             */
            'vendor/yiisoft.yii2.assets/yii.js',

            /* Yii form js 
             * 
             * To be used in your yii app
             * when you are useing forms
             */
            'vendor/yiisoft.yii2.assets/yii.activeForm.js',
            'vendor/yiisoft.yii2.assets/yii.validation.js',

            /* Yii pjax js
             *
             * Handels the yii ajax forms
             */
            'vendor/bower/yii2-pjax/jquery.pjax.js',

            /* Yii captcha js 
             * 
             * To be used in your yii app
             * when you are useing yiis captcha
             */
            'vendor/yiisoft.yii2.assets/yii.captcha.js',

            /* Yii gridview js
             *
             * To be used in your yii app
             * when you are useing the gridview widget
             */
            'vendor/yiisoft.yii2.assets/yii.gridView.js',


             /* Angular js
             *
             * Install via composer
             * $ composer require bower-asset/bower-angular
             */
            //'vendor/bower/angular/angular.js',     // angularjs

        ],
    },
    'frontend-js':{
        dest:'frontend/web/js/script.js',
        src:[

            /* Jquery js
             *
             * Install via composer
             * $ composer require bower-asset/jquery
             */
            'vendor/bower/jquery/dist/jquery.js',

            /* Bootsrtap js
             *
             * Install via composer
             * $ composer require bower-asset/bootstrap-sass
             */
            'vendor/bower/bootstrap-sass/javascripts/bootstrap/affix.js',
            'vendor/bower/bootstrap-sass/javascripts/bootstrap/alert.js',
            'vendor/bower/bootstrap-sass/javascripts/bootstrap/button.js',
            'vendor/bower/bootstrap-sass/javascripts/bootstrap/carousel.js',
            'vendor/bower/bootstrap-sass/javascripts/bootstrap/collapse.js',
            'vendor/bower/bootstrap-sass/javascripts/bootstrap/dropdown.js',
            'vendor/bower/bootstrap-sass/javascripts/bootstrap/modal.js',
            'vendor/bower/bootstrap-sass/javascripts/bootstrap/popover.js',
            'vendor/bower/bootstrap-sass/javascripts/bootstrap/scrollspy.js',
            'vendor/bower/bootstrap-sass/javascripts/bootstrap/tab.js',
            'vendor/bower/bootstrap-sass/javascripts/bootstrap/tooltip.js',
            'vendor/bower/bootstrap-sass/javascripts/bootstrap/transition.js',

            /* Yii js 
             * 
             * To be used in your yii app
             */
            'vendor/yiisoft.yii2.assets/yii.js',

            /* Yii form js 
             * 
             * To be used in your yii app
             * when you are useing forms
             */
            'vendor/yiisoft.yii2.assets/yii.activeForm.js',
            'vendor/yiisoft.yii2.assets/yii.validation.js',

            /* Yii pjax js
             *
             * Handels the yii ajax forms
             */
            'vendor/bower/yii2-pjax/jquery.pjax.js',

            /* Yii captcha js 
             * 
             * To be used in your yii app
             * when you are useing yiis captcha
             */
            'vendor/yiisoft.yii2.assets/yii.captcha.js',

            /* Yii gridview js
             *
             * To be used in your yii app
             * when you are useing the gridview widget
             */
            'vendor/yiisoft.yii2.assets/yii.gridView.js',


             /* Angular js
             *
             * Install via composer
             * $ composer require bower-asset/bower-angular
             */
            //'vendor/bower/angular/angular.js',     // angularjs

        ],
    }
};

var sassconfig = {
    frontend:{
        files:{
            'frontend/web/css/styles.css':'frontend/assets/sass/styles.scss'
        }
    },
    backend:{
        files:{
            'backend/web/css/styles.css':'backend/assets/sass/styles.scss'
        }
    }
};

module.exports = function(grunt) {
    grunt.initConfig({
        concat: {
            options: {
                separator: ';',
            }
        },
        sass : {
        },
        watch : {
            frontendjs : {
                files : 'frontend/assets/js/**/*.js',
                tasks : ['build-js'],
            },
            frontendsass : {
                files :['frontend/assets/sass/**/*.sass', 'frontend/assets/sass/**/*.scss'],
                tasks : ['build-sass'],
            },
            backendjs : {
                files : 'backend/assets/js/**/*.js',
                tasks : ['build-js'],
            },
            backendsass : {
                files :['backend/assets/sass/**/*.sass', 'backend/assets/sass/**/*.scss'],
                tasks : ['build-sass'],
            }
        },
        browserSync : {
            dev : {
                bsFiles : {
                    src : [
                        'backend/assets/**',
                        'backend/config/**',
                        'backend/controllers/**',
                        'backend/models/**',
                        'backend/tests/**',
                        'backend/views/**',
                        'frontend/assets/**',
                        'frontend/config/**',
                        'frontend/controllers/**',
                        'frontend/models/**',
                        'frontend/tests/**',
                        'frontend/views/**',
                        'common/**',
                        'console/config/**',
                        'console/controllers/**',
                        'console/models/**'
                    ]
                },
                options : {
                    proxy : '127.0.0.1:8010',
                    port : '8080',
                    watchTask : true,
                    notify : true,
                    logLevel : 'silent',
                    ghostMode : {
                        clicks : true,
                        scroll : true,
                        links : true,
                        forms : true
                    }
                }
            }
        },
        php: {
            frontend: {
                options: {
                    port: 8010,
                    base: 'frontend/web'
                }
            },
            backend: {
                options: {
                    port: 8010,
                    base: 'backend/web'
                }
            }
        },

    }); 

    /*
     * Load npm grunt tasks
     */
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-sass');
    grunt.loadNpmTasks('grunt-browser-sync');
    grunt.loadNpmTasks('grunt-php');

    /*
     * Insert config vars into the grunt config
     */
    grunt.config('concat', extend({}, grunt.config.get('conact'), jsconfig));
    grunt.config('sass', sassconfig);

    /*
     * Add the pedefined config for development to each of
     * the sass tasks in the sass config and runs the task
     */
    grunt.registerTask('build-sass', function () {
        var newconfig = {};
        var sassdevconfig = {
            options: {
                style: 'expanded',
                update: true
            }

        };
        var gruntsassconfig = grunt.config.get('sass');
        Object.keys(gruntsassconfig).forEach(function(key,index) {
            newconfig[key] = extend({}, gruntsassconfig[key] ,sassdevconfig);
        });
        grunt.config('sass', newconfig)
        grunt.task.run('sass');

        //console.log(JSON.stringify(grunt.config.get('sass'), null, 2));
    });

    /*
     * Runs the task concat
     */
    grunt.registerTask('build-js', function () {
        grunt.task.run('concat');
    });

    //grunt.registerTask('brserve-frontend', [
        //'php:frontend',
        //'browserSync:dev',
    //]);
    //grunt.registerTask('brserve-backend', [
        //'concat',
        //'sass',
        //'php:backend',
        //'browserSync:dev',
        //'watch'
    //]);
    grunt.registerTask('serve-frontend', [
        'build-sass',
        'build-js',
        'php:frontend',
        'watch'
    ]);
    grunt.registerTask('serve-backend', [
        'build-sass',
        'build-js',
        'php:backend',
        'watch'
    ]);
};
