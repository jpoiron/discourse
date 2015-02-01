import DiscourseController from 'discourse/controllers/controller';

export default DiscourseController.extend({
    headerImgUrl: function(){
        return Discourse.getURL('/assets/logo-lg.png');
    }.property()
});
