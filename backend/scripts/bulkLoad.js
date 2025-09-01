const fs = require('fs');
const csv = require('csv-parser');
const sequelize = require('../config/database');
const User = require('../models/User');
const Book = require('../models/Book');
const Platform = require('../models/Platform');
const Loan = require('../models/Loan');

const loadData = async () => {
  await sequelize.sync({ force: true });

  const filePath = '../../data-2.xlsx - Hoja1.csv';

  fs.createReadStream(filePath)
    .pipe(csv())
    .on('data', async (row) => {
      try {
        const [user, userCreated] = await User.findOrCreate({
          where: { document_number: row['Número de Documento'] },
          defaults: {
            name: row['Nombre del Usuario'],
            address: row['Dirección'],
            phone: row['Teléfono'],
            email: row['Correo Electrónico'],
          },
        });

        const [book, bookCreated] = await Book.findOrCreate({
          where: { isbn: row['ISBN'] },
          defaults: {
            title: row['Título del Libro'],
            author: row['Autor'],
            publication_year: row['Año Publicación'],
          },
        });

        const [platform, platformCreated] = await Platform.findOrCreate({
          where: { name: row['Plataforma de Reserva'] },
        });

        await Loan.create({
          loan_date: row['Fecha y Hora del Préstamo'],
          loan_days: row['Días de Préstamo'],
          status: row['Estado del Préstamo'],
          type: row['Tipo de Préstamo'],
          return_date: row['Fecha de Devolución'] === 'NULL' ? null : row['Fecha de Devolución'],
          late_fee: row['Multa Generada'],
          paid_fee: row['Multa Pagada'],
          UserId: user.id,
          BookId: book.id,
          PlatformId: platform.id,
        });
      } catch (error) {
        console.error('Error processing row:', error);
      }
    })
    .on('end', () => {
      console.log('CSV file successfully processed');
    });
};

loadData();
