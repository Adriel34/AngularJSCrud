angular.module('listContacts', [
  'ngRoute'
]).
component('listContacts', {
  templateUrl: 'list-contact/list-contact.template.html',
  controller: ['$http','$route', function ListContactController($http, $route) {
    var self = this;

    function getUsers() {
      $http.get('http://localhost:8080/contacts')
        .then(function(response) {
          self.users = response.data;
        })
        .catch(function(error) {
          console.error('Erro ao obter usuários:', error);
        });
    }

    getUsers();

    self.deleteUser = function(userId) {
      console.log('Excluindo usuário com ID:', userId);
      $http.delete(`http://localhost:8080/${userId}`)
      .then(function(response) {
        console.log('Usuário deletado com sucesso:', response.data);
        $route.reload();
      })
      .catch(function(error) {
        console.error('Erro ao deletar usuário:', error);
      });
      getUsers();
    };

    self.saveChanges = function(user) {
      const {id, email, updatedName} = user;
       const updateUser = {
        id,
        name: updatedName,
        email
       }
      $http.put(`http://localhost:8080/${user.id}`, updateUser)
        .then(function(response) {
          console.log('Usuário atualizado com sucesso:', response.data);
          $route.reload();
        })
        .catch(function(error) {
          console.error('Erro ao atualizar usuário:', error);
        });
    };
  }]
});
