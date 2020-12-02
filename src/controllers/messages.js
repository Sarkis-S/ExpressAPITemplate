import Model from '../models/model';

// create new messages Model
const messagesModel = new Model('messages');

export const messagesPage = async (req, res) => {
  try {
    // then use select method to query database, await results
    const data = await messagesModel.select('name, message');
    res.status(200).json({ messages: data.rows });
  } catch (err) {
    res.status(200).json({ messages: err.stack });
  }
};

export const addMessage = async (req, res) => {
  // use destructuring to get name and message
  const { name, message } = req.body;
  const columns = 'name, message';
  const values = `'${name}', '${message}'`;

  try {
    // use our insertWithReturn query model and await data
    const data = await messagesModel.insertWithReturn(columns, values);
    res.status(200).json({ messages: data.rows });
  } catch (err) {
    res.status(200).json({ messages: err.stack });
  }
};
