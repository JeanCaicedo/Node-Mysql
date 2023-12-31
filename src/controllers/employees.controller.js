import { pool } from '../db.js'


export const getEmployees = async (req, res) => {
    const [ rows ] = await pool.query('SELECT * FROM employees')
    res.json(rows)
    }

export const getEmployeesById = async (req, res) => {
    const [rows] = await  pool.query('SELECT * FROM employees WHERE id = ?', [req.params.id])
    
if (rows.length <= 0) return res.status(404).json({message: 'Empleado no encontrado'})
    res.json(rows[0])
}

export const createEmployees = async (req, res) => {
    const {name, salary} = req.body
    const [rows] = await pool.query('INSERT INTO employees (name, salary) VALUES (?, ?)', [name, salary])
    res.send({ 
        id: rows.insertId,
        name,
        salary
     })
}

export const deleteEmployees = async (req, res) => {
    const [result] = await pool.query('DELETE FROM employees WHERE id = ?', [req.params.id])
    if (result.affectedRows ===  0) return res.status(404).json({message: 'Empleado no encontrado'})
    
    res.sendStatus(204)
}


export const updateEmployees = async (req, res) => {
    const {id} = req.params
    const {name, salary} = req.body
    
    const [result] = await pool.query('UPDATE employees SET name = ?, salary = ? WHERE id = ?', [name, salary, id])
    
    if (result.affectedRows ===  0) return res.status(404).json({message: 'Empleado no encontrado'})

    const [rows] = await pool.query('SELECT * FROM employees WHERE id = ?', [id])

    res.json(rows[0])
}