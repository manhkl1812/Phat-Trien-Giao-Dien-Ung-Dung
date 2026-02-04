import "./Alert.css";

function Alert({ type, tinNhan }) {
    if (!type) return null;
    return (
        <div className={`alert alert-${type}`}>
        {tinNhan}
        </div>
    );
}
export default Alert;