var exposed = FlowRouter.group({});

exposed.route('/', {
  name: 'welcome-page',
  action: function() {
    BlazeLayout.render('layoutSimple', {
      main: 'welcome'
    });
  }
});


exposed.route('/about', {
  action: function() {
    BlazeLayout.render('layout', {
      main: 'about'
    });
  }
});

exposed.route('/login', {
  name: 'login-page',
  action: function() {
    BlazeLayout.render('layoutSimple', {
      main: 'login-page'

    });
  }
});



exposed.route('/request', {
  name: 'request-page',
  action: function() {
    BlazeLayout.render('layoutSimple', {
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


loggedIn.route('/post/:slug', {
  action: function() {
    BlazeLayout.render('layout', {
      main: 'post'
    });
  }
});
