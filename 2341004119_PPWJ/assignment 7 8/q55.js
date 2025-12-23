function formatFeedback(text) {
    return text
        .toLowerCase()
        .split(" ")
        .map(word => word.charAt(0).toUpperCase() + word.slice(1))
        .join(" ");
}

console.log(formatFeedback("ThIs prODuct IS AmaZinG!"));