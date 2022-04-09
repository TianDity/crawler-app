const { redisGet, redisSet } = require('../libs/redisClient');
const { getCourses } = require('../services/CourseList');


class Index {
  async index(ctx, next) {
    const sess = ctx.session;

    if (!sess.uid) {
      sess.uid = 1;
      sess.username = 'jsjiajia';
      sess.nickname = 'js++';
      sess.gender = 'male';
    }

    redisSet('a', 1);


    ctx.body = {
      session: sess
    }

    // await ctx.render('index');
  }

  async getCourseData (ctx, next) {
    const cb = ctx.query.callback || 'callback';
    const data = await getCourses();

    ctx.body = data;
  } 
}

module.exports = new Index();
