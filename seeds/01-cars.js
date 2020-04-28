
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('cars').truncate() //truncate resets the ids apart from deleting the table
    .then(function () {
      // Inserts seed entries
      return knex('cars').insert([
        {VIN: '21231213123237587', make: 'Ford', model: 'Escort', mileage: '34.14', transmissionType: 'automatic', status: 'dirty' },
        {VIN: '23645213123237587', make: 'Renault', model: '5', mileage: '23.22', transmissionType: 'manual', status: 'clean' },
        {VIN: '21231689023237587', make: 'Seat', model: 'Ibiza', mileage: '34.42', transmissionType: 'automatic', status: 'salvage' },
        {VIN: '21231789023237587', make: 'Lotus', model: 'Spider', mileage: '24.33', transmissionType: '', status: '' }
   
      
      ]);
    });
};
