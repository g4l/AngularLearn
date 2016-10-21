angular.module('cardApp', [])
  .component('usercard', {
          template: `<div class="panel panel-info"  ng-repeat="usermail in $ctrl.maillist">
                      <mail data-usermail='usermail'></mail>
                    </div>`,
        controller: function() {
          this.viewMessage = false,
          this.viewList = true,
          this.maillist = [{
            "id": 0,
            "fullName": "Иванов Иван",
            "avatarUrl": "https://randomuser.me/api/portraits/thumb/men/57.jpg",
            "birthdate": "1976-10-10",
            "address": "ул. Звенигороская, 47б",
            "email": "ivanov@mail.ru",
            "theme": "Курс Angular JS",
            "message": "Пссс! Парень! Не хочешь немного ангуляра?"
          },{
            "id": 1,
            "fullName": "Петров Петр",
            "avatarUrl": "https://randomuser.me/api/portraits/thumb/men/7.jpg",
            "birthdate": "1957-01-14",
            "address": "ул.Пушкиская, 13",
            "email": "petro@mail.ru"
          },{
            "id": 2,
            "fullName": "Натальина Наталья",
            "avatarUrl": "https://randomuser.me/api/portraits/thumb/women/7.jpg",
            "birthdate": "1990-07-03",
            "address": "ул. Лермонтова, 59",
            "email": "nata@mail.ru"
          }]
        }
  })
  .component('mail', {
    bindings: {
      usermail: '<'
    },
    template:
      `<div class="panel-heading">
        <h3 class="panel-title">{{$ctrl.usermail.fullName}}</h3>
        <button ng-click="$ctrl.viewMessage=!$ctrl.viewMessage">Прочитать</button>
      </div>
      <div class="panel-body" ng-if='$ctrl.viewMessage'>
        <div class="row">
          <div class="col-md-9 col-lg-9">
            <table class="table table-user-information">
              <tbody>
                <tr>
                  <img src='{{$ctrl.usermail.avatarUrl}}'>
                </tr>
                <tr>
                  <td>Дата рождения</td>
                  <td>{{$ctrl.usermail.birthdate}}</td>
                </tr>
                <tr>
                  <td>Адрес</td>
                  <td>{{usermail.address}}</td>
                </tr>
                <tr>
                  <td>Email</td>
                  <td>
                    <a href="mailto:{{usermail.email}}">{{usermail.email}}</a>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>`,
    controller: function() {
      viewMessage: false
    }
  })