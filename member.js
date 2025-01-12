function skillsMember() {
    var member = {
        name: "John",
        age: 30,
        skills: ["HTML", "CSS", "JS"],
        address: {
            city: "New York",
            country: "USA"
        }
    };
    var skills = member.skills;
    return skills;
}