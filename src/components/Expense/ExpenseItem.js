import ExpenseDate from "./ExpenseDate";
import './ExpenseItem.css';
function ExpenseItems(props){
return (
    <div className="ma">
        <ExpenseDate date={props.date}/>
        <div className="sub">
            <h2>{props.title}</h2>
            <div className="p"> ${props.amount}</div>
        </div>
    </div>
);
};

export default ExpenseItems;