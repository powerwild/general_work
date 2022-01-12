const { Person, Course, sequelize  } = require('../models');

async function lookupPersonAndCourses(personId) {
 return await Person.findByPk(personId, {
   include: {
     model: Course
   }
 })
};

async function lookupPersonByLastName(lastName) {
  return await Person.findAll({where: {lastName}});
};

async function lookupCoursesByPersonEmail(email) {
  return await Course.findAll({
    include: {
      model: Person,
      where: {email}
    }
  })
};

module.exports = {
  lookupPersonAndCourses,
  lookupPersonByLastName,
  lookupCoursesByPersonEmail,
};
