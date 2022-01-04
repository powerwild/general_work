const { User , Post, Subbreaddit, sequelize, Sequelize: { Op } } = require('./models');

async function buildUser(username, email, password, faveBread) {
    const user = await User.build(
        {username, email, password, faveBread}
    );
    await user.save();
    await sequelize.close();
};

async function createPost(title, content) {
    const post = await Post.create({
        title, content, userId: 1, subId: 1
    })
    await sequelize.close();
};

async function findUser(userId) {
    const user = await User.findByPk(userId, {
        raw: true
    });
    await sequelize.close();
};
// the raw key-value pair returns just the 'body' of the output
async function findUserByEmail(email) {
    const user = await User.findOne({
        where: {email},
        raw: true
    })
    await sequelize.close();
};

async function findPostsBySubId(subId) {
    const posts = await Post.findAll({
        where: {subId},
        raw: true
    })
    await sequelize.close();
};

async function changePassword(userId, password) {
    const user = await User.findByPk(userId);
    user.password = password;
    await user.save();
    await sequelize.close();
};

async function destroyPost(postId) {
    const post = await Post.findByPk(postId);
    await post.destroy();
    await sequelize.close();
};

async function findSomePosts(subId, userId) {
    const posts = await Post.findAll({
        raw: true,
        where: {
            subId,
            userId
        }
    })
    await sequelize.close();
};

async function findPostsByText(keyword) {
    const posts = await Post.findAll({
        where: {
            title: {
                [Op.substring]: keyword
            }
        }
    });
    await sequelize.close();
};

async function getUserAndPosts(userId) {
    const user = await User.findByPk(userId, {
        include: {model: Post}
    })
    await sequelize.close();
};

async function getUserPostsAndSubbreadditWithDoubleDependency(postId) {
    const post = await Post.findByPk(postId, {
        include: [User, Subbreaddit]
    })
    await sequelize.close();
};

async function getUserPostsAndSubbreadditWithNestedDependency(userId) {
    const user = await User.findByPk(userId, {
        include: {
            model: Post,
            include: {model: Subbreaddit}
        }
    })
    await sequelize.close();
};

async function getSubs(userId) {
    const user = await User.findByPk(userId, {
        include: Subbreaddit
    })
    await sequelize.close();
};
