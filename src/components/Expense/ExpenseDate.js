import'./ExpenseDate.css';
function ExpenseDate(props){
    const month = props.date.toLocaleString('en-US', { month: 'long' });
    const day = props.date.toLocaleString('en-US', { day: '2-digit' });
    const year = props.date.getFullYear();
return(
    <div className="main">
        <div className="m">{month}</div>
        <div className="y">{year}</div>
        <div className="d">{day}</div>
    </div>
);
}
export default ExpenseDate;