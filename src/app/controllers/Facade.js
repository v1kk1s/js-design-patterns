export default module = ( () => {

  const _private = {
    id: 'id63753887',
    vkName: 'User not found in vkontakte',
    get: function() {
      console.log('current id is :', this.id);
    },
    set: function(id) {
      this.id = id;
    },
    connectToVK: function() {
      VK.init({
        apiId: 5659513
      });
      VK.Api.call('users.get', {uids: this.id, fields: 'contacts'}, (r) => {
        this.vkName = r.response[0].first_name +' ' + r.response[0].last_name;
      });
    },
    getNames: function() {
      console.log(this.vkName, 'vk');
    }
  };

  return {
    facade: function(args) {
      _private.connectToVK();

      setTimeout(() => {
        _private.getNames();
      }, 300);
    }
  }

})();