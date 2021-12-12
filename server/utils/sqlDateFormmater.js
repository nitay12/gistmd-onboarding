exports.sqlDateFormatter = (dateString)=>{
    const date = new Date(dateString);
    const formattedDate = `${date.getFullYear()}-${date.getMonth()+1}-${date.getDate()}`;
    return formattedDate
}