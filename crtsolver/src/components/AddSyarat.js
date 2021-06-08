import {useState} from 'react';


const AddSyarat = ({onAdd}) => {
    const [pembagi, setPembagi] = useState('');
    const [sisa, setSisa] = useState('');

    const onSubmit = (e) => {
        e.preventDefault();
        if (!pembagi || !sisa){
            alert("Input Kosong");
            return;
        }
        let p = parseInt(pembagi);
        let s = parseInt(sisa);

        if (p <= 1){
            alert("Pembagi harus lebih besar dari 1");
            return;
        }
        if (s < 0){
            alert("Sisa harus setidaknya 0");
            return;
        }
        if (p <= s){
            alert("Pembagi harus lebih besar dari sisa")
            return;
        }
        onAdd({pembagi, sisa});
        setPembagi('');
        setSisa('');
    }

    
    return (
        <form className="add-form" onSubmit = {onSubmit}>
            <div className="form-control">
                <label>Pembagi</label>
                <input type = "number" placeholder="Tambah Pembagi" value={pembagi} 
                onChange ={(e) => setPembagi(e.target.value)}
                />
            </div>
            <div className="form-control">
                <label>Sisa</label>
                <input type = "number" placeholder="Tambah Sisa" value={sisa} 
                onChange ={(e) => setSisa(e.target.value)}
                />
            </div>
            <input type='submit' className='btn btn-block' value='Tambah Kekongruenan'/>
        </form>
    )
}


export default AddSyarat
