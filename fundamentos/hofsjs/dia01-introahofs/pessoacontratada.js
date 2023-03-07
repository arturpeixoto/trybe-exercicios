const geradorEmail = (fullName) => {
    const email = fullName.replace(' ', '_').toLowerCase() + '@trybe.com'
    return {fullName, email: email};
}
const newEmployees = (gerador) => {
    const employees = {
      id1: gerador('Pedro Guerra'),
      id2: gerador('Luiza Drumond'),
      id3: gerador('Carla Paiva')
    }
    return employees;
  };

console.log(newEmployees(geradorEmail));
