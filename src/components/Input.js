import React from 'react'
import '../components/Style.scss';

function Input() {
    const [textAreaCount, ChangeTextAreaCount] = React.useState(0);

    const recalculate = e => {
        ChangeTextAreaCount(e.target.value.length);
    };
    const handleSubmit = (e) => {
        e.preventDefault();
        alert(`Form submitted `);    
    }
    return (
        <form class="textOnInput"  onSubmit = {handleSubmit}>
            <label for="inputText">Enter 10-digit PAN</label>
            <input class="form-control" type="text" maxLength={10}
                onChange={recalculate} />
            <p>{textAreaCount}/10</p>
            <button type='submit'><span>VERIFY</span></button>
        </form>
    )
}

export default Input