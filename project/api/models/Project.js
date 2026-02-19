import pool from '../config/database.js';

class Project {
  static async create(data) {
    const { title, description, category, location, startDate, endDate, status } = data;
    const query = `
      INSERT INTO projects (title, description, category, location, start_date, end_date, status)
      VALUES ($1, $2, $3, $4, $5, $6, $7)
      RETURNING *
    `;
    const values = [title, description, category, location, startDate, endDate, status];
    const result = await pool.query(query, values);
    return result.rows[0];
  }

  static async findAll() {
    const query = 'SELECT * FROM projects ORDER BY created_at DESC';
    const result = await pool.query(query);
    return result.rows;
  }

  static async findById(id) {
    const query = 'SELECT * FROM projects WHERE id = $1';
    const result = await pool.query(query, [id]);
    return result.rows[0];
  }

  static async update(id, data) {
    const { title, description, category, location, startDate, endDate, status } = data;
    const query = `
      UPDATE projects 
      SET title = $1, description = $2, category = $3, location = $4, 
          start_date = $5, end_date = $6, status = $7, updated_at = NOW()
      WHERE id = $8
      RETURNING *
    `;
    const values = [title, description, category, location, startDate, endDate, status, id];
    const result = await pool.query(query, values);
    return result.rows[0];
  }

  static async delete(id) {
    const query = 'DELETE FROM projects WHERE id = $1 RETURNING *';
    const result = await pool.query(query, [id]);
    return result.rows[0];
  }
}

export default Project;