'use strict';

angular.module('hipcontactsApp')
    .config(function ($stateProvider) {
        $stateProvider
            .state('contact', {
                parent: 'entity',
                url: '/contact',
                data: {
                    roles: ['ROLE_USER'],
                    pageTitle: 'hipcontactsApp.contact.home.title'
                },
                views: {
                    'content@': {
                        templateUrl: 'scripts/app/entities/contact/contacts.html',
                        controller: 'ContactController'
                    }
                },
                resolve: {
                    translatePartialLoader: ['$translate', '$translatePartialLoader', function ($translate, $translatePartialLoader) {
                        $translatePartialLoader.addPart('contact');
                        return $translate.refresh();
                    }]
                }
            })
            .state('contactDetail', {
                parent: 'entity',
                url: '/contact/:id',
                data: {
                    roles: ['ROLE_USER'],
                    pageTitle: 'hipcontactsApp.contact.detail.title'
                },
                views: {
                    'content@': {
                        templateUrl: 'scripts/app/entities/contact/contact-detail.html',
                        controller: 'ContactDetailController'
                    }
                },
                resolve: {
                    translatePartialLoader: ['$translate', '$translatePartialLoader', function ($translate, $translatePartialLoader) {
                        $translatePartialLoader.addPart('contact');
                        return $translate.refresh();
                    }]
                }
            });
    });
