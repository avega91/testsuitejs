import Ember from 'ember';

export default Ember.Controller.extend({
    actions: {
        agregarProyecto: function(){
            var nombre = this.get('nombre');
            var descripcion = this.get('descripcion');
            var estatus = false;

            // Crear proyecto
            var nuevoProyecto = this.store.createRecord('proyecto', {
                nombre: nombre,
                descripcion: descripcion,
                estatus: estatus
            });

            // Guardar proyecto
            nuevoProyecto.save();
            Materialize.toast('Proyecto creado', 4000)

            // Limpiar forma
            this.setProperties({
                nombre: '',
                descripcion: ''
            });
        }
    }
});
