import mongoose from 'mongoose';
import { number } from 'prop-types';

const resultSchema = new mongoose.Schema({
  mes: {
    bsontype: Array,
    uniqueItems: true,
    imposto:{
        bsontype: number,
    },
    ativos:{
        bsontype: Array,
    },
    lucro:{
        bsontype: number,
    },
},
{
  timestamps: true,
});

const dataset = mongoose.models.results || mongoose.model('results', resultSchema);
export default dataset;
