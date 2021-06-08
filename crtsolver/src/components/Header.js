import Button from "./Button";

const Header = ({soal, onSubmit}) => {
    const onClick = () =>{
        let n = soal.length;
        let pembagi = [];
        let sisa = [];
        for (let i = 0; i < n; i++){
            pembagi[i] = parseInt(soal[i].pembagi);
            sisa[i] = parseInt(soal[i].sisa);
        }
        if (pembagi.length === 0 || sisa.length === 0){
            alert("Input Kosong");
            return;
        }
        onSubmit(pembagi,sisa);
    };
    return (
        <header className = 'header'>
            <h1>CRT Solver</h1>
            <Button onClick = {onClick}/>
        </header>
    )
}

export default Header
