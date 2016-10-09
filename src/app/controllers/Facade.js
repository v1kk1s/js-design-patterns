export default module = ( () => {

  const _private = {
    id: 'id63753887',
    idFB: '100001621989058',
    vkName: 'User not found in vkontakte',
    fbName: 'User not found in facebook',
    fbAccessToken: '',
    get: function() {
      console.log('current id is :', this.id);
    },
    set: function(id) {
      this.id = id;
    },
    connectToVK: function(id) {
      VK.init({
        apiId: 5659513
      });

      VK.Api.call('users.get', {uids: id, fields: 'contacts'}, (r) => {
        this.vkName = r.response[0].first_name +' ' + r.response[0].last_name;
      });
    },
    connectToFB: function() {
      let token = '';
      FB.login(function(res) {
        token = res.authResponse.accessToken;
        //console.log(token);
      }, { scope: 'public_profile'} );

        FB.api(
          this.idFB,
          { access_token: 'EAADxQH4u9tMBAC3uPyr7rjQxOvq4mqzWQwQQ2ZAxzuDwHos3yj6OfResEe6eZC1F8uueVwZATZCU03meCF94ZCLUQ6eF0NK0ZAX1aliMWVmtbYQP74Xi43K17IAhr9ZBPJ2DKo8ZCsu2jvg5lXlqeK4fFwv3ZBnBen9t2DKUFsXsYyQZDZD' },
          (r) => {
            this.fbName = r.name;
          }
        )
    },
    getVkName: function() {
      document.getElementById('vkName').innerHTML = this.vkName;
    },
    getFbName: function() {
      document.getElementById('fbName').innerHTML = this.fbName;
    }
  };

  return {
    facade: function(args) {
      if (args.vkId) {
        _private.connectToVK(args.vkId);

        setTimeout(() => {
          _private.getVkName();
        }, 500);
      }

      if (args.fbId) {
        setTimeout(() => {
          _private.connectToFB();
        }, 300);

        setTimeout(() => {
          _private.getFbName();
        }, 1000);
      }
    }
  }

})();