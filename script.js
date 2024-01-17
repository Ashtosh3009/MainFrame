const users = [
    { name: 'John Doe', age: 25 },
    { name: 'Alexander', age: 17 },
    { name: 'Nelson Mandela', age: 78 },
    { name: 'Mahatma Gandhi', age: 56 },
    { name: 'Nikol Tesla', age: 39 }
];

function sortAndAlert() {
    const sortedUsers = users.sort((a, b) => a.age - b.age);
    const sortedNames = sortedUsers.map(user => user.name).join(', ');
    window.alert(`Sorted Names: ${sortedNames}`);
}

function showMobileAlert() {
    const yourName = "Your Name"; // Replace with your actual name
    window.alert(`Thank you for choosing mobile, ${yourName}`);
}
