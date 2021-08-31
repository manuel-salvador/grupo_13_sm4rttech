module.exports = {
    admin: (req, res) => {
        res.render('admin/indexAdmin')
    },
    agregar: (req, res) => {
        res.render('admin/agregar')
    },
    editar: (req, res) => {
        res.render('admin/editar')

    }
   
        
            
        
}