'use strict';

angular.
  module('newContact').
  component('newContact', {
    templateUrl: 'new-contact/new-contact.template.html',
    controller: ['$location', '$http',
      function NewContactController($location, $http) {
        this.user = {
          name: '',
          email: ''
        };

        var self = this;

        self.createUser = function(user) {
          console.log('Novo usuário:', user);
          $http.post('http://localhost:8080/add-contact', user)
            .then(function(response) {
              console.log('Usuário criado com sucesso:', response.data);
              $location.path('/contact');
            })
            .catch(function(error) {
              console.error('Erro ao criar usuário:', error);
            });
        };
      }
    ]
  });