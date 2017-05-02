import DS from 'ember-data';

export default DS.Model.extend({
    nombre: DS.attr('string'),
    descripcion: DS.attr('string'),
    creado: DS.attr('string', {
        defaultValue: function(){
            return new Date();
        }
    }),
    estatus: DS.attr('boolean')
});
