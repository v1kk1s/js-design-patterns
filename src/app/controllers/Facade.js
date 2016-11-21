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
        if (r.response) {
          this.vkName = r.response[0].first_name +' ' + r.response[0].last_name;
        } else {
          this.vkName = 'User not found in vkontakte';
        }
        this.getVkName();
      });
    },
    connectToFB: function() {
      let token = '';
      FB.login((res) => {
        token = res.authResponse.accessToken;
        if(res.status === 'connected') {
          FB.api(
            this.idFB,
            { access_token: token },
            (r) => {
              this.fbName = r.name;
              this.getFbName();
            }
          )
        }
      }, { scope: 'public_profile'} );
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
      }
      if (args.fbId) {
        _private.connectToFB();
      }
    }
  }

})();