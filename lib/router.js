var exposed = FlowRouter.group({});

exposed.route('/about', {
  action: function() {
    BlazeLayout.render('layout', {
      main: 'about'
    });
  }
});

exposed.route('/login', {
  action: function() {
    BlazeLayout.render('layout', {
      main: 'login'
    });
  }
});



exposed.route('/request', {
  action: function() {
    BlazeLayout.render('layout', {
      main: 'request'
    });
  }
});

var loggedIn = FlowRouter.group({
  triggersEnter: [
    function() {
      var route;
      if (!(Meteor.loggingIn() || Meteor.userId())) {
        route = FlowRouter.current();
        if (route.route.name !== '/login') {
          Session.set('redirectAfterLogin', route.path);
        }
        return FlowRouter.go('/login');
      }
    }
  ]
});


loggedIn.route('/hotel-list', {
  action: function() {
    BlazeLayout.render('layout', {
      main: 'hotel-list'
    });
  }
});



loggedIn.route('/hotel/:slug', {
  action: function() {
    BlazeLayout.render('layout', {
      main: 'hotel'
    });
  }
});

loggedIn.route('/', {
  action: function() {
    BlazeLayout.render('layout', {
      main: 'home'
    });
  }
});

loggedIn.route('/post/:slug', {
  action: function() {
    BlazeLayout.render('layout', {
      main: 'post'
    });
  }
});



loggedIn.route('/welcome', {
  action: function() {
    BlazeLayout.render('layout', {
      main: 'welcome'
    });
  }
});
