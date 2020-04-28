
exports.up = function(knex) {
    return knex.schema.createTable('cars', tbl =>{
        tbl.increments('carId');
        tbl.text('VIN', 17)
        .unique()
        .notNullable();

        tbl.text('make', 20)
        .unique()
        .notNullable();

        tbl.text('model', 20)
        .unique()
        .notNullable();

        tbl.float('mileage', 2)
        .unique()
        .notNullable();         
        
        tbl.text('transmissionType') // automatic / manual

        tbl.text('status') // clean, salvage, dirty, 

        
    })
  
};

exports.down = function(knex) {

    return knex.schema.dropTableIfExists('cars');
  
};


