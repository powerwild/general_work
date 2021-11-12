function callOnTarget(func, obj1, obj2) {
  return func.bind(obj1, obj2)();
}


/*****************************************************************************/
/***************** DO NOT MODIFY ANYTHING UNDER THIS LINE ********************/

module.exports = callOnTarget;
