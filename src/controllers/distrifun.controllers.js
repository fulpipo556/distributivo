const db = require ('../db')


const getAllDistrifun = async (req,res,next) => {
    try {
        const allDistrifun = await db.query('SELECT * FROM distributivo_funcionsus')
        res.json(allDistrifun.rows)
    } catch (error) {
        next(error)
    }

}


const getDistrifun = async (req,res,next) => {
    try {
        const { id }= req.params;
        const result = await db.query("SELECT * FROM distributivo_funcionsus WHERE codfunsus = $1", [id]);
        if (result.rows.length === 0)
            return res.status(404).json({
            message : "Dato no encontrado",
        });
        res.json(result.rows[0]);

    } catch (error) {
        next(error)
    }

}
const crearDistrifun = async (req,res,next) => {
    const { funsus, estadofun}= req.body
    try {
            const result = await db.query("INSERT INTO distributivo_funcionsus ( funsus, estadofun) VALUES ($1,$2) RETURNING *", [
            funsus, estadofun]);
            res.json(result.rows[0])   
    } catch (error) {
       next(error)
    }
    
    
    
    
}

const eliminarDistrifun = async (req,res,next) => {
    try {
        const { id }= req.params;
        const result = await db.query("DELETE FROM distributivo_funcionsus WHERE codfunsus = $1", [id]);
        if (result.rowCount === 0)
            return res.status(404).json({
            message : "Dato no encontrado",
        });
       
        return res.sendStatus(204);

    } catch (error) {
        next(error)
    }

}

const modificaDistrifun = async (req,res,next) => {
    try {
        const { id }= req.params;
        const {funsus, estadofun} = req.body;
        const result = await db.query("UPDATE distributivo_funcionsus SET funsus= $1, estadofun = $2 WHERE codfunsus = $3 RETURNING*", [funsus, estadofun, id]);
          if (result.rows.length === 0)
            return res.status(404).json({
            message : "Dato no encontrado",
        });
        res.json(result.rows[0]);

    } catch (error) {
        next(error)
    }

}

module.exports = {
    getAllDistrifun,
    getDistrifun,
    crearDistrifun,
    eliminarDistrifun,
    modificaDistrifun
}