export const dateString = (date) => {
    const months = ["Jan", "Feb", "March", "April", "May", "June", "July", "Aug", "Sept", "Oct", "Nov", "Dec"]
    date = date.split("-")
    return `${months[parseInt(date[1])]} ${parseInt(date[2])}, ${date[0]}`
} 