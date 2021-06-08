import './App.css';
import Header from './components/Header';
import Soal from './components/Soal';
import AddSyarat from './components/AddSyarat';
import Jawaban from './components/Jawaban';
import {useState} from 'react';
import axios from 'axios';

function App() {
  const [syarat, setSyarat] = useState([]);
  const [jawaban, setJawaban] = useState([]);
  // add syarat
  const addSyarat = (s) =>{
    const id = Math.floor(Math.random() * 10000) + 1;
    const newSyarat = { id, ...s };
    setSyarat([...syarat, newSyarat])
  }

  // delete syarat
  const deleteSyarat = (id) => {
      setSyarat(syarat.filter((s) => s.id !== id));
  }


  const addSoal = async (p,s) => {
    const obj = { pembagi:p, sisa:s }
    await axios.post('/crt', obj).then(res => {
      setJawaban([res.data]);
    })
  }

  return (
    <div className="container">
        <Header soal = {syarat} onSubmit = {addSoal}/>
        <AddSyarat onAdd = {addSyarat}/>
        {syarat.length > 0 ? <Soal syarat = {syarat} onDelete = {deleteSyarat}/> : ""}
        { jawaban.length > 0 ? <Jawaban key={jawaban[0].id} jawaban = {jawaban[0]}/> : "" }
    </div>
  );
}

export default App;
