/**
 * TestController
 *
 * @module      :: Controller
 * @description	:: A set of functions called `actions`.
 *
 *                 Actions contain code telling Sails how to respond to a certain type of request.
 *                 (i.e. do stuff, then send some JSON, show an HTML page, or redirect to another URL)
 *
 *                 You can configure the blueprint URLs which trigger these actions (`config/controllers.js`)
 *                 and/or override them with custom routes (`config/routes.js`)
 *
 *                 NOTE: The code you write here supports both HTTP and Socket.io automatically.
 *
 * @docs        :: http://sailsjs.org/#!documentation/controllers
 */

module.exports = {

	login: function(req, res) {

		User.findOne().where({
			username: req.param('username'),
			password: req.param('password')
		}).exec(function whenIHaveTheUsers (err, user) {
			if (err) return res.serverError(err);
			if (!user) return res.json({
				success: false
			});

			req.session.isAuthenticated = true;
			req.session.user = user;
			res.json({
				success: true
			});
		});
	},


	/**
	 * Overrides for the settings in `config/controllers.js`
	 * (specific to TestController)
	 */
	_config: {}


};