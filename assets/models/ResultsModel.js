import mongoose from 'mongoose';
import { number } from 'prop-types';

const result3Schema = new mongoose.Schema({
  "mes":{
    
    
    "name": { "type": "string" },
    
    "imposto":{
        "type": "number",
    },
    "ativos":{
        "type": "Array",
    },
    "lucro":{
        "type": "number",
    }
  }
  
});

const dataset = mongoose.models.results3 || mongoose.model('results', result3Schema);
export default dataset;
