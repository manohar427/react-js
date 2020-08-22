function keepCloning(objectpassed) {
    if (objectpassed === null || typeof objectpassed !== 'object') {
       return objectpassed;
    }
  // give temporary the original obj's constructor
  var temporary = {}
    for (var key in objectpassed) {
        console.log(key);
      temporary[key] = keepCloning(objectpassed[key]);
    }
    return temporary;
  }
  var employeeDetailsOriginal = {  name: 'Manjula', age: 25, Profession: 'Software Engineer' };
  var employeeDetailsDuplicate = (keepCloning(employeeDetailsOriginal));
  employeeDetailsOriginal.name = "NameChanged";
  console.log(employeeDetailsOriginal);
  console.log(employeeDetailsDuplicate);